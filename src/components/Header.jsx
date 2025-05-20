const Header = ({ theme, setTheme }) => {

  // Don't show the toggle at all in matrix mode
  if (theme === 'matrix') {
    return <header className="mb-5" />;
  }

  return (
    <header className="flex justify-end mb-5">
      <div className="relative text-rleft">
        <label>
          <small>Site Theme</small>
        </label>
        {/* Spacing is now handled by select's margin-top */}
        <select
          value={theme}
          onChange={e => setTheme(e.target.value)}
          className="
            w-full mt-1 px-2 py-1 rounded
            bg-white
            dark:bg-dracula-currentLine
            matrix:bg-matrix-terminal
            web2:bg-web2-primaryDark web2:border-web2-primaryDark
            web2:text-white
            border border-gray-200
            dark:border-dracula-currentLine
            text-sm focus:outline-none transition-colors
          "
        >
          <option value="light">Github</option>
          <option value="dark">Dracula</option>
          <option value="web2">Web 2.0</option>
          {/* TODO: Add CSS Zen Garden */}
          {/* TODO: <option value="csszen">CSS Zen Garden</option> */}
        </select>

      </div>
    </header>
  )
}

export default Header