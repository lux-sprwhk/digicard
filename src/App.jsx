import { useState, useEffect } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Links from './components/Links'
import Projects from './components/Projects'
import Footer from './components/Footer'
import FeaturedPost from './components/FeaturedPost'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = sessionStorage.getItem('theme')
    // Default to dark if no theme is saved
    return savedTheme || 'dark'
  })

  // Apply theme to body
  useEffect(() => {
    // Remove all theme classes first
    document.documentElement.classList.remove('dark', 'matrix', 'light')
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

  // Initialize console easter egg
  useEffect(() => {
    let matrixOverlay = null

    // Console message for the Digital Dungeon quest
    console.log('%cACCESS GRANTED', 'color: #2ecc71; font-family: monospace; font-size: 20px; font-weight: bold;')
    console.log('%cWelcome to the Digital Dungeon. Your skills are being tested.', 'color: #3498db; font-family: monospace;')
    console.log('%cType "hack" to begin your assessment.', 'color: #3498db; font-family: monospace;')

    // Set up all console commands at once
    Object.defineProperties(window, {
      'hack': {
        get: function () {
          console.log('%cInitiating Level 1: "Code Breaker"', 'color: #f39c12; font-family: monospace; font-size: 16px;')
          console.log('%cDecipher the following to continue:', 'color: #3498db; font-family: monospace;')
          console.log('%c01100100 01101111 01101101', 'color: #e74c3c; font-family: monospace;')
          console.log('%cHint: Convert binary to text', 'color: #7f8c8d; font-family: monospace; font-style: italic;')
        },
        configurable: true
      },
      'fizzbuzz': {
        get: function () {
          console.log("%cWelcome to the secret console challenge!", "font-size: 16px; font-weight: bold; color: #ff79c6;");
          console.log("%cComplete this FizzBuzz challenge to unlock a special feature:", "color: #8be9fd;");
          console.log("%cCreate a function in a variable called 'secretFizzBuzz' that takes a number and returns:", "color: #f8f8f2;");
          console.log("%c- 'Fizz' for multiples of 3", "color: #50fa7b;");
          console.log("%c- 'Buzz' for multiples of 5", "color: #50fa7b;");
          console.log("%c- 'FizzBuzz' for multiples of both 3 and 5", "color: #50fa7b;");
          console.log("%c- The number itself for other cases", "color: #50fa7b;");

          // Hidden verification function
          window.verifyFizzBuzz = function (userFunc) {
            try {
              const testCases = [
                { input: 1, expected: 1 },
                { input: 3, expected: "Fizz" },
                { input: 5, expected: "Buzz" },
                { input: 15, expected: "FizzBuzz" },
                { input: 42, expected: "Fizz" }
              ];

              const results = testCases.map(test => {
                const result = userFunc(test.input);
                return {
                  input: test.input,
                  expected: test.expected,
                  actual: result,
                  passed: result === test.expected
                };
              });

              const allPassed = results.every(r => r.passed);

              if (allPassed) {
                console.log("%c🎉 CORRECT! You've solved the FizzBuzz challenge!", "font-size: 16px; font-weight: bold; color: #50fa7b;");
                console.log("%cEnter 'unlockSecret()' to reveal your prize", "color: #bd93f9;");
                window.unlockSecret = function () {
                  // Switch to matrix theme
                  setTheme('matrix');
                  localStorage.setItem('theme', 'matrix');
                  console.log("%c🔓 Secret theme unlocked: Welcome to the Matrix!", "color: #00ff41; font-weight: bold; text-shadow: 0 0 5px #0f0;");
                };
              } else {
                console.log("%c❌ Not quite right. Here's what happened:", "color: #ff5555;");
                results.forEach(r => {
                  if (!r.passed) {
                    console.log(`For input ${r.input}, expected ${r.expected} but got ${r.actual}`);
                  }
                });
                console.log("%cTry again!", "color: #f1fa8c;");
              }
            } catch (error) {
              console.log("%c❌ Error in your function:", "color: #ff5555;", error.message);
            }
          };

          // Set up the hook to catch when they call their function
          Object.defineProperty(window, 'secretFizzBuzz', {
            set: function (func) {
              if (typeof func === 'function') {
                window._secretFizzBuzz = func;
                console.log("%cFunction received! Calling with 42 to test...", "color: #8be9fd;");
                window.verifyFizzBuzz(func);
              }
            },
            get: function () {
              return window_secretFizzBuzz;
            }
          });
        },
        configurable: true
      },
      'matrix': {
        get: function () {
          console.log('%cFINAL LEVEL COMPLETE!', 'color: #2ecc71; font-family: monospace; font-size: 20px; font-weight: bold;')
          console.log('%cInitiating Matrix mode...', 'color: #3498db; font-family: monospace;')

          // Add matrix effect to the page
          document.body.classList.add('matrix-mode')

          // Create matrix animation overlay
          matrixOverlay = document.createElement('div')
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
            console.log('%cTo disable Matrix mode, type "clearMatrix"', 'color: #e74c3c; font-family: monospace;')
          }, 2000)
        },
        configurable: true
      },
      'clearMatrix': {
        get: function () {
          document.body.classList.remove('matrix-mode')
          if (matrixOverlay && matrixOverlay.parentNode) {
            matrixOverlay.parentNode.removeChild(matrixOverlay)
          }
          console.log('%cMatrix mode deactivated', 'color: #3498db; font-family: monospace;')
          console.log('%cType "matrix" to reactivate', 'color: #7f8c8d; font-family: monospace;')
        },
        configurable: true
      }
    })

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

      <main className="bg-white dark:bg-dracula-currentLine rounded-xl shadow-md overflow-hidden mb-6 opacity-0 transform translate-y-5 animate-fade-in matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:shadow-matrix-glow">
        <Profile theme={theme} />
        <Links theme={theme} />
        <Projects />
        <FeaturedPost />
      </main>

      <Footer theme={theme} />
    </div>
  )
}


export default App