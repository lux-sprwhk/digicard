import { useState, useEffect } from 'react';
import { getFeaturedPost } from '../utils/beehiiv';

export const useBeeHiiv = () => {
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);

  useEffect(() => {
    const fetchBeehiivPost = async () => {
      setPostLoading(true);
      const post = await getFeaturedPost();
      setPost(post);
      setPostLoading(false);
    };
    fetchBeehiivPost();
  }, []);

  const loading = postLoading;

  return { post, loading };
};
