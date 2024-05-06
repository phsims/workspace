import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

export interface PinkThemeProviderProps {
  children:ReactNode;
}

export function PinkThemeProvider({children}: PinkThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default PinkThemeProvider;
