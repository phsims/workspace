"use client";

import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

export interface ThemeProviderProps {
  children:ReactNode;
}

export function CustomThemeProvider({children}: ThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
