import { Button, Typography, withStyles } from '@material-ui/core';

const GradientButton = withStyles({
  root: {
    textTransform: 'capitalize',
    padding: '16px 24px',
    background: 'linear-gradient(124.15deg, #FF512F -3.94%, #DF2672 179.22%)'
  }
})(Button)

const GradientTypography = withStyles({
  root: {
    backgroundImage: 'linear-gradient(140.7deg, #FF512F 12%, #DF2672 95.63%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
  }
})(Typography)

export {
  GradientButton,
  GradientTypography
}