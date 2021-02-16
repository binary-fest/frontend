import React, { ReactElement } from 'react'
import { StyledMediaPartnerContainer, StyledMediaPartnerTitle } from './Home.styled'

export default function MediaPartner(): ReactElement {
  return (
    <StyledMediaPartnerContainer style={{marginBottom: '141px'}}>
      <StyledMediaPartnerTitle variant="h3" align="center">Our Media Partner</StyledMediaPartnerTitle>
    </StyledMediaPartnerContainer>
  )
}
