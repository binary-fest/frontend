import { makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {
  isShow: boolean
  handleShow: (state: boolean) => void
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    zIndex: 1000,
    maxWidth: '500px',
    height: '330px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0 1rem',
    width: '100%',
    boxSizing: 'border-box'
  },
  wrapper: {
    height: '100%',
    alignItems: 'center',
    borderRadius: '5px',
    padding: '1rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box'
  }
}))

export default function Alert(props: Props): ReactElement {
  const classes = useStyles()

  const closeAlertHandler = () => props.handleShow(false)

  if (!props.isShow) return (<></>)

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Typography>Alert !</Typography>
        <Typography onClick={closeAlertHandler}>Close</Typography>
      </div>
    </div>
  )
}
