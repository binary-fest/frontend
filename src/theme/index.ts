import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '36px'
      }
    },
    MuiButton: {
      root: {
        textTransform: 'capitalize',
      }
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  },
  palette: {
    gradient: {
      main: 'radial-gradient(188.15% 293.06% at 93.46% -88.15%, #780031 13.16%, #100E17 100%);'
    }
  }
})

export default theme