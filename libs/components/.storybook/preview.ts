import '@fontsource/material-icons';
import "@fontsource/poppins"; 
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/400-italic.css";

import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { purple, sunsetGlow, earthyGreens } from '../src';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      purple: purple,
      sunsetGlow: sunsetGlow,
      earthyGreens: earthyGreens,
    },
    defaultTheme: 'purple',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
