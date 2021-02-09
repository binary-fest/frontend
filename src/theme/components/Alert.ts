import { Typography, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import { GradientButton } from '../extends';

const ICON_SIZE = {
  height: 90,
  width: 90
}

const StyledAlertRoot = styled.div`
  position: fixed;
  z-index: 1000;
  transform-origin: center;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
`

const StyledAlert = styled.div`
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

const StyledAlertTitle = withStyles({
  root: {
    marginBottom: '1rem'
  }
})(Typography)

const StyledAlertButtonClose = withStyles({
  root: {
    marginTop: '2rem'
  }
})(GradientButton)

const StyledAlertIconSpinner = styled.div`
  height: ${ICON_SIZE.height}px;
  width: ${ICON_SIZE.width}px;
  border: 5px solid white;
  border-top: 5px solid #FF512F;
  border-radius: 50%;
  margin-bottom: 3rem;
  animation: spinner 1s linear infinite;
`

const StyledAlertIconSuccess = styled.div`
  height: ${ICON_SIZE.height}px;
  width: ${ICON_SIZE.width/2}px;
  margin-bottom: 2rem;
  transform: rotate(45deg);
  border-right: 5px solid #FF512F;
  border-bottom: 5px solid #FF512F;
`

const StyledAlertIconError = styled.div`
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

const StyledAlertCloseZone = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: -1
`

export {
  StyledAlert,
  StyledAlertTitle,
  StyledAlertButtonClose,
  StyledAlertIconSpinner,
  StyledAlertIconSuccess,
  StyledAlertIconError,
  StyledAlertCloseZone,
  StyledAlertRoot
}