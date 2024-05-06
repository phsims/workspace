import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

export interface PurpleThemeProviderProps {
  children:ReactNode;
}

export function PurpleThemeProvider({children}: PurpleThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default PurpleThemeProvider;
