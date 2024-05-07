import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import pink from './pink';
import purple from './purple';
import green from './green';

export interface CustomThemeProviderProps {
  children: ReactNode;
  theme?: 'pink' | 'purple' | 'green';
}

const themes: Record<string, Theme> = {
  pink,
  purple,
  green,
};

export function CustomThemeProvider({ children, theme = 'pink' }: CustomThemeProviderProps) {

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
