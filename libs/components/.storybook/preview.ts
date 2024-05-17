
// import { Preview, Renderer } from '@storybook/your-renderer';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import green from '../src/lib/themes/green';
import purple from '../src/lib/themes/purple';
import pink from '../src/lib/themes/pink';


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
]