import { useEffect, useState, useRef } from 'react'
import { FaTerminal } from 'react-icons/fa'

const Footer = ({ theme }) => {
  const [currentYear] = useState(new Date().getFullYear())
  const [cursorVisible, setCursorVisible] = useState(false)

  // Blinking cursor effect for the easter egg hint
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 800)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <footer className="text-center py-5 px-4 text-sm text-gray-500 dark:text-gray-400">
      <p>&copy; {currentYear}. All rights reserved.</p>
      <br />
      <div className="footer-details mt-2">
        {theme !== 'matrix' && (
          <span className="group relative inline-block">
            <FaTerminal
              className={
                `inline-block 
    ${theme === 'dark' ? 'glow-dark' : 'glow-light'} 
    ${cursorVisible ? 'opacity-100' : 'opacity-0'} 
    transition-all duration-300 
    hover:text-primary hover:scale-110 hover:rotate-3 cursor-pointer`
              }
            />
            <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded p-2 -mt-2 -translate-y-full -translate-x-1/2 left-1/2 whitespace-nowrap">
              console.log("Open sesame")
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </span>
        )}
      </div>
    </footer>
  )
}


const techBadges = [
  {
    name: 'React',
    url: 'https://react.dev/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    color: 'bg-blue-100 border-blue-400',
  },
  {
    name: 'Vite',
    url: 'https://vitejs.dev/',
    logo: 'https://vitejs.dev/logo.svg',
    color: 'bg-purple-100 border-purple-400',
  },
  {
    name: 'Tailwind',
    url: 'https://tailwindcss.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    color: 'bg-cyan-100 border-cyan-400',
  },
];

const miniSitemap = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const webring = {
  name: 'RetroWeb',
  url: 'https://retrowebring.example',
};

