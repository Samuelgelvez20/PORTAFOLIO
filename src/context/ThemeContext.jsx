import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = 'dark';
  const isDark = true;
  const toggleTheme = () => {};

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');

    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.content = 'dark';
    }

    try {
      localStorage.setItem('portfolio-theme', 'dark');
    } catch {}
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
