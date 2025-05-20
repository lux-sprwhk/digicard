import { FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';

const ClassicFeaturedPost = ({ featuredPost }) => {
  if (!featuredPost) return null;
  return (
    <section
      className={clsx(
        'p-6',
        'bg-web2-background',
        'border-t border-web2-border',
        'rounded-xl',
        'mb-6'
      )}
    >
      <h2 className={clsx(
        'web2:text-web2-primaryDark csszen:text-csszen-text',
        'text-2xl',
        'mb-6',
      )}>
        Blog
      </h2>
      <div className={clsx(
        'flex flex-row items-start gap-6',
        'bg-white/70 rounded-lg',
        'p-4'
      )}>
        <img
          src={featuredPost.image}
          alt="Featured post thumbnail"
          className={clsx(
            'w-32 h-32 object-cover rounded shadow-sm',
            'border border-web2-border',
            'mt-2 mb-2 ml-2'
          )}
          style={{ float: 'left' }}
        />
        <div className="flex-1">
          <h3 className={clsx(
            'text-xl',
            'web2:text-web2-primary csszen:text-csszen-text',
            'mb-1'
          )}>{featuredPost.title}</h3>
          <p className={clsx('text-web2-text', 'mb-2')}>{featuredPost.description}</p>
          <a
            href={featuredPost.link}
            className={clsx('inline-flex items-center gap-2 underline hover:text-web2-primary transition-colors text-base')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more <FaArrowRight />
          </a>
        </div>
      </div>
      <a
        href="https://luhsprwhk.beehiiv.com"
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          'mt-4 block',
          'underline',
          'web2:text-web2-primary csszen:text-csszen-text',
          'hover:text-blue-800 csszen:hover:text-[#8b7c4a]',
          'transition-colors',
          'text-base',
          'font-normal',
        )}
      >
        View Archives
      </a>
    </section>
  );
};

export default ClassicFeaturedPost;
