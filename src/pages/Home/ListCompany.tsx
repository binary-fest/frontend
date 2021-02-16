import React, { ReactElement } from 'react'
import { Company } from '../../@types/Company'
import { StyledCompanyImage, StyledCompanyItem, StyledListCompanyContainer } from './Home.styled'

interface ListCompanyProps {
  companies: Company[]
}

const initialListCompany: Company[] = [{
  id: 0,
  name: 'google',
  imageUrl: 'google.svg',
  website: 'google.com'
},{
  id: 1,
  name: 'facebook',
  imageUrl: 'facebook.svg',
  website: 'facebook.com'
},{
  id: 2,
  name: 'tesla',
  imageUrl: 'tesla.svg',
  website: 'tesla.com'
},{
  id: 3,
  name: 'amazon',
  imageUrl: 'amazon.svg',
  website: 'amazon.com'
},{
  id: 4,
  name: 'netlify',
  imageUrl: 'netlify.svg',
  website: 'netlify.com'
},{
  id: 5,
  name: 'tokopedia',
  imageUrl: 'tokopedia.svg',
  website: 'tokopedia.com'
}] 

export default function ListCompany(props: ListCompanyProps): ReactElement {
  return (
    <StyledListCompanyContainer data-aos="fade-up" data-aos-delay="250">
        {initialListCompany.map((company) => {
          return (
            <StyledCompanyItem key={company.id}>
              <StyledCompanyImage src={company.imageUrl} alt="sponsorship"/>
            </StyledCompanyItem>
          )
        })}
      </StyledListCompanyContainer>
  )
}
