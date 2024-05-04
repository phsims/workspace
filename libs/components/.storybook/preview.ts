import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { oceanBreeze, sunsetGlow, earthyGreens } from '../src';


export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      oceanBreeze: oceanBreeze,
      sunsetGlow: sunsetGlow,
      earthyGreens: earthyGreens,
    },
    defaultTheme: 'oceanBreeze',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
