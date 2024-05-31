'use client';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

import { Color } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { typography } from './typography';
import { styleOverrides } from './overrides';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1_Headline: true;
    body1_Bold: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  h1_Headline: React.CSSProperties;
  body1_Bold: React.CSSProperties;
}
const pallet = {
  primary: {
    light: '#a7d7c5',
    main: '#75a478',
    dark: '#487a5a',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#f6e2c0',
    main: '#e9b899',
    dark: '#ba8374',
    contrastText: '#000000',
  },
  success: {
    light: '#b9e4c9',
    main: '#88c199',  
    dark: '#5b8b67',
    contrastText: '#ffffff',
  },
  error: {
    light: '#e57373',
    main: '#f44336',  
    dark: '#d32f2f',
    contrastText: '#ffffff',
  },
  warning: {
    light: '#ffb74d',
    main: '#ffa726',  
    dark: '#f57c00',
    contrastText: '#000000',
  },
  grey: {
    light: '#f8f7f7',
    main: '#f8f7f7',
    dark: '#444245',
  },
  white: '#ffffff',
};


const theme = createTheme({
  palette: {
    primary: pallet.primary,
    secondary: pallet.secondary,
    success: pallet.success,
    error: pallet.error,
    warning: pallet.warning,
    grey: { ...pallet.grey } as Partial<Color>,
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      ...typography.h1,
      color: pallet.grey.dark,
    },
    h1_Headline: {
      ...typography.h1_Headline,
      color: pallet.grey.dark,
    },
    h2: {
      ...typography.h2,
      fontWeight: 500,
    },
    h3: { ...typography.h3, color: pallet.primary.main },
    subtitle1: {
      ...typography.subtitle1,
      color: pallet.grey.dark,
    },
    body1: {
      color: pallet.grey.main,
      ...typography.body1,
    },
    body1_Bold: {
      color: pallet.grey.dark,
      ...typography.body1_Bold,
    },
    body2: {
      color: pallet.primary.main,
      ...typography.body2,
    },
  } as ExtendedTypographyOptions,
  ...styleOverrides,
});
export default theme;
