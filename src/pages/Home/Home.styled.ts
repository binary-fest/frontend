import Styled from 'styled-components'
import CloudinaryImg from '../../components/CloudinaryImg'
import { GradientTypography } from '../../theme/extends'
import theme from '../../theme'
import { Grid, withStyles } from '@material-ui/core'

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

  ${theme.breakpoints.down('sm')} {
    filter: grayscale(0);
  }

  &:hover {
    filter: grayscale(0);
    transition: filter 500ms;
  }
`

const WebinarButtonGroup = withStyles({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    '& > div': {
      '&:not(:last-child)': {
        marginBottom: '57px',
        [theme.breakpoints.up('sm')]: {
          marginBottom: '0px !important',
          marginRight: '33.5px'
        },
      },
    }
  }
})(Grid)

const ListLecturerContainer = Styled.div`
  margin-bottom: 137px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.breakpoints.up('sm')} {
    & {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }
`


const LecturerCardWrapper = Styled.div`
  max-width: 293px;

  &:not(:last-child) {
    margin-bottom: 84px;
  }

  ${theme.breakpoints.up('sm')} {
    & {
      margin-bottom: 0px !important;
    }

    &:not(:last-child) {
      margin-right: 84px;
    }
  }
`

const LecturerCardPict = Styled.div`
  height: 165px;
  width: 165px;
  margin: 0 auto;

  img {
    border-radius: 20px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: grayscale(1);
    transition: filter 500ms;
    
    ${theme.breakpoints.down('sm')} {
      filter: grayscale(0);
    }

    &:hover {
      filter: grayscale(0);
      transition: filter 500ms;
    }
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
  StyledCompanyImage,
  WebinarButtonGroup,
  ListLecturerContainer,
  LecturerCardWrapper,
  LecturerCardPict
}