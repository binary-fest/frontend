import React, { ReactElement, useEffect, useState } from 'react'
import { Company } from '../../@types/Company'
import { fetchMediaPartner } from '../../http/company'
import { StyledMediaPartnerContainer, StyledMediaPartnerTitle } from './Home.styled'
import ListCompany from './ListCompany'

export default function MediaPartner(): ReactElement {
  const [companines, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    fetchMediaPartner().then(data => setCompanies(data))
  }, [])

  if (!companines.length) return <></>

  return (
    <StyledMediaPartnerContainer style={{marginBottom: '141px'}}>
      <StyledMediaPartnerTitle
        variant="h3"
        align="center"
        data-aos="fade-up"
      >Our Media Partner</StyledMediaPartnerTitle>
      <ListCompany companies={companines}/>
    </StyledMediaPartnerContainer>
  )
}
