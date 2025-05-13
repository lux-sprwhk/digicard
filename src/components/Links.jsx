import {
  FaGithub,
  FaTwitter,
  FaRssSquare,
  FaYoutube
} from 'react-icons/fa'

const LinkItem = ({ href, icon: Icon, label, theme  }) => (
  <a 
    href={href} 
    className="flex flex-col items-center justify-center p-4 h-24 bg-white dark:bg-dracula-currentLine matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg rounded-lg text-github-text dark:text-dracula-foreground no-underline transition-all hover:bg-github-blue hover:text-white dark:hover:bg-dracula-purple hover:-translate-y-1 hover:shadow-md matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)]"
  >
    <Icon className="text-3xl mb-2 transition-transform duration-300 hover:scale-125" />
    <span>{label}</span>
  </a>
)

const Links = ({ theme }) => {
  const links = [
    { href: 'https://luhsprwhk.beehiiv.com/subscribe', icon: FaRssSquare, label: 'Blog' },
    { href: 'https://github.com/luhsprwhk', icon: FaGithub, label: 'GitHub' },
    { href: 'https://twitter.com/luhsprwhk', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://youtube.com/luhsprwhk', icon: FaYoutube, label: 'Youtube' },
  ]

  return (
    <section className="p-5 border-t border-github-lightGray dark:border-dracula-currentLine matrix:border-matrix-glow matrix:shadow-lg ">
      
      <h2 className="section-heading">
        <span className="group relative inline-block">

          <span className={theme !== 'matrix' && 'easter-egg-letter'}>C</span>

          {theme !== 'matrix' && (
            <div className="absolute hidden group-hover:block bg-github-text dark:bg-dracula-currentLine matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:shadow-matrix-glow text-white text-sm rounded p-2 -mt-2 -translate-y-full translate-x-4 top-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
              Dev tools hold secrets they hide from the masses 
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-github-text dark:border-t-dracula-currentLine matrix:border-matrix-glow matrix:shadow-lg matrix:shadow-matrix-glow"></div>
            </div>
          )}
        </span>onnect & Follow
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto matrix:bg-matrix-terminal">
      
        {links.map((link, index) => (
          <LinkItem 
            key={index}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
    </section>
  )
}

export default Links