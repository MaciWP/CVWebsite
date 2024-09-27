import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme || 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleHighContrast = () => {
    setTheme(prevTheme => prevTheme === 'high-contrast' ? 'light' : 'high-contrast');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleHighContrast }}>
      {children}
    </ThemeContext.Provider>
  );
};