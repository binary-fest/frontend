import React, { ReactElement } from 'react'
import { Company } from '../../@types/Company'
import { StyledCompanyImage, StyledCompanyItem, StyledListCompanyContainer } from './Home.styled'

interface ListCompanyProps {
  companies: Company[]
}

export default function ListCompany(props: ListCompanyProps): ReactElement {
  return (
    <StyledListCompanyContainer data-aos="fade-up" data-aos-delay="250">
        {props.companies.map((company) => {
          return (
            <StyledCompanyItem key={company.id}>
              <StyledCompanyImage src={company.imageUrl} alt="sponsorship"/>
            </StyledCompanyItem>
          )
        })}
      </StyledListCompanyContainer>
  )
}
