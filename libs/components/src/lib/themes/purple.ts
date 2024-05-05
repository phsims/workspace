import { createTheme } from '@mui/material/styles';


const purple = {
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
  background: {
    default:  '#424242',
    paper:  '#212121',
  },
};


const theme = createTheme({
  palette: {
    primary: purple.primary,
    secondary: purple.secondary,
    success: purple.success,
    error: purple.error,
    warning: purple.warning,
    // background: {
    //   default:  '#424242',
    //   paper:  '#212121',
    // },
    // text: {
    //   primary: mode === 'dark' ? '#ffffff' : '#212121',
    //   secondary: mode === 'dark' ? '#b3b3b3' : '#424242',
    // },
  },
  typography: {
    fontFamily:   "Poppins, Arial, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    // button: {
    //   textTransform: 'none', 
    // },
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 8, 
    //     },
    //   },
    // },
  },
});

export default theme;
