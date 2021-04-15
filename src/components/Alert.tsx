import { Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  StyledAlert,
  StyledAlertButtonClose,
  StyledAlertCloseZone,
  StyledAlertIconError,
  StyledAlertIconSpinner,
  StyledAlertIconSuccess,
  StyledAlertRoot,
  StyledAlertTitle
} from '../theme/components/Alert'
import { WhiteTypography } from '../theme/extends'
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

const AlertContent = (props: AlertContentProps): ReactElement => {
  return (
    <>
      {props.icon}
      <StyledAlertTitle variant="h3">{props.title}</StyledAlertTitle>
      <Typography align="center">{props.message}</Typography>
      {props.closeHandler && (
        <StyledAlertButtonClose onClick={props.closeHandler}>
          <WhiteTypography>Close</WhiteTypography>
        </StyledAlertButtonClose>
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
        <StyledAlertRoot>
          <StyledAlert>
            {props.variant === "wait" && (
              <AlertContent
                icon={<StyledAlertIconSpinner />}
                title="Melakukan request..."
                message={props.message || "Silahkan tunggu beberapa saat"}
              />
            )}
            {props.variant === "success" && (
              <AlertContent
                icon={<StyledAlertIconSuccess />}
                title="Pendaftaran Berhasil"
                message={props.message || "Untuk informasi tahap selanjutnya akan di konfimasi via email"}
                closeHandler={closeAlertHandler}
              />
            )}
            {props.variant === "error" && (
              <AlertContent
                icon={
                  <StyledAlertIconError>
                    <div></div>
                    <div></div>
                  </StyledAlertIconError>
                }
                title="Pendaftaran Gagal"
                message={props.message || "Mohon maaf terjadi kesalahan, silahkan coba beberapa saat lagi"}
                closeHandler={closeAlertHandler}
              />
            )}
          </StyledAlert>
          <StyledAlertCloseZone onClick={closeAlertHandler}/>
        </StyledAlertRoot>
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
