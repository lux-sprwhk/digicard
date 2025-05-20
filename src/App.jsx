import { useState, useEffect } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Links from './components/Links'
import Projects from './components/Projects'
import { Footer } from './components/Footer'
import FeaturedPost from './components/FeaturedPost'
import consoleEasterEgg from './utils/consoleEasterEgg'
import MountainFooter from './components/MountainFooter'
import { Web2NavBar } from './components/NavBar'

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
         <Web2NavBar theme={theme} />
        )}
        <Profile theme={theme} />
        {theme !== 'web2' ? <Links theme={theme} /> : null}
        <Projects theme={theme} />
        <FeaturedPost />
      </main>


      {theme === 'web2' ? <MountainFooter /> : <Footer theme={theme} /> }
    </div>
  )
}


export default App