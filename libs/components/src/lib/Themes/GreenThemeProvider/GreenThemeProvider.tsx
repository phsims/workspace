import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

export interface GreenThemeProviderProps {
  children:ReactNode;
}

export function GreenThemeProvider({children}: GreenThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default GreenThemeProvider;
