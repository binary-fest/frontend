import { makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {
  isShow: boolean
  handleShow: (state: boolean) => void
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: 1000
  }
}))

export default function Alert(props: Props): ReactElement {
  const classes = useStyles()

  const closeAlertHandler = () => props.handleShow(false)

  if (!props.isShow) return (<></>)

  return (
    <div className={classes.root}>
      <Typography>Alert !</Typography>
      <Typography onClick={closeAlertHandler}>Close</Typography>
    </div>
  )
}
