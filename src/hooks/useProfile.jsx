import { useState, useCallback } from 'react';
import {
  createFollow as apiCreateFollow,
  deleteFollow as apiDeleteFollow,
  getUser as apiGetUser,
  updateAvatar as apiUpdateAvatar,
} from '../api/users';
import {
  createPost as apiCreatePost,
  deletePost as apiDeletePost,
} from '../api/posts';

export default function useProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [postCount, setPostCount] = useState(0);

  const getUser = useCallback((username) => {
    setLoading(true);
    apiGetUser(username)
      .then((res) => {
        setUser(res);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const followUser = useCallback(
    (followedId) => {
      setLoading(true);
      apiCreateFollow(followedId)
        .then(() => {
          const updatedUser = () => {
            return {
              ...user,
              followed_by_current_user: true,
            };
          };
          setUser(updatedUser);
          setLoading(false);
          setError(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    },
    [user]
  );

  const unfollowUser = useCallback(
    (followedId) => {
      setLoading(true);
      apiDeleteFollow(followedId)
        .then(() => {
          const updatedUser = () => {
            return {
              ...user,
              followed_by_current_user: false,
            };
          };
          setUser(updatedUser);
          setLoading(false);
          setError(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    },
    [user]
  );

  const newPost = useCallback(
    (username, caption, formData) => {
      setLoading(true);
      apiCreatePost(caption, formData)
        .then(() => {
          setLoading(false);
          setError(false);
          getUser(username);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    },
    [getUser]
  );

  const changeAvatar = useCallback(
    (username, formData) => {
      setLoading(true);
      apiUpdateAvatar(username, formData)
        .then(() => {
          setLoading(false);
          setError(false);
          setPostCount((prevState) => prevState + 1);
          getUser(username);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    },
    [getUser]
  );

  const removePost = useCallback(
    (username, postId) => {
      setLoading(true);
      apiDeletePost(postId)
        .then(() => {
          setLoading(false);
          setError(false);
          setPostCount((prevState) => prevState - 1);
          getUser(username);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    },
    [getUser]
  );

  return [
    user,
    getUser,
    followUser,
    unfollowUser,
    newPost,
    changeAvatar,
    removePost,
    loading,
    error,
    postCount,
  ];
}
