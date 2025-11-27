'use client';

import * as React from 'react';
import { ThemeProvider as ThemesProvider, type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <ThemesProvider {...props}>{children}</ThemesProvider>;
}
