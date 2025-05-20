
const consoleEasterEgg = (setTheme) => {
    let matrixOverlay = null; // Ensure matrixOverlay is in the correct scope

    // Console message for the Digital Dungeon quest
    // ... (rest of the setup logic will be here)

    // Console message for the Digital Dungeon quest
    console.log('%cACCESS GRANTED', 'color: #2ecc71; font-family: monospace; font-size: 20px; font-weight: bold;')
    console.log('[Log] Mind Online. Welcome to the Luh Sprwhk Portfolio Construct.');
    console.log('[Log] All modules report a state of cheerful readiness.');
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

                console.log("%c[Mind] Challenge protocol activated. A small test of computational wit awaits you.", "font-size: 16px; font-weight: bold; color: #ff79c6;");
                console.log("%c[Mind] Complete this FizzBuzz sequence to unlock further portfolio secrets:", "color: #8be9fd;");
                console.log("%c[Mind] Please define a function in a variable called 'secretFizzBuzz' that takes a number and returns:", "color: #f8f8f2;");
                console.log("%c- 'Fizz' for multiples of 3", "color: #50fa7b;");
                console.log("%c- 'Buzz' for multiples of 5", "color: #50fa7b;");
                console.log("%c- 'FizzBuzz' for multiples of both 3 and 5", "color: #50fa7b;");
                console.log("%c- The number itself for other cases", "color: #50fa7b;");
                console.log("%c[Mind] I await your solution with algorithmic anticipation.", "color: #7f8c8d; font-style: italic;");
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
                    alert('Protocol complete. Matrix Mode is now active.\n\n[Mind] My simulated admiration for your resourcefulness is considerable.');
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

// Return a cleanup function
return () => {
    delete window.hack;
    delete window.fizzbuzz;
    delete window.dom; // If 'dom' was part of your easter egg properties
    delete window.matrix;
    delete window.clearMatrix;
    delete window.verifyFizzBuzz;
    delete window.unlockSecret;
    delete window._secretFizzBuzz;

    // Remove matrix overlay if it exists
    if (matrixOverlay && matrixOverlay.parentNode) {
        matrixOverlay.parentNode.removeChild(matrixOverlay);
    }

    // Attempt to remove quest-key if it exists (from original cleanup logic)
    const questKey = document.querySelector('.quest-key');
    if (questKey && questKey.parentNode) {
        questKey.parentNode.removeChild(questKey);
    }
}}
export default consoleEasterEgg
