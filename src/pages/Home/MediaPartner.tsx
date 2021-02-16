import React, { ReactElement } from 'react'
import { StyledMediaPartnerContainer, StyledMediaPartnerTitle } from './Home.styled'
import ListCompany from './ListCompany'

export default function MediaPartner(): ReactElement {
  return (
    <StyledMediaPartnerContainer style={{marginBottom: '141px'}}>
      <StyledMediaPartnerTitle
        variant="h3"
        align="center"
        data-aos="fade-up"
      >Our Media Partner</StyledMediaPartnerTitle>
      <ListCompany companies={[]}/>
    </StyledMediaPartnerContainer>
  )
}
