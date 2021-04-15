import { Typography, withStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { CSSTransition } from 'react-transition-group'
import { WhiteTypography } from '../theme/extends'
import Backdrop from './Backdrop'
import styled from 'styled-components';
import { GradientButton } from '../theme/extends';

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

const ICON_SIZE = {
  height: 90,
  width: 90
}

const AlertRoot = styled.div`
  position: fixed;
  z-index: 1000;
  transform-origin: center;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
`

const AlertWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 500px;
  height: 350px;
  align-items: center;
  border-radius: 5px;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`

const AlertTitle = withStyles({
  root: {
    marginBottom: '1rem'
  }
})(Typography)

const AlertButtonClose = withStyles({
  root: {
    marginTop: '2rem'
  }
})(GradientButton)

const AlertIconSpinner = styled.div`
  height: ${ICON_SIZE.height}px;
  width: ${ICON_SIZE.width}px;
  border: 5px solid white;
  border-top: 5px solid #FF512F;
  border-radius: 50%;
  margin-bottom: 3rem;
  animation: spinner 1s linear infinite;
`

const AlertIconSuccess = styled.div`
  height: ${ICON_SIZE.height}px;
  width: ${ICON_SIZE.width/2}px;
  margin-bottom: 2rem;
  transform: rotate(45deg);
  border-right: 5px solid #FF512F;
  border-bottom: 5px solid #FF512F;
`

const AlertIconError = styled.div`
  margin-bottom: 2rem;
  height: ${ICON_SIZE.height}px;
  width: ${ICON_SIZE.width}px;
  position: relative;
  transform: rotate(45deg);
  transform-origin: center;
  & div {
    position: absolute;
    top: 50%;
    left: 50%;
  };
  & div:first-child {
    width: 100%;
    height: 5px;
    background-color: #FF512F;
    transform: translate(-50%, -50%);
  };
  & div:nth-child(2) {
    width: 100%;
    height: 5px;
    background-color: #FF512F;
    transform: translate(-50%, -50%) rotate(90deg);
  }
`

const AlertCloseZone = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: -1
`

const AlertContent = (props: AlertContentProps): ReactElement => {
  return (
    <>
      {props.icon}
      <AlertTitle variant="h3">{props.title}</AlertTitle>
      <Typography align="center">{props.message}</Typography>
      {props.closeHandler && (
        <AlertButtonClose onClick={props.closeHandler}>
          <WhiteTypography>Close</WhiteTypography>
        </AlertButtonClose>
      )}
    </>
  )
}

export default function Alert(props: Props): ReactElement {
  const closeAlertHandler = () => props.handleShow(false)


  return (
    <>
      <CSSTransition
        in={props.isShow}
        classNames="animate-Alert"
        timeout={500}
        unmountOnExit
      >
        <AlertRoot>
          <AlertWrapper>
            {props.variant === "wait" && (
              <AlertContent
                icon={<AlertIconSpinner />}
                title="Melakukan request..."
                message={props.message || "Silahkan tunggu beberapa saat"}
              />
            )}
            {props.variant === "success" && (
              <AlertContent
                icon={<AlertIconSuccess />}
                title="Pendaftaran Berhasil"
                message={props.message || "Selamat ! kami akan mengirim email sesaat lagi"}
                closeHandler={closeAlertHandler}
              />
            )}
            {props.variant === "error" && (
              <AlertContent
                icon={
                  <AlertIconError>
                    <div></div>
                    <div></div>
                  </AlertIconError>
                }
                title="Pendaftaran Gagal"
                message={props.message || "Mohon maaf terjadi kesalahan, silahkan coba beberapa saat lagi"}
                closeHandler={closeAlertHandler}
              />
            )}
          </AlertWrapper>
          <AlertCloseZone onClick={closeAlertHandler}/>
        </AlertRoot>
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
