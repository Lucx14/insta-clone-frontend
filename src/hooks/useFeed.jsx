import { useState, useCallback } from 'react';
import {
  createLike as apiCreateLike,
  getPosts as apiGetPosts,
} from '../api/posts';

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

  return [posts, getFeed, recordLike, loading, error];
}
