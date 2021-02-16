import { Grid, withStyles } from '@material-ui/core'
import theme from '..'

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
  StyledWebinarButtonGroup
}