import { useState, useCallback } from 'react';
import {
  createLike as apiCreateLike,
  getFeed as apiGetFeed,
} from '../api/posts';

export default function useFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getFeed = useCallback(() => {
    setLoading(true);
    apiGetFeed()
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

  const recordLike = useCallback((postId) => {
    setLoading(true);
    apiCreateLike(postId)
      .then(() => {
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return [posts, getFeed, recordLike, loading, error];
}
