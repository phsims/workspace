'use client';

import { createTheme } from '@mui/material/styles';

const pallet = {
  primary: {
    main: '#4855fe',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#ffe537',
    contrastText: '#000000',
  },
  success: {
    main: '#00e900',
    contrastText: '#ffffff',
  },
  error: {
    main: '#fe4854',
    contrastText: '#000000',
  },
  warning: {
    main: '#ff5a00',
    contrastText: '#000000',
  },
  grey: {
    light: '#f8f7f7',
    main: '#f8f7f7',
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
      fontWeight: 800,
      color: pallet.grey.dark,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    body1: {
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
})

export default theme;
