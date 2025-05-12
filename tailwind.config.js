/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // We'll use this for toggling dark/light theme
    theme: {
      extend: {
        colors: {
          github: {
            white: '#ffffff',
            text: '#24292e',
            blue: '#0366d6',
            lightBlue: '#005cc5',
            gray: '#6a737d',
            lightGray: '#e1e4e8',
            green: '#22863a',
            bgGray: '#f6f8fa',
          },
          dracula: {
            background: '#282a36',
            currentLine: '#44475a',
            foreground: '#f8f8f2',
            comment: '#6272a4',
            cyan: '#8be9fd',
            green: '#50fa7b',
            orange: '#ffb86c',
            pink: '#ff79c6',
            purple: '#bd93f9',
            red: '#ff5555',
            yellow: '#f1fa8c'
          },
          matrix: {
            background: '#000000',
            text: '#00ff00',
            glow: '#0f0',
            dimText: '#003b00',
            highlight: '#00ff41',
            shadow: '#003b00',
            terminal: '#0D0208',
            rain: '#008F11'
          },
          primary: {
            DEFAULT: '#3498db',
            dark: '#2980b9',
            light: '#5dade2'
          },
          secondary: {
            DEFAULT: '#2ecc71',
            dark: '#27ae60',
            light: '#58d68d'
          },
          accent: {
            DEFAULT: '#f39c12',
            dark: '#e67e22',
            light: '#f7c05a'
          },
          dark: {
            bg: '#2e3440',
            card: '#3b4252',
            border: '#4c566a',
            text: '#e5e9f0'
          }
        },
        fontFamily: {
          heading: ['"Raleway"', 'sans-serif'],
          body: ['"Roboto"', 'sans-serif']
        },
        animation: {
          'fade-in': 'fadeIn 0.8s forwards',
          'slide-up': 'slideUp 0.5s forwards',
          'bounce-once': 'bounce 0.5s',
          'pulse': 'pulse 2s infinite',
          'matrix-fall': 'matrix-fall linear infinite',
          'ripple': 'ripple 0.6s linear'
        },
        keyframes: {
          fadeIn: {
            'to': { 
              opacity: '1',
              transform: 'translateY(0)'
            }
          },
          slideUp: {
            'to': {
              opacity: '1',
              transform: 'translateY(0)'
            }
          },
          bounce: {
            '0%, 20%, 50%, 80%, 100%': {
              transform: 'translateY(0)'
            },
            '40%': {
              transform: 'translateY(-10px)'
            },
            '60%': {
              transform: 'translateY(-5px)'
            }
          },
          pulse: {
            '0%': {
              boxShadow: '0 0 0 0 rgba(52, 152, 219, 0.4)'
            },
            '70%': {
              boxShadow: '0 0 0 10px rgba(52, 152, 219, 0)'
            },
            '100%': {
              boxShadow: '0 0 0 0 rgba(52, 152, 219, 0)'
            }
          },
          'matrix-fall': {
            'to': {
              transform: 'translateY(100vh)'
            }
          },
          ripple: {
            'to': {
              transform: 'scale(4)',
              opacity: '0'
            }
          }
        },
        transitionDuration: {
          DEFAULT: '300ms'
        },
        transitionTimingFunction: {
          DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
      }
    },
    variants: {
      extend: {
        backgroundColor: ['matrix'],
        textColor: ['matrix'],
        borderColor: ['matrix'],
        dropShadow: ['matrix']
      }
    },
    plugins: [
      function({ addVariant }) {
        addVariant('matrix', '.matrix &')
      }
    ]
  }