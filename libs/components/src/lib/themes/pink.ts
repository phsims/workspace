'use client';

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'

import { Color } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {typography} from './typography'
import { styleOverrides } from './overrides';

const pallet = {
  primary: {
    light: '#fbe9e5',
    main: '#DF6751',
    dark: '#c24b32',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#7b9ffe',
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
    h2: {
      ...typography.h2,
      fontWeight: 500,
    },
    h3:{...typography.h3,
      color: pallet.primary.main,
    },
    subtitle1:{
      color: pallet.grey.dark,
      ...typography.subtitle1,
    },
    body1: {
      color: pallet.grey.main,
      ...typography.body1,
    },
  },
  ...styleOverrides
});

export default theme;
