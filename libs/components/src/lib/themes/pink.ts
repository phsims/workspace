'use client';

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/material-icons';

import { createTheme } from '@mui/material/styles';

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
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '4.5rem',
      lineHeight: '6.75rem',
      fontWeight: 600,
      color: pallet.grey.dark,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    body1: {
      color: pallet.grey.main,
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
