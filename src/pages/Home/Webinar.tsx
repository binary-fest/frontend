import { Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { ReactElement } from 'react'
import ListLecturer from '../../components/ListLecturer'
import { GradientButton, GradientTypography, WhiteTypography } from '../../theme/extends'
import { StyledWebinarButtonGroup } from '../../theme/pages/Webinar'
import base64 from '../../utils/base64'

const useStyles = makeStyles(({breakpoints}) => ({
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    '& > *:not(:last-child)': {
      marginBottom: '8px'
    },
    [breakpoints.up('sm')]: {
      flexDirection: 'row',
      '& > *:not(:last-child)': {
        marginBottom: '0',
        marginRight: '16px'
      },
    }
  }
}))

export default function Webinar(): ReactElement {
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

  const classes = useStyles()

  return (
    <div>
      <GradientTypography
        variant="h3" 
        style={{ fontSize: '36px', marginTop: '206px', marginBottom: '24px' }} 
        align="center"
        data-aos="fade-in"
      >Webinar Nasional</GradientTypography>
      <WhiteTypography
        style={{ marginBottom: '78px', fontWeight: 400 }}
        align="center"
        variant="h3"
        data-aos="fade-in"
        data-aos-delay="500"
      >"Peranan IoT dan Cyber Security di Era Revolusi 4.0"</WhiteTypography>
      <ListLecturer />
      <WhiteTypography
        style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '1rem' }}
        align="center"
        variant="h3"
        data-aos="zoom-in"
      >Ingin tau seberapa serunya ?</WhiteTypography>
      <StyledWebinarButtonGroup container>
        <Grid item data-aos="zoom-in" data-aos-delay="500" className={classes.buttonGroup}>
          <GradientButton>
            <a href="https://bit.ly/WebinarBinaryFest" style={{textDecoration: 'none'}} target="_blank" rel="noreferrer">
              <WhiteTypography>Daftar Webinar</WhiteTypography>
            </a>
          </GradientButton>
          <GradientButton onClick={downloadPosterHandler}>
            <WhiteTypography>Download Poster</WhiteTypography>
          </GradientButton>
        </Grid>
      </StyledWebinarButtonGroup>
    </div>
  )
}
