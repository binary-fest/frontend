import { FormControl, makeStyles } from '@material-ui/core';
import React from 'react'
import {
  AbsoluteFormHelperText,
  GradientButton,
  GradientTypography,
  StaticPageContentStyled,
  WhiteInput,
  WhiteInputLabel,
  WhiteTypography
} from '../theme/extends';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '448px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  input: {
    width: '100%',
    marginBottom: '38px'
  }
}))

const SubmissionPage = () => {
  const classes = useStyles()

  return (
    <StaticPageContentStyled>
      <main className={classes.container}>
        <WhiteTypography
          style={{ marginBottom: '38px' }}
          align="center"
          variant="h3"
          data-aos="fade-in"
          data-aos-delay="500"
        >Submission Team</WhiteTypography>
        <FormControl data-aos="fade-up" className={classes.input}>
          <WhiteInputLabel>Key</WhiteInputLabel>
          <WhiteInput
            fullWidth
            type="search"
          />
          <AbsoluteFormHelperText>err</AbsoluteFormHelperText>
        </FormControl>
        <FormControl data-aos="fade-up" className={classes.input}>
          <WhiteInputLabel>Url Berkas</WhiteInputLabel>
          <WhiteInput
            fullWidth
            type="search"
          />
          <AbsoluteFormHelperText>err</AbsoluteFormHelperText>
        </FormControl>
        <GradientButton fullWidth>
          <WhiteTypography>Submit Submission</WhiteTypography>
        </GradientButton>
      </main>
    </StaticPageContentStyled>
  )
}

export default SubmissionPage