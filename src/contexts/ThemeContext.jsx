import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { THEME_CONSTANTS, getInitialTheme } from '../utils/themeUtils';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_CONSTANTS.DARK);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (theme === THEME_CONSTANTS.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === THEME_CONSTANTS.LIGHT ? THEME_CONSTANTS.DARK : THEME_CONSTANTS.LIGHT);
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === THEME_CONSTANTS.DARK
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ThemeProvider };
