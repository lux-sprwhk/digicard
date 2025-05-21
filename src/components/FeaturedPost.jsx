import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';

import ClassicFeaturedPost from './ClassicFeaturedPost';

const FeaturedPost = ({ theme }) => {
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

  if (theme === 'web2' || theme === 'csszen') {
    return <ClassicFeaturedPost featuredPost={featuredPost} theme={theme} />;
  }

  return (
    <section
      className={clsx(
        'p-5',
        theme !== 'web2' && 'border-t border-github-lightGray',
        'dark:border-dracula-currentLine',
        'matrix:border-matrix-glow',
        'matrix:shadow-lg'
      )}
    >
      <h2 className={clsx('section-heading', 'mb-4')}>Blog</h2>
      <div
        className={clsx(
          'bg-white dark:bg-dracula-currentLine',
          'matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:hover:shadow-matrix-glow',
          'web2:bg-web2-cardBg web2:border-web2-border',
          'rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all',
          'border dark:border-dracula-purple matrix:border-matrix-glow web2:border-web2-border dark:hover:border-'
        )}
      >
        <a
          href={featuredPost.link}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx('block no-underline text-inherit')}
        >
          <div className={clsx('aspect-video overflow-hidden')}>
            <img
              src={featuredPost.image}
              alt="Featured post thumbnail"
              className={clsx(
                "w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              )}
            />
          </div>
          <div className={clsx("p-4")}>
            <h3 className={clsx("text-lg font-semibold mb-2")}>{featuredPost.title}</h3>
            <p className={clsx("mb-4")}>{featuredPost.description}</p>
            <span className={clsx("inline-flex items-center gap-2 text-matrix-green font-medium")}>Read More<FaArrowRight /></span>
          </div>
        </a>
      </div>
      <div>
        <a
          href="https://luhsprwhk.beehiiv.com"
          className={clsx(
            "block w-full mt-4 py-2 text-center rounded bg-github-blue text-white font-medium transition-colors hover:bg-github-lightBlue",
            "dark:bg-dracula-purple dark:hover:bg-dracula-pink",
            "matrix:bg-matrix-terminal matrix:border matrix:border-matrix-glow matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)]"
          )}
        >
          View Archives
        </a>
      </div>
    </section>
  );
};

export default FeaturedPost;