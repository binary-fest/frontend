import { Container, FormControl, Grid, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { WhiteInput, WhiteInputLabel, WhiteTypography } from '../theme/extends'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    top: '139px'
  },
  teamForm: {
    '& > div': {
      marginTop: '29px'
    }
  }
}))

export default function Register(): ReactElement {

  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <WhiteTypography variant="h3">Pendaftaran Team</WhiteTypography>
          <div className={classes.teamForm}>
            <FormControl fullWidth>
              <WhiteInputLabel htmlFor="input-name-team">Nama Team</WhiteInputLabel>
              <WhiteInput id="input-name-team" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <WhiteInputLabel htmlFor="input-email-team">Email ( Perwakilan )</WhiteInputLabel>
              <WhiteInput id="input-email-team" type="email" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <WhiteInputLabel htmlFor="input-instansi-team">Instansi</WhiteInputLabel>
              <WhiteInput id="input-instansi-team" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <WhiteInputLabel htmlFor="input-judul">Judul</WhiteInputLabel>
              <WhiteInput id="input-judul" fullWidth />
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
