import React, { createContext, useState, useContext, useEffect } from 'react';
import themes from '../../../../Pages/Home/Settings/Change/Theme.json'; // Import your JSON file

const ThemeContext = createContext();

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('app-theme');
  return savedTheme ? savedTheme : 'light'; // Default to 'light' theme
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    localStorage.setItem('app-theme', theme); // Persist theme selection
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (themes[newTheme]) { // Validate if the theme exists
      setTheme(newTheme);
    } else {
      console.warn(`Theme "${newTheme}" does not exist.`);
    }
  };

  const themeStyles = themes[theme] || themes.light; // Fallback to light theme

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
