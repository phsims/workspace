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
  ...styleOverrides
});
export default theme;
