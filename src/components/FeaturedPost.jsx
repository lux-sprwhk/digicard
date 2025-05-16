import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedPost = () => {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/featuredPost.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load featured post');
        return res.json();
      })
      .then(data => {
        setFeaturedPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading featured post...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!featuredPost) return null;

  return (
    <section className="p-5 border-t border-github-lightGray dark:border-dracula-currentLine matrix:border-matrix-glow matrix:shadow-lg">
      <h2 className="section-heading mb-4">Featured Post</h2>
      <div className="bg-white dark:bg-dracula-currentLine matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:hover:shadow-matrix-glow rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
        <a href={featuredPost.link} target="_blank" rel="noopener noreferrer" className="block no-underline text-inherit">
          <div className="aspect-video overflow-hidden">
            <img
              src={featuredPost.image}
              alt="Featured post thumbnail"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{featuredPost.title}</h3>
            <p className="mb-4">{featuredPost.description}</p>
            <span className="inline-flex items-center gap-2 text-matrix-green font-medium">
              Read more <FaArrowRight />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default FeaturedPost;