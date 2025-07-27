export const THEME_CONSTANTS = {
  DARK: 'dark',
  LIGHT: 'light'
};

export const getInitialTheme = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return THEME_CONSTANTS.DARK;
  }
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  
  // Check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? THEME_CONSTANTS.DARK 
    : THEME_CONSTANTS.LIGHT;
};
