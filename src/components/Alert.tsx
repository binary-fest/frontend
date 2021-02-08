import { makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { CSSTransition } from 'react-transition-group'
import Backdrop from './Backdrop'

interface Props {
  isShow: boolean
  handleShow: (state: boolean) => void
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    zIndex: 1000,
    transformOrigin: 'center',
    padding: '0 1rem',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex'
  },
  wrapper: {
    width: '100%',
    margin: 'auto',
    maxWidth: '500px',
    height: '330px',
    alignItems: 'center',
    borderRadius: '5px',
    padding: '1rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box'
  },
  closeZone: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    zIndex: -1
  }
}))

export default function Alert(props: Props): ReactElement {
  const classes = useStyles()

  const closeAlertHandler = () => props.handleShow(false)

  return (
    <>
      <CSSTransition
        in={props.isShow}
        classNames="animate-Alert"
        timeout={500}
        unmountOnExit
      >
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <Typography>Alert !</Typography>
            <Typography onClick={closeAlertHandler}>Close</Typography>
          </div>
          <div className={classes.closeZone} onClick={closeAlertHandler}/>
        </div>
      </CSSTransition>
      <CSSTransition
        in={props.isShow}
        classNames="animate-Backdrop"
        timeout={500}
        unmountOnExit
      >
        <Backdrop zIndex={999} onClick={closeAlertHandler} />
      </CSSTransition>
    </>
  )
}
