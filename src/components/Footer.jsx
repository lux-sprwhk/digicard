import { useEffect, useState } from 'react'
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
              className={`inline-block ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-300 hover:text-primary hover:scale-110 hover:rotate-3 cursor-pointer`} 
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

export default Footer