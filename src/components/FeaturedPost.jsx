import { useState, useEffect } from 'react';
import clsx from 'clsx';
import DynamicIcon from './DynamicIcon';
import SectionHeading from './SectionHeading';

import ClassicFeaturedPost from './ClassicFeaturedPost';
import { getFeaturedPost } from '../utils/beehiiv';

const FeaturedPost = ({ theme }) => {
  const [beePost, setBeePost] = useState(null);
  const [beePostLoading, setBeePostLoading] = useState(true);
  const [fallbackPost, setFallbackPost] = useState(null);
  const [fallbackLoading, setFallbackLoading] = useState(true);

  // Fallback to JSON file if Beehiiv fails or returns no data
  useEffect(() => {
    const fetchBeehiivPost = async () => {
      setBeePostLoading(true);
      const post = await getFeaturedPost();
      if (!post) {
        setFallbackPost(post);
        setFallbackLoading(false);
      }
      setBeePost(post);
      setBeePostLoading(false);
    };
    fetchBeehiivPost();
  }, []);

  const loading = beePostLoading || fallbackLoading;
  const featuredPost = beePost || fallbackPost;

  if (loading && !featuredPost) return <div>Loading featured post...</div>;
  if (!featuredPost) return null;

  const isBeePost = !!featuredPost?.web_url;

  const sectionClassName = clsx(
    'p-5',
    theme !== 'web2' && 'border-t border-github-lightGray',
    'dark:border-dracula-currentLine',
    'matrix:border-matrix-glow',
    'matrix:shadow-lg'
  );

  if (isBeePost && !beePostLoading) {
    return (
      <section className={sectionClassName}>
        <SectionHeading>Latest Post</SectionHeading>
        <BeehiivPost post={featuredPost} />
      </section>
    );
  }

  if (theme === 'web2' || theme === 'csszen') {
    return <ClassicFeaturedPost featuredPost={featuredPost} theme={theme} />;
  }

  return (
    <section className={sectionClassName}>
      <SectionHeading>Latest Post</SectionHeading>
      <FallbackPost post={featuredPost} />
    </section>
  );
};

const BeehiivPost = ({ post }) => {
  return (
    <>
      <img src={post.thumbnail_url} alt={post.title} />
      <h4 className="text-xl font-bold mt-4 font-heading text-github-blue dark:text-dracula-purple web2:text-web2-text matrix:text-matrix-highlight">
        {post.title}
      </h4>
      <p className="mt-2 mb-4 font-body text-github-text dark:text-dracula-foreground web2:text-web2-text matrix:text-matrix-highlight">
        {post.subtitle}
      </p>
      <a
        className={clsx(
          'block text-center py-2 bg-github-blue text-white no-underline transition-colors hover:bg-github-lightBlue',
          'dark:bg-dracula-purple dark:hover:bg-dracula-pink',
          'web2:bg-web2-primary web2:text-white web2:hover:bg-web2-secondary web2:hover:bg-web2-success web2:border-web2-border web2:shadow-web2-border web2:drop-shadow-web2-border',
          'matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)] matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg',
          'relative overflow-hidden'
        )}
        href={post.web_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className={clsx(
            'inline-flex items-center gap-2 text-matrix-green font-medium'
          )}
        >
          Read More
          <DynamicIcon iconName="FaArrowRight" />
        </span>
      </a>
    </>
  );
};

const FallbackPost = ({ post }) => {
  return (
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
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx('block no-underline text-inherit')}
      >
        <div className={clsx('aspect-video overflow-hidden')}>
          <img
            src={post.image}
            alt="Featured post thumbnail"
            className={clsx(
              'w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            )}
          />
        </div>
        <div className={clsx('p-4')}>
          <h3 className={clsx('text-lg font-semibold mb-2')}>{post.title}</h3>
          <p className={clsx('mb-4')}>{post.description}</p>
          <span
            className={clsx(
              'inline-flex items-center gap-2 text-matrix-green font-medium'
            )}
          >
            Read More
            <DynamicIcon iconName="FaArrowRight" />
          </span>
        </div>
      </a>
    </div>
  );
};

export default FeaturedPost;
