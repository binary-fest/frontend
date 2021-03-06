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
      main: 'radial-gradient(312.96% 312.96% at 109.41% -262.96%, #780031 13.16%, #100E17 100%);'
    }
  }
})

export default theme