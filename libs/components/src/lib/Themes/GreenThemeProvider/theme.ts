import { createTheme } from '@mui/material/styles';

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
    fontFamily:   "Poppins, Arial, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: '4.5rem',
      lineHeight:'6.75rem',
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
});

export default theme;
