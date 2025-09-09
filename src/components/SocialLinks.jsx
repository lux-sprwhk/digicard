import { useContentful } from '../hooks/useContentful';
import { getSocialLinks } from '../utils/contentful';
import DynamicIcon from './DynamicIcon';
import clsx from 'clsx';

const SocialLinks = ({ theme }) => {
  const { data: socialLinks, loading, error } = useContentful(getSocialLinks);

  if (loading) return <div>Loading social links...</div>;
  if (error) return <div>Error loading social links: {error}</div>;
  if (!socialLinks || socialLinks.length === 0) return null;

  if (theme === 'csszen') {
    return <CSSZenLinks links={socialLinks} />;
  }

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

// CSS Zen sidebar: vertical, text-only links
const CSSZenLinks = ({ links }) => {
  return (
    <aside
      className={clsx(
        'csszen-links-sidebar',
        'p-4 bg-[#fffbe6] border-l border-[#b6a16b] rounded-xl shadow-md flex flex-col items-end'
      )}
    >
      <h2 className={clsx('font-bold mb-4 text-[#b6a16b] text-lg')}>
        Connect & Follow
      </h2>
      <nav>
        <ul className={clsx('flex flex-col gap-3 items-end')}>
          {links
            .sort((a, b) => a.order - b.order)
            .filter(link => !link.disabled)
            .map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className={clsx(
                    'text-[#b6a16b]',
                    'underline',
                    'hover:text-[#8b7c4a]',
                    'transition-colors',
                    'text-base'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SocialLinks;
