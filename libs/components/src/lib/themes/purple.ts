'use client';

import { createTheme } from '@mui/material/styles';
import {typography} from './typography'

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
      ...typography.h1,
      color: pallet.grey.dark,
    },
    h2: {
      ...typography.h2,
      fontWeight: 500,
    },
    body1: {
      color: pallet.grey.main,
      ...typography.body1,
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
