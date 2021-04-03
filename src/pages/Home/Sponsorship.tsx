import React, { ReactElement } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Company } from '../../@types/Company'
import { fetchSponsorship } from '../../http/company'
import { StyledSponsorshipContainer, StyledSponsorshipTitle } from './Home.styled'
import ListCompany from './ListCompany'

export default function Sponsorship(): ReactElement {
  const [companines, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    fetchSponsorship().then(data => setCompanies(data))
  }, [])

  if (!companines.length) return <></>

  return (
    <StyledSponsorshipContainer>
      <StyledSponsorshipTitle
        variant="h3"
        align="center"
        data-aos="fade-up"
      >Our Sponsorship</StyledSponsorshipTitle>
      <ListCompany companies={companines} />
    </StyledSponsorshipContainer>
  )
}
