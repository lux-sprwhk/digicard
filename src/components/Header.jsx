import { FaMoon, FaSun } from 'react-icons/fa'

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  // Don't show the toggle at all in matrix mode
  if (theme === 'matrix') {
    return <header className="mb-5" />;
  }

  return (
    <header className="flex justify-end mb-5">
      <div className="relative">
        <input 
          type="checkbox" 
          id="theme-switch" 
          className="opacity-0 absolute"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <label 
          htmlFor="theme-switch" 
          className="flex items-center justify-between p-1 w-14 h-7 rounded-full bg-white dark:bg-dark-card matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:shadow-matrix-glow border border-gray-200 dark:border-dark-border cursor-pointer relative transition-colors"
        >
          <FaMoon className="text-sm text-gray-600 dark:text-dark-text matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)] pl-1 z-10" />
          <FaSun className="text-sm text-gray-600 dark:text-dark-text matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)] pr-1 z-10" />
          <div 
            className={`absolute left-1 w-5 h-5 rounded-full bg-primary transition-transform matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:shadow-matrix-glow ${
              theme === 'dark' ? 'transform translate-x-7' : ''
            }`}
          ></div>
        </label>
      </div>
    </header>
  )
}

export default Header