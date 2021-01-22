import { Button, withStyles } from '@material-ui/core';

const GradientButton = withStyles({
  root: {
    textTransform: 'capitalize',
    padding: '16px 24px',
    background: 'linear-gradient(124.15deg, #FF512F -3.94%, #DF2672 179.22%)'
  }
})(Button)

export default GradientButton