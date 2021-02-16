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

const Arrows = Styled.div`
  position: absolute;
  top: 638px;
  span {
    width: 27px;
    height: 27px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(45deg);
    display: block;
    animation: arrows 1s linear infinite;
    margin: 0 auto;
    &:nth-child(2) {
      animation-delay: 0.2s;
    };
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
  @keyframes arrows {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-27px, -27px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(27px, 27px);
    }
  }
`

export {
  Highlight,
  Arrows
}