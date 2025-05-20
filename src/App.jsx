import { useState, useEffect } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Links from './components/Links'
import Projects from './components/Projects'
import { Footer, SuperFooter } from './components/Footer'
import FeaturedPost from './components/FeaturedPost'
import consoleEasterEgg from './utils/consoleEasterEgg'
import {FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = sessionStorage.getItem('theme')
    // Default to dark if no theme is saved
    return savedTheme || 'dark'
  })

  // Apply theme to body
  useEffect(() => {
    // Remove all theme classes first
    document.documentElement.classList.remove('dark', 'matrix', 'light', 'web2', 'csszen')
    // Add the current theme class
    document.documentElement.classList.add(theme)
    sessionStorage.setItem('theme', theme)
  }, [theme])

  // NEW: Toggle matrix background on <body>
  useEffect(() => {
    if (theme === 'matrix') {
      document.body.classList.add('matrix-bg');
    } else {
      document.body.classList.remove('matrix-bg');
    }
    // Cleanup in case of hot reloads/unmount
    return () => document.body.classList.remove('matrix-bg');
  }, [theme]);


  useEffect(() => {
    const cleanupFn = consoleEasterEgg(setTheme);
    return cleanupFn; // Return the cleanup function provided by the utility
  }, [setTheme]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Header theme={theme} setTheme={setTheme} />

      <main className={`bg-white dark:bg-dracula-currentLine rounded-xl shadow-md overflow-hidden mb-6
        opacity-0 transform translate-y-5 animate-fade-in
        matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:shadow-matrix-glow
        web2:bg-web2-background web2:border-web2-border
      `}
      >

        {theme === 'web2' && (
          <nav className="flex justify-between items-center bg-web2-primaryDark web2:border-web2-border web2:shadow-web2-border web2:drop-shadow-web2-border web2:p-4">
            <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <span className="web2:text-web2-accent web2:font-web2Heading transition-all duration-200 hover:web2:text-web2-accent hover:drop-shadow-md cursor-pointer">
                Luh Sprwhk
              </span>
            </div>
            <div className="flex gap-4 text-xl">
              <a
                href="https://github.com/luhsprwhk"
                target="_blank"
                rel="noopener noreferrer"
                className="web2:text-web2-secondary transition-all duration-200 hover:web2:text-web2-accent hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/luhsprwhk"
                target="_blank"
                rel="noopener noreferrer"
                className="web2:text-web2-secondary transition-all duration-200 hover:web2:text-web2-accent hover:scale-125"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com/@luhsprwhk"
                target="_blank"
                rel="noopener noreferrer"
                className="web2:text-web2-secondary transition-all duration-200 hover:web2:text-web2-accent hover:scale-125"
              >
                <FaYoutube />
              </a>
            </div>
          </nav>
        )}
        <Profile theme={theme} />
        {theme !== 'web2' ? <Links theme={theme} /> : null}
        <Projects theme={theme} />
        <FeaturedPost />
      </main>


      {theme === 'web2' ? <SuperFooter /> : <Footer theme={theme} />}
    </div>
  )
}


export default App