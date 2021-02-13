import Styled from 'styled-components'

const StyledErrorPage = Styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledErroPageFooter = Styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  a {
    text-decoration: none;
  }
`

export {StyledErrorPage, StyledErroPageFooter}