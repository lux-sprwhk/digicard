export const getFeaturedPost = async () => {
  try {
    const response = await fetch('/.netlify/functions/beehiiv-proxy');

    if (!response.ok) {
      throw new Error('Failed to fetch posts from Beehiiv');
    }

    const { data: posts } = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching featured post from Beehiiv:', error);
    return null;
  }
};
