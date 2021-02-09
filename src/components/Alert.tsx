import { makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { CSSTransition } from 'react-transition-group'
import { GradientButton, WhiteTypography } from '../theme/extends'
import Backdrop from './Backdrop'

export interface AlertStatus {
  isShow: boolean
  variant: "success" | "wait" | "error"
  message?: string
}

interface Props extends AlertStatus {
  handleShow: (state: boolean) => void
}

interface AlertContentProps {
  title: string
  icon: React.ReactNode
  message?: string
  closeHandler?: () => void
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
    height: '350px',
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
  },
  spinner: {
    height: '90px',
    width: '90px',
    border: '5px solid white',
    borderTop: '5px solid #FF512F',
    borderRadius: '50%',
    marginBottom: '3rem',
    animation: 'spinner 1s linear infinite'
  },
  successIcon: {
    width: '45px',
    height: '90px',
    marginBottom: '2rem',
    transform: 'rotate(45deg)',
    borderRight: '5px solid #FF512F',
    borderBottom: '5px solid #FF512F',
  },
  buttonClose: {
    marginTop: '2rem'
  },
  errorIcon: {
    marginBottom: '2rem',
    width: '90px',
    height: '90px',
    position: 'relative',
    transform: 'rotate(45deg)',
    transformOrigin: 'center',
    '& div': {
      position: 'absolute',
      top: '50%',
      left: '50%',
    },
    '& div:first-child': {
      width: '100%',
      height: '5px',
      backgroundColor: '#FF512F',
      transform: 'translate(-50%, -50%)'
    },
    '& div:nth-child(2)': {
      width: '100%',
      height: '5px',
      backgroundColor: '#FF512F',
      transform: 'translate(-50%, -50%) rotate(90deg)',
    }
  }
}))

const AlertContent = (props: AlertContentProps): ReactElement => {
  const classes = useStyles()

  return (
    <>
      {props.icon}
      <Typography variant="h3" style={{marginBottom: '1rem'}}>{props.title}</Typography>
      <Typography align="center">{props.message}</Typography>
      {props.closeHandler && (
        <GradientButton onClick={props.closeHandler} className={classes.buttonClose}>
          <WhiteTypography>Close</WhiteTypography>
        </GradientButton>
      )}
    </>
  )
}

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
            {props.variant === "wait" && (
              <AlertContent
                icon={<div className={classes.spinner} />}
                title="Melakukan request..."
                message="Silahkan tunggu beberapa saat"
              />
            )}
            {props.variant === "success" && (
              <AlertContent
                icon={<div className={classes.successIcon} />}
                title="Pendaftaran Berhasil"
                message="Selamat ! kami akan mengirim email sesaat lagi"
                closeHandler={closeAlertHandler}
              />
            )}
            {props.variant === "error" && (
              <AlertContent
                icon={
                  <div className={classes.errorIcon}>
                    <div></div>
                    <div></div>
                  </div>
                }
                title="Pendaftaran Gagal"
                message="Mohon maaf terjadi kesalahan, silahkan coba beberapa saat lagi"
                closeHandler={closeAlertHandler}
              />
            )}
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
