import { useContentful } from '../hooks/useContentful';
import { getSocialLinks } from '../utils/contentful';
import DynamicIcon from './DynamicIcon';
import clsx from 'clsx';

const SocialLinksExample = () => {
  const { data: socialLinks, loading, error } = useContentful(getSocialLinks);

  if (loading) return <div>Loading social links...</div>;
  if (error) return <div>Error loading social links: {error}</div>;
  if (!socialLinks || socialLinks.length === 0) return null;

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Connect</h2>
      <div className="flex gap-4">
        {socialLinks
          .filter(link => link.active)
          .sort((a, b) => a.order - b.order)
          .map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'flex items-center gap-2 p-2 rounded-lg transition-all duration-200',
                'hover:scale-110 hover:shadow-lg',
                'bg-github-blue text-white hover:bg-github-lightBlue',
                'dark:bg-dracula-purple dark:hover:bg-dracula-pink',
                'matrix:bg-matrix-terminal matrix:text-matrix-highlight matrix:border matrix:border-matrix-glow',
                'web2:bg-web2-primary web2:text-white web2:hover:bg-web2-secondary'
              )}
              title={link.name}
            >
              <DynamicIcon iconName={link.icon} size={20} />
              <span className="text-sm">{link.name}</span>
            </a>
          ))}
      </div>
    </section>
  );
};

export default SocialLinksExample;
