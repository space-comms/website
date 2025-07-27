export const THEME_CONSTANTS = {
  DARK: 'dark',
  LIGHT: 'light'
};

export const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_CONSTANTS.DARK : THEME_CONSTANTS.LIGHT;
};
