import Styled from 'styled-components'
import theme from '../../theme'

const Highlight = Styled.img`
  position: absolute;
  top: 280px;
  max-width: 446.5px;
  width: 100%;
  z-index: 1;
  ${theme.breakpoints.up('sm')} {
    top: 340px;
  }
`

export {
  Highlight
}