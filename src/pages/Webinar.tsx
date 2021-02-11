import React, { ReactElement } from 'react'
import useTitlePage from '../hooks/useTitlePage'
import { GradientTypography, WhiteTypography } from '../theme/extends'
import { StyledWebinarContainer } from '../theme/pages/Webinar'

export default function Webinar(): ReactElement {
  useTitlePage("Webinar - BinaryFest2021")

  return (
    <>
      <StyledWebinarContainer>
        <GradientTypography
          variant="h3" 
          style={{ fontSize: '36px' }} 
          align="center"
        >Webinar Nasional</GradientTypography>
        <WhiteTypography
          style={{ marginTop: '16px' }}
          align="center"
        >Peran IoT dan Cyber Security di Era Revolusi 4.0</WhiteTypography>
      </StyledWebinarContainer>
    </>
  )
}
