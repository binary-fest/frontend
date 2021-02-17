import { Grid, withStyles } from '@material-ui/core'
import theme from '../../theme'

const StyledAboutHeroImageContainer = withStyles({
  root: {
    maxWidth: "298.8px",
    height: '250px',
    width: '100%',
    marginBottom: '38px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      height: '242px',
      right: '0'
    },
    '& .binaryfest-logo': {
      margin: '0 auto'
    },
    '& .highlight': {
      width: '100%',
      position: 'relative',
      bottom: '54px'
    }
  }
})(Grid)

export {
  StyledAboutHeroImageContainer
}