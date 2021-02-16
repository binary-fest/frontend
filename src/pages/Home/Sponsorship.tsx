import React, { ReactElement } from 'react'
import { StyledSponsorshipContainer, StyledSponsorshipTitle } from './Home.styled'

export default function Sponsorship(): ReactElement {
  return (
    <StyledSponsorshipContainer>
      <StyledSponsorshipTitle variant="h3" align="center">Our Sponsorship</StyledSponsorshipTitle>
    </StyledSponsorshipContainer>
  )
}
