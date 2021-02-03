import {
  makeStyles,
  Typography,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel
} from '@material-ui/core'
import React, { ReactElement } from 'react'

const useStyles = makeStyles(() => ({
  container: {
    position: 'fixed',
    zIndex: 10000,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  root: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '2rem',
    '& h3': {
      marginBottom: '31px'
    }
  },
  formArea: {
    '& > div:not(:last-child)': {
      marginBottom: '38px'
    }
  }
}))

export default function ParticipantModal(): ReactElement {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <div className={classes.root}>
        <Typography variant="h3">Tambah Peserta</Typography>
        <Grid container>
          <Grid item xs={12} className={classes.formArea}>
            <FormControl fullWidth>
              <InputLabel htmlFor="input-name">Nama</InputLabel>
              <Input id="input-name" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="input-id">NISN / NIM</InputLabel>
              <Input id="input-id" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="input-email">Email</InputLabel>
              <Input id="input-email" type="email" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="input-whatsapp">Nomor Whatsapp</InputLabel>
              <Input id="input-whatsapp" type="number" fullWidth />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
