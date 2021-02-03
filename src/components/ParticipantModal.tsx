import { makeStyles, Typography, Container } from '@material-ui/core'
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
    padding: '1rem'
  }
}))

export default function ParticipantModal(): ReactElement {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <div className={classes.root}>
        <Typography variant="h3">Tambah Peserta</Typography>
      </div>
    </Container>
  )
}
