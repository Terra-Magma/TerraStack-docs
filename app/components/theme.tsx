import React, {createContext, type ReactNode, useContext, useEffect, useState} from 'react';
import {Cookies} from 'react-cookie';

type ThemeContextType = {
  theme: LightDark;
  toggleDarkMode: () => void;
};

type LightDark = 'light' | 'dark';

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const cookies = new Cookies();
  const savedTheme = cookies.get<string>('theme') ?? 'light';

  cookies.set('theme', savedTheme, { maxAge: 60 * 60 * 24 * 365, path: '/' });

  const [theme, setTheme] = useState(savedTheme as LightDark);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    cookies.set('theme', theme, { maxAge: 60 * 60 * 24 * 365, path: '/' });
  }, [theme]);

  // You can also provide functions to update the theme, e.g., toggle dark mode
  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
