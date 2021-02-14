import { Grid } from '@material-ui/core'
import axios from 'axios'
import React, { ReactElement } from 'react'
import FooterPage from '../components/FooterPage'
import LinkScroll from '../components/LinkScroll'
import ListLecturer from '../components/ListLecturer'
import useTitlePage from '../hooks/useTitlePage'
import { GradientButton, GradientTypography, StaticPageContentStyled, WhiteTypography } from '../theme/extends'
import { StyledWebinarContainer, StyledWebinarButtonGroup } from '../theme/pages/Webinar'
import base64 from '../utils/base64'

export default function Webinar(): ReactElement {
  useTitlePage("Webinar - BinaryFest2021")

  const downloadPosterHandler = () => {
    axios
      .get(
        'https://res.cloudinary.com/binaryfest/image/upload/web/webinar-poster.jpg',
        { responseType: 'blob' }
      )
      .then(res => {
        base64(res.data, (base64Result) => {
          const a = document.createElement('a') as HTMLAnchorElement;
          a.href = base64Result;
          a.download = "webinar-poster.jpg";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })
      })
  }

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
        >Peranan IoT dan Cyber Security di Era Revolusi 4.0</WhiteTypography>
        <ListLecturer />
        <WhiteTypography
          style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '41px' }}
          align="center"
          variant="h3"
          data-aos="zoom-in"
        >Ingin tau seberapa serunya ?</WhiteTypography>
        <StyledWebinarButtonGroup container>
          <Grid item data-aos="zoom-in" data-aos-delay="250">
            <LinkScroll to="/webinar/register" style={{textDecoration: 'none'}}>
              <GradientButton>
                <WhiteTypography>Daftar Webinar</WhiteTypography>
              </GradientButton>
            </LinkScroll>
          </Grid>
          <Grid item data-aos="zoom-in" data-aos-delay="500">
            <GradientButton onClick={downloadPosterHandler}>
              <WhiteTypography>Download Poster</WhiteTypography>
            </GradientButton>
          </Grid>
        </StyledWebinarButtonGroup>
      </StyledWebinarContainer>
      <FooterPage />
    </StaticPageContentStyled>
  )
}
