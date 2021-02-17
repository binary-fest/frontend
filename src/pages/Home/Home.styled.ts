import Styled from 'styled-components'
import CloudinaryImg from '../../components/CloudinaryImg'
import { GradientTypography } from '../../theme/extends'

const Highlight = Styled(CloudinaryImg)`
  position: absolute;
  max-width: 446.5px;
  width: 100%;
  z-index: 1;
  top: 360px;
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

const StyledSponsorshipContainer = Styled.div`
  margin-top: 73px;
`

const StyledSponsorshipTitle = Styled(GradientTypography)`
  margin-bottom: 43px;
`

const StyledMediaPartnerContainer = StyledSponsorshipContainer;
const StyledMediaPartnerTitle = StyledSponsorshipTitle;

const StyledListCompanyContainer = Styled.div`
  display: flex; 
  justify-content: center; 
  max-width: 734px; 
  flex-wrap: wrap; 
  margin: auto;
`

const StyledCompanyItem = Styled.div`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #ff512f;
  margin: 0 14px 28px 14px;
`

const StyledCompanyImage = Styled.img`
  max-width: 300px;
  height: 50px; 
  filter: grayscale(1);
  transition: filter 500ms;
  &:hover {
    filter: grayscale(0);
    transition: filter 500ms;
  }
`

export {
  Highlight,
  Arrows,
  StyledSponsorshipContainer,
  StyledSponsorshipTitle,
  StyledMediaPartnerContainer,
  StyledMediaPartnerTitle,
  StyledListCompanyContainer,
  StyledCompanyItem,
  StyledCompanyImage
}