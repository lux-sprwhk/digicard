import {
  FaGithub,
  FaTwitter,
  FaRssSquare,
  FaYoutube
} from 'react-icons/fa'

const LinkItem = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    className="flex flex-col items-center justify-center p-4 h-24 bg-gray-50 dark:bg-dark-bg rounded-lg text-gray-700 dark:text-dark-text no-underline transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md"
  >
    <Icon className="text-3xl mb-2 transition-transform duration-300 hover:scale-125" />
    <span>{label}</span>
  </a>
)

const Links = () => {
  const links = [
    { href: 'https://luhsprwhk.beehiiv.com/subscribe', icon: FaRssSquare, label: 'Blog' },
    { href: 'https://github.com/luhsprwhk', icon: FaGithub, label: 'GitHub' },
    { href: 'https://twitter.com/luhsprwhk', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://youtube.com/luhsprwhk', icon: FaYoutube, label: 'Youtube' },
  ]

  return (
    <section className="p-5 border-t border-gray-200 dark:border-dark-border">
      
      <h2 className="section-heading">
        <span className="group relative inline-block">
          <span className="easter-egg-letter">C</span>
          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded p-2 -mt-2 -translate-y-full translate-x-4 top-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
            Dev tools hold secrets they hide from the masses 
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </span>onnect & Follow
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      
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