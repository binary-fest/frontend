import { Button, Checkbox, FormHelperText, Input, InputLabel, Typography, withStyles } from '@material-ui/core';
import styled from 'styled-components';

const GradientButton = withStyles({
  root: {
    textTransform: 'capitalize',
    padding: '16px 24px',
    background: 'linear-gradient(124.15deg, #FF512F -3.94%, #DF2672 179.22%)',
    '& a': {
      color: 'white'
    }
  },
  disabled: {
    background: 'none !important',
    backgroundColor: '#CCCCCC !important',
    '& a': {
      color: '#32322C'
    }
  }
})(Button)

const WhiteButton = withStyles({
  root: {
    textTransform: 'capitalize',
    padding: '16px 24px',
    background: 'white',
    color: 'black',
    '&:hover': {
      backgroundImage: 'linear-gradient(140.7deg, #FF512F 12%, #DF2672 95.63%)',
      '-webkit-background-clip': 'text',
      '-moz-background-clip': 'text',
      color: 'white',
      border: '1px solid white'
    }
  },
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

const WhiteTypography = withStyles({
  root: {
    color: 'white'
  }
})(Typography)

const StaticPageContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 806px;
  padding-top: 139px;
`

const WhiteInputLabel = withStyles({
  root: {
    color: 'white'
  },
  focused: {
    color: 'white !important'
  },
  error: {
    color: '#f44336 !important'
  }
})(InputLabel)

const WhiteInput = withStyles({
  underline: {
    borderBottom: '1px solid white',
    '&:after': {
      borderBottom: '1px solid white'
    },
  },
  error: {
    borderBottomColor: '#f44336'
  },
  root: {
    color: 'white'
  }
})(Input)

const WhiteCheckbox = withStyles({
  root: {
    color: 'white'
  }
})(Checkbox)

const AbsoluteFormHelperText = withStyles({
  root: {
    position: 'absolute',
    bottom: '-1.3rem'
  }
})(FormHelperText)

export {
  GradientButton,
  GradientTypography,
  StaticPageContainerStyled as StaticPageContentStyled,
  WhiteTypography,
  WhiteInputLabel,
  WhiteInput,
  AbsoluteFormHelperText,
  WhiteButton,
  WhiteCheckbox
}