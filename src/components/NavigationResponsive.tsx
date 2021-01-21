import { makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    height: '100vh',
    position: 'fixed',
    zIndex: 10,
    width: "80%",
    top: "0",
    right: "0"
  }
}))

export default function NavigationResponsive(): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      
    </div>
  )
}
