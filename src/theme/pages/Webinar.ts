import { Container, Grid, withStyles } from '@material-ui/core'
import theme from '..'

const StyledWebinarContainer = withStyles({
  root: {
    paddingTop: '389px'
  }
})(Container)

const StyledWebinarButtonGroup = withStyles({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    '& > div': {
      '&:not(:last-child)': {
        marginBottom: '57px',
        [theme.breakpoints.up('sm')]: {
          marginBottom: '0px !important',
          marginRight: '33.5px'
        },
      },
    }
  }
})(Grid)

export {
  StyledWebinarContainer,
  StyledWebinarButtonGroup
}