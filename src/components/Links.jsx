import clsx from 'clsx';
import DynamicIcon from './DynamicIcon';

const createRipple = event => {
  const button = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.querySelector('.ripple');
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
};

const LinkItem = ({ href, icon, label }) => (
  <a
    href={href}
    className={clsx(
      'flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-dracula-currentLine matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg rounded-lg text-github-text dark:text-dracula-foreground no-underline transition-all hover:bg-github-blue hover:text-white dark:hover:bg-dracula-purple hover:-translate-y-1 hover:shadow-md matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)]',
      'web2:bg-web2-cardBg web2:text-web2-text web2:hover:bg-web2-secondary web2:hover:bg-web2-success web2:border-web2-border web2:shadow-web2-border web2:drop-shadow-web2-border'
    )}
    onClick={createRipple}
  >
    <DynamicIcon
      iconName={icon}
      className="text-3xl mb-2 transition-transform duration-300 hover:scale-125"
      size={32}
    />
    <span>{label}</span>
  </a>
);

const Links = ({ theme }) => {
  const links = [
    {
      href: 'https://luhsprwhk.beehiiv.com/subscribe',
      icon: 'FaRssSquare',
      label: 'Blog',
      order: 1,
    },
    {
      href: 'https://github.com/luhsprwhk',
      icon: 'FaGithub',
      label: 'GitHub',
      order: 2,
    },
    {
      href: 'https://linkedin.com/in/luhsprwhk',
      icon: 'FaLinkedin',
      label: 'LinkedIn',
      order: 4,
    },
    {
      href: 'https://twitter.com/luhsprwhk',
      icon: 'FaTwitter',
      label: 'X',
      order: 3,
    },
    {
      href: 'https://youtube.com/luhsprwhk',
      icon: 'FaYoutube',
      label: 'Youtube',
      order: 5,
      disabled: true,
    },
  ];

  if (theme === 'csszen') {
    // CSS Zen sidebar: vertical, text-only links
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
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </aside>
    );
  }

  return (
    <section
      className={clsx(
        'p-5',
        'border-t border-github-lightGray',
        'dark:border-dracula-currentLine',
        'matrix:border-matrix-glow matrix:shadow-lg',
        'web2:border-web2-border web2:shadow-web2-border web2:drop-shadow-web2-border',
        'web2:bg-web2-background'
      )}
    >
      <h2 className={clsx('section-heading')}>
        <span className={clsx('group relative inline-block')}>
          <span className={clsx(theme !== 'matrix' && 'easter-egg-letter')}>
            C
          </span>
          {theme !== 'matrix' && (
            <div
              className={clsx(
                'absolute hidden group-hover:block',
                'bg-github-text dark:bg-dracula-currentLine',
                'matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:shadow-matrix-glow',
                'text-white text-sm rounded p-2 -mt-2 -translate-y-full translate-x-4 top-0 left-1/2 -translate-x-1/2 whitespace-nowrap'
              )}
            >
              Dev tools hold secrets they hide from the masses
              <div
                className={clsx(
                  'absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent',
                  'border-t-github-text dark:border-t-dracula-currentLine',
                  'matrix:border-matrix-glow matrix:shadow-lg matrix:shadow-matrix-glow'
                )}
              ></div>
            </div>
          )}
        </span>
        onnect & Follow
      </h2>
      <div
        className={clsx(
          'grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto',
          'matrix:bg-matrix-terminal'
        )}
      >
        {links
          .filter(link => !link.disabled)
          .sort((a, b) => a.order - b.order)
          .map((link, index) => (
            <LinkItem
              key={index}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
      </div>
    </section>
  );
};

export default Links;
