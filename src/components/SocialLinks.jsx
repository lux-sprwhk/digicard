import { useContentful } from '../hooks/useContentful';
import { getSocialLinks } from '../utils/contentful';
import DynamicIcon from './DynamicIcon';
import clsx from 'clsx';

const SocialLinks = () => {
  const { data: socialLinks, loading, error } = useContentful(getSocialLinks);

  if (loading) return <div>Loading social links...</div>;
  if (error) return <div>Error loading social links: {error}</div>;
  if (!socialLinks || socialLinks.length === 0) return null;

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Connect</h2>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {socialLinks
          .filter(link => link.active && !link.disabled)
          .sort((a, b) => a.order - b.order)
          .map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'flex items-center justify-center gap-2 p-3 rounded-lg transition-all duration-200',
                'sm:flex-1 hover:scale-105 hover:shadow-lg',
                'bg-github-blue text-white hover:bg-github-lightBlue',
                'dark:bg-dracula-comment dark:hover:bg-dracula-purple',
                'matrix:bg-matrix-terminal matrix:text-matrix-highlight matrix:border matrix:border-matrix-glow',
                'web2:bg-web2-primary web2:text-white web2:hover:bg-web2-secondary'
              )}
              title={link.name}
            >
              <DynamicIcon iconName={link.icon} size={30} />
              <span className="text-sm">{link.name}</span>
            </a>
          ))}
      </div>
    </section>
  );
};

export default SocialLinks;
