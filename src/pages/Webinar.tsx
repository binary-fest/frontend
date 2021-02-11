import { Grid } from '@material-ui/core'
import React, { ReactElement } from 'react'
import FooterPage from '../components/FooterPage'
import ListLecturer from '../components/ListLecturer'
import useTitlePage from '../hooks/useTitlePage'
import { GradientButton, GradientTypography, StaticPageContentStyled, WhiteTypography } from '../theme/extends'
import { StyledWebinarContainer, StyledWebinarButtonGroup } from '../theme/pages/Webinar'

export default function Webinar(): ReactElement {
  useTitlePage("Webinar - BinaryFest2021")

  return (
    <StaticPageContentStyled>
      <StyledWebinarContainer>
        <GradientTypography
          variant="h3" 
          style={{ fontSize: '36px' }} 
          align="center"
          data-aos="fade-in"
        >Webinar Nasional</GradientTypography>
        <WhiteTypography
          style={{ marginTop: '16px', marginBottom: '78px', fontWeight: 400 }}
          align="center"
          variant="h3"
          data-aos="fade-in"
          data-aos-delay="500"
        >Peran IoT dan Cyber Security di Era Revolusi 4.0</WhiteTypography>
        <ListLecturer />
        <WhiteTypography
          style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '41px' }}
          align="center"
          variant="h3"
          data-aos="zoom-in"
        >Pengen tau seberapa serunya ?</WhiteTypography>
        <StyledWebinarButtonGroup container>
          <Grid item data-aos="zoom-in" data-aos-delay="250">
            <GradientButton>
              <WhiteTypography>Daftar Webinar</WhiteTypography>
            </GradientButton>
          </Grid>
          <Grid item data-aos="zoom-in" data-aos-delay="500">
            <GradientButton>
              <WhiteTypography>Download Poster</WhiteTypography>
            </GradientButton>
          </Grid>
        </StyledWebinarButtonGroup>
      </StyledWebinarContainer>
      <FooterPage />
    </StaticPageContentStyled>
  )
}
