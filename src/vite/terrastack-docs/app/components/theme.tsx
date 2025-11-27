import React, { createContext, type ReactNode, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: LightDark;
  toggleDarkMode: () => void;
};

type LightDark = 'light' | 'dark';

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light' as LightDark);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // You can also provide functions to update the theme, e.g., toggle dark mode
  const toggleDarkMode = () => {
    console.log({ theme });
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
