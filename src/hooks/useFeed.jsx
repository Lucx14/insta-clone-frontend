import { useState, useCallback } from 'react';
import {
  createLike as apiCreateLike,
  getPosts as apiGetPosts,
} from '../api/posts';
import {
  createFollow as apiCreateFollow,
  deleteFollow as apiDeleteFollow,
} from '../api/users';

export default function useFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getFeed = useCallback(() => {
    setLoading(true);
    apiGetPosts()
      .then((res) => {
        setPosts(res);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const recordLike = useCallback(
    (postId) => {
      setLoading(true);
      apiCreateLike(postId)
        .then(() => {
          const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
              const newLikeCount = post.like_count + 1;
              return {
                ...post,
                like_count: newLikeCount,
              };
            }
            return {
              ...post,
            };
          });
          setPosts(updatedPosts);
          setLoading(false);
          setError(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    },
    [posts]
  );

  const followUser = useCallback(
    (followedId) => {
      setLoading(true);
      apiCreateFollow(followedId)
        .then(() => {
          const updatedPosts = posts.map((post) => {
            if (post.author.id === followedId) {
              return {
                ...post,
                author: {
                  ...post.author,
                  followed_by_current_user: true,
                },
              };
            }
            return {
              ...post,
            };
          });
          setPosts(updatedPosts);
          setLoading(false);
          setError(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    },
    [posts]
  );

  const unfollowUser = useCallback(
    (followedId) => {
      setLoading(true);
      apiDeleteFollow(followedId)
        .then(() => {
          const updatedPosts = posts.map((post) => {
            if (post.author.id === followedId) {
              return {
                ...post,
                author: {
                  ...post.author,
                  followed_by_current_user: false,
                },
              };
            }
            return {
              ...post,
            };
          });
          setPosts(updatedPosts);
          setLoading(false);
          setError(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    },
    [posts]
  );

  return [posts, getFeed, recordLike, followUser, unfollowUser, loading, error];
}
