import React, { ReactElement } from 'react'
import { StyledSponsorshipContainer, StyledSponsorshipTitle } from './Home.styled'
import ListCompany from './ListCompany'

export default function Sponsorship(): ReactElement {
  return (
    <StyledSponsorshipContainer>
      <StyledSponsorshipTitle
        variant="h3"
        align="center"
        data-aos="fade-up"
      >Our Sponsorship</StyledSponsorshipTitle>
      <ListCompany companies={[]} />
    </StyledSponsorshipContainer>
  )
}