const SuperFooter = () => {
  // Visitor Counter
  const [visits, setVisits] = useState(0);
  // Micro blog
  const [statuses, setStatuses] = useState([
    { text: '🚀 Just shipped a new feature!', date: '2025-05-18' },
    { text: '🌱 Learning about Webrings!', date: '2025-05-17' },
  ]);
  const [statusInput, setStatusInput] = useState('');
  // Guestbook
  const [shouts, setShouts] = useState([
    { name: 'Alice', msg: 'Cool site!', date: '2025-05-16' },
    { name: 'Bob', msg: 'Web 2.0 forever!', date: '2025-05-15' },
  ]);
  const [shoutName, setShoutName] = useState('');
  const [shoutMsg, setShoutMsg] = useState('');
  const lastUpdated = new Date(document.lastModified).toLocaleString();
  const statusRef = useRef(null);
  const shoutRef = useRef(null);

  // Visitor counter with localStorage
  useEffect(() => {
    let count = parseInt(localStorage.getItem('retroVisits') || '0', 10);
    count += 1;
    localStorage.setItem('retroVisits', count);
    setVisits(count);
  }, []);

  // Easter egg: Matrix mode
  const triggerMatrix = () => {
    if (typeof window.matrix === 'object' || typeof window.matrix === 'function') {
      window.matrix;
    } else if (typeof window.matrix === 'undefined') {
      alert('Try opening the console and typing "hack" first!');
    }
  };

  // Add status
  const addStatus = e => {
    e.preventDefault();
    if (statusInput.trim()) {
      setStatuses([{ text: statusInput, date: new Date().toISOString().slice(0, 10) }, ...statuses]);
      setStatusInput('');
      statusRef.current && statusRef.current.focus();
    }
  };

  // Add shout
  const addShout = e => {
    e.preventDefault();
    if (shoutName.trim() && shoutMsg.trim()) {
      setShouts([{ name: shoutName, msg: shoutMsg, date: new Date().toISOString().slice(0, 10) }, ...shouts]);
      setShoutName('');
      setShoutMsg('');
      shoutRef.current && shoutRef.current.focus();
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 border-t border-blue-200 shadow-inner mt-8 text-xs md:text-sm text-gray-700 dark:text-gray-300 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-2 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tech stack badges */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex gap-2 mb-1">
            {techBadges.map(badge => (
              <a
                key={badge.name}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-2 py-1 rounded border ${badge.color} shadow-sm hover:scale-110 transition-transform`}
                title={badge.name}
              >
                <img src={badge.logo} alt={badge.name} className="w-5 h-5" />
                <span className="font-bold">{badge.name}</span>
              </a>
            ))}
          </div>
          <a href="https://github.com/luhsprwhk/digicard" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-blue-700 dark:text-blue-400">
            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Octocat" className="w-5 h-5" />
            View Source on GitHub
          </a>
          <div className="mt-2 flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <span className="inline-block bg-yellow-200 border border-yellow-400 rounded px-1 mr-1">Best viewed in Netscape 4.7, IE6, or Lynx</span>
            <span className="ml-1">🕸️</span>
          </div>
          <div className="flex items-center mt-2 gap-1">
            <span className="font-mono bg-white border border-gray-300 rounded px-1 shadow-inner text-lg tracking-widest">{visits.toString().padStart(6, '0').split('').map((d,i) => <span key={i} className="inline-block bg-gray-100 border border-gray-400 rounded px-1 mx-0.5">{d}</span>)}</span>
            <span className="ml-1 text-gray-400">visitors since 2025</span>
          </div>
          <div className="mt-2 text-xs text-gray-400">Last updated: {lastUpdated}</div>
        </div>

        {/* Microblog and Guestbook */}
        <div className="flex flex-col gap-4 items-center">
          {/* Easter egg link */}
          <button onClick={triggerMatrix} className="inline-flex items-center gap-1 px-2 py-1 bg-black text-green-400 border border-green-600 rounded shadow hover:bg-green-900 hover:text-white transition-all cursor-pointer text-xs">
            <span className="font-mono">[Matrix Mode]</span>
            <span className="animate-pulse">☰</span>
          </button>

          {/* Microblog/status */}
          <div className="w-full max-w-xs">
            <div className="font-bold text-blue-900 dark:text-blue-200 mb-1">Microblog</div>
            <form onSubmit={addStatus} className="flex gap-1 mb-1">
              <input ref={statusRef} type="text" value={statusInput} onChange={e => setStatusInput(e.target.value)} placeholder="What's up?" className="flex-1 px-2 py-1 border rounded text-xs" />
              <button type="submit" className="bg-blue-300 text-blue-900 px-2 rounded hover:bg-blue-400">Post</button>
            </form>
            <ul className="max-h-16 overflow-y-auto space-y-1">
              {statuses.map((s, i) => (
                <li key={i} className="bg-blue-50 border-l-4 border-blue-300 px-2 py-0.5 rounded text-xs flex justify-between items-center">
                  <span>{s.text}</span>
                  <span className="ml-2 text-gray-400 font-mono">{s.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guestbook/shoutbox */}
          <div className="w-full max-w-xs mt-2">
            <div className="font-bold text-green-900 dark:text-green-200 mb-1">Guestbook</div>
            <form onSubmit={addShout} className="flex gap-1 mb-1">
              <input ref={shoutRef} type="text" value={shoutName} onChange={e => setShoutName(e.target.value)} placeholder="Name" className="w-1/3 px-2 py-1 border rounded text-xs" />
              <input type="text" value={shoutMsg} onChange={e => setShoutMsg(e.target.value)} placeholder="Message" className="flex-1 px-2 py-1 border rounded text-xs" />
              <button type="submit" className="bg-green-300 text-green-900 px-2 rounded hover:bg-green-400">Sign</button>
            </form>
            <ul className="max-h-16 overflow-y-auto space-y-1">
              {shouts.map((s, i) => (
                <li key={i} className="bg-green-50 border-l-4 border-green-300 px-2 py-0.5 rounded text-xs flex justify-between items-center">
                  <span><b>{s.name}</b>: {s.msg}</span>
                  <span className="ml-2 text-gray-400 font-mono">{s.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sitemap, badges, webring */}
        <div className="flex flex-col gap-3 items-center md:items-end">
          <h5>About</h5>
          <div className="flex gap-2 items-center">
            {techBadges.map(badge => (
              <a
                key={badge.name}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-2 py-1 rounded border ${badge.color} shadow-sm hover:scale-110 transition-transform`}
                title={badge.name}
              >
                <img src={badge.logo} alt={badge.name} className="w-5 h-5" />
                <span className="font-bold">{badge.name}</span>
              </a>
            ))}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-200 border border-green-400 rounded text-green-800 font-bold text-xs">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 11V9a4 4 0 018 0v2a2 2 0 002 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 002-2zm2-2a2 2 0 114 0v2H6v-2z"/></svg>
              This site is ad-free
            </span>
            <a href="#rss" className="inline-flex items-center gap-1 px-2 py-1 bg-orange-200 border border-orange-400 rounded text-orange-800 font-bold text-xs hover:animate-pulse">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4.5 15a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-3a7.5 7.5 0 017.5 7.5h-3a4.5 4.5 0 00-4.5-4.5v-3zm0-3a13.5 13.5 0 0113.5 13.5h-3A10.5 10.5 0 004.5 9v-3z"/></svg>
              RSS
            </a>
          </div>
          <div className="mt-2">
            <div className="font-bold text-gray-700 dark:text-gray-200 mb-1">Mini Sitemap</div>
            <ul className="flex flex-wrap gap-2">
              {miniSitemap.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="relative px-2 py-1 rounded bg-blue-100 border border-blue-300 text-blue-800 font-bold hover:bg-blue-300 hover:text-white transition-all duration-200 overflow-hidden group">
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-30 transition-all"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 border border-gray-400 rounded text-gray-800 font-bold text-xs animate-pulse">
              Part of the <a href={webring.url} className="underline ml-1">{webring.name}</a> network
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer, SuperFooter }
export default Footer