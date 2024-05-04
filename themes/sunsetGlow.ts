import { createTheme } from '@mui/material/styles';


const sunsetGlow = {
  primary: {
    light: '#ffb74d', 
    main: '#fb8c00', 
    dark: '#ef6c00', 
    contrastText: '#ffffff', 
  },
  secondary: {
    light: '#ce93d8', 
    main: '#ab47bc', 
    dark: '#7b1fa2', 
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
    light: '#ffb74d',
    main: '#ffa726', 
    dark: '#f57c00',
    contrastText: '#000000',
  },
};


const theme = createTheme({
  palette: {
    primary: sunsetGlow.primary,
    secondary: sunsetGlow.secondary,
    success: sunsetGlow.success,
    error: sunsetGlow.error,
    warning: sunsetGlow.warning,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2.25rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    button: {
      textTransform: 'none', 
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
