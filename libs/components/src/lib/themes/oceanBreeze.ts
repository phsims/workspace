import { createTheme } from '@mui/material/styles';


const oceanBreeze = {
  primary: {
    light: '#74d2e7', 
    main: '#47a9da', 
    dark: '#0086c3', 
    contrastText: '#ffffff', 
  },
  secondary: {
    light: '#88d8c0', 
    main: '#43a047', 
    dark: '#00701a', 
    contrastText: '#000000', 
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
    primary: oceanBreeze.primary,
    secondary: oceanBreeze.secondary,
    success: oceanBreeze.success,
    error: oceanBreeze.error,
    warning: oceanBreeze.warning,
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
