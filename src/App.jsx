import { useState, useEffect } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Links from './components/Links'
import Projects from './components/Projects'
import Footer from './components/Footer'
import FeaturedPost from './components/FeaturedPost'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  // Apply theme to body
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  // Initialize console easter egg
  useEffect(() => {
    // Console message for the Digital Dungeon quest
    console.log('%cACCESS GRANTED', 'color: #2ecc71; font-family: monospace; font-size: 20px; font-weight: bold;')
    console.log('%cWelcome to the Digital Dungeon. Your skills are being tested.', 'color: #3498db; font-family: monospace;')
    console.log('%cType "hack" to begin your assessment.', 'color: #3498db; font-family: monospace;')

    // Set up hidden handlers for the console mini-game
    window.hack = () => {
      console.log('%cInitiating Level 1: "Code Breaker"', 'color: #f39c12; font-family: monospace; font-size: 16px;')
      console.log('%cDecipher the following to continue:', 'color: #3498db; font-family: monospace;')
      console.log('%c01100100 01101111 01101101', 'color: #e74c3c; font-family: monospace;')
      console.log('%cHint: Convert binary to text', 'color: #7f8c8d; font-family: monospace; font-style: italic;')
    }

    // Answer to level 1: "dom"
    window.dom = () => {
      console.log('%cAccess granted to Level 2: "DOM Explorer"', 'color: #2ecc71; font-family: monospace; font-size: 16px;')
      console.log('%cFind the hidden element with the class "quest-key"', 'color: #3498db; font-family: monospace;')
      console.log('%cUse your browser inspector to locate it', 'color: #3498db; font-family: monospace;')
      
      // Create hidden element
      const questKey = document.createElement('div')
      questKey.className = 'quest-key'
      questKey.style.display = 'none'
      questKey.dataset.code = 'matrix'
      document.body.appendChild(questKey)
    }

    // Final command: matrix
    window.matrix = () => {
      console.log('%cFINAL LEVEL COMPLETE!', 'color: #2ecc71; font-family: monospace; font-size: 20px; font-weight: bold;')
      console.log('%cInitiating Matrix mode...', 'color: #3498db; font-family: monospace;')
      
      // Add matrix effect to the page
      document.body.classList.add('matrix-mode')
      
      // Create matrix animation overlay
      const matrixOverlay = document.createElement('div')
      matrixOverlay.className = 'matrix-overlay'
      document.body.appendChild(matrixOverlay)
      
      // Create falling characters
      for (let i = 0; i < 100; i++) {
        const character = document.createElement('div')
        character.className = 'matrix-character'
        character.style.left = `${Math.random() * 100}vw`
        character.style.animationDuration = `${1 + Math.random() * 3}s`
        character.style.animationDelay = `${Math.random() * 2}s`
        character.innerText = String.fromCharCode(33 + Math.floor(Math.random() * 94))
        matrixOverlay.appendChild(character)
      }
      
      // Show success message
      setTimeout(() => {
        alert('Congratulations! You have successfully hacked the Digital Dungeon. Your card now has Matrix Mode activated!')
        
        // Give option to remove the effect
        window.clearMatrix = () => {
          document.body.classList.remove('matrix-mode')
          if (matrixOverlay.parentNode) {
            matrixOverlay.parentNode.removeChild(matrixOverlay)
          }
          console.log('%cMatrix mode deactivated', 'color: #3498db; font-family: monospace;')
          console.log('%cType "matrix" to reactivate', 'color: #7f8c8d; font-family: monospace;')
        }
        
        console.log('%cTo disable Matrix mode, type "clearMatrix()"', 'color: #e74c3c; font-family: monospace;')
      }, 2000)
    }

    // Add a hidden comment in the HTML
    const comment = document.createComment(' Seek the terminal. Type "hack" to begin. ')
    document.body.appendChild(comment)

    return () => {
      // Cleanup if needed
      delete window.hack
      delete window.dom
      delete window.matrix
      delete window.clearMatrix
      
      const questKey = document.querySelector('.quest-key')
      if (questKey && questKey.parentNode) {
        questKey.parentNode.removeChild(questKey)
      }
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Header theme={theme} setTheme={setTheme} />
      
      <main className="bg-white dark:bg-dark-card rounded-xl shadow-md overflow-hidden mb-6 opacity-0 transform translate-y-5 animate-fade-in">
        <Profile />
        <Links />
        <Projects />
        <FeaturedPost />
      </main>
      
      <Footer />
    </div>
  )
}

export default App