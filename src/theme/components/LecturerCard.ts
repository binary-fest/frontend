import styled from 'styled-components'
import theme from '..'

const StyledLecturerCard = styled.div`
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

const StyledLecturerCardProfilePict = styled.div`
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
  StyledLecturerCardProfilePict,
  StyledLecturerCard
}