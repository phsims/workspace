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
    light: '#fbe9e5',
    main: '#DF6751',
    dark: '#c24b32',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#eaeeff',
    main: '#7b9ffe',
    dark: '#2965ea',
    contrastText: '#ffffff',
  },
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
    contrastText: '#ffffff',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#f8d13d',
    contrastText: '#000000',
  },
  grey: {
    light: '#f8f7f7',
    main: '#7d7c7c',
    dark: '#444245',
  },
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
