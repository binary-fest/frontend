import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  },
  palette: {
    gradient: {
      main: 'radial-gradient(312.96% 312.96% at 109.41% -262.96%, #780031 13.16%, #100E17 100%)'
    }
  }
})

export default theme