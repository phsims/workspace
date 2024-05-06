


import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import  green  from '../src/lib/Themes/GreenThemeProvider/theme';
import  purple from '../src/lib/Themes/PurpleThemeProvider/theme';
import  pink from '../src/lib/Themes/PinkThemeProvider/theme';


export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      purple: purple,
      pink: pink,
      green: green,
    },
    defaultTheme: 'pink',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
