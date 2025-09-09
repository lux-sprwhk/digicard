const API_KEY = import.meta.env.VITE_BEEHIIV_API_KEY;
const PUBLICATION_ID = import.meta.env.VITE_BEEHIIV_PUBLICATION_ID;
const BASE_URL = '/api';

export const getFeaturedPost = async () => {
  if (!API_KEY || !PUBLICATION_ID) {
    console.warn('Beehiiv API key or Publication ID is not set.');
    return null;
  }

  try {
    const response = await fetch(
      `${BASE_URL}/publications/${PUBLICATION_ID}/posts?limit=1&status=confirmed&sort_by=publish_date&direction=desc`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch posts from Beehiiv');
    }

    const { data: posts } = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error afetching featured post from Beehiiv:', error);
    return null;
  }
};
