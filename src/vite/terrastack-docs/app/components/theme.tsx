import React, { createContext, type ReactNode, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: LightDark;
  toggleDarkMode: () => void;
};

type LightDark = 'light' | 'dark';

const ThemeContext = createContext<ThemeContextType | null>(null);

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const savedTheme = getCookie('theme') ?? 'light';

  document.cookie = `theme=${savedTheme}; path=/; max-age=` + 60 * 60 * 24 * 365;

  const [theme, setTheme] = useState(savedTheme as LightDark);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.cookie = `theme=${theme}; path=/; max-age=` + 60 * 60 * 24 * 365;
    } else {
      document.documentElement.classList.remove('dark');
      document.cookie = `theme=${theme}; path=/; max-age=` + 60 * 60 * 24 * 365;
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
