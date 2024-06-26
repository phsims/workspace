export const styleOverrides = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4rem',
          padding: '1rem 2rem',
        },
        sizeSmall: {
            padding: '0.5rem 1rem'
          }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1.5rem',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1_Headline: "h1",
          body1_Bold: "p",
        }
      },
    }
  },
};
