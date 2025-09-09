import { useState, useEffect } from 'react';
import { getFeaturedPost } from '../utils/beehiiv';
import fallbackPostData from '../featuredPost.json';

export const useBeeHiiv = () => {
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);
  const [fallbackPost, setFallbackPost] = useState(null);
  const [fallbackLoading, setFallbackLoading] = useState(true);

  // Fallback to JSON file if Beehiiv fails or returns no data
  useEffect(() => {
    const fetchBeehiivPost = async () => {
      setPostLoading(true);
      const post = await getFeaturedPost();
      if (!post) {
        setFallbackPost(fallbackPostData);
        setFallbackLoading(false);
      }
      setPost(post);
      setPostLoading(false);
    };
    fetchBeehiivPost();
  }, []);

  const loading = postLoading || fallbackLoading;

  return { post, loading, fallbackPost };
};
