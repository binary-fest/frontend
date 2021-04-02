import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import CloudinaryImg from '../components/CloudinaryImg';
import FooterPage from '../components/FooterPage';
import LinkScroll from '../components/LinkScroll';
import useTitlePage from '../hooks/useTitlePage';
import { GradientButton, GradientTypography, StaticPageContentStyled } from '../theme/extends';

const useStyles = makeStyles(({spacing, breakpoints}) => ({
  heading: {
    fontSize: '36px',
    fontWeight: 'bold'
  },
  listCompetition: {
    color: 'white',
    marginBottom: '-67px',
    '& .competition-item': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: spacing(5),
      marginBottom: '67px',
      alignItems: 'center',
      [breakpoints.up('md')]: {
        width: '364px',
      },
      '& .competition-content': {
        marginTop: spacing(3),
        marginBottom: spacing(3),
      },
      '& h1': {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: spacing(2)
      },
      '& .competition-image': {
        width: '100%',
        maxWidth: '243px',
        borderRadius: '0 20px 0 20px',
        height: '181px'
      },
      '& .download-icon': {
        marginRight: spacing(2)
      },
      '& *': {
        textAlign: 'center'
      }
    }
  },
  reoffer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '210px 0',
    '& h1': {
      fontSize: '70px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '27px'
    }
  }
}))

export default function Competition(): ReactElement {
  useTitlePage("Competition - BinaryFest")

  const competitions = [{
    title: 'UI / UX',
    description: 'UI/UX Competition adalah cabang kompetisi dalam event BinaryFest2021 untuk membuat antarmuka produk yang dapat memberikan kenyamanan & mewujudkan pengalaman terbaik bagi pengguna. UI / UX Competition bertujuan untuk menguji peserta dalam menganalisa dan berkreasi dengan design website',
    imageUrl: 'uiux-icon-competition.svg',
    guideBookUrl: 'https://drive.google.com/file/d/16zMQ1qPj_FholxHFZZCV-RnIunNHhf3n/view?usp=sharing'
  }, {
    title: 'Internet of Things',
    description: 'Internet of Things merupakan salah satu kompetisi yang diadakan oleh BinaryFest 2021 yang fokusnya pada pengembangan perangkat berbasis IoT. Harapannya, para peserta dapat menghasilkan inovasi-inovasi baru yang bermanfaat tentunya untuk permasalahan yang ada. ',
    imageUrl: 'iot-icon-competition.svg',
    guideBookUrl: 'https://drive.google.com/file/d/1sSSiAazpQ7-jrd86ovYN4RDFkYcIHkwn/view?usp=sharing'
  }];

  const classes = useStyles()
  
  return (
    <StaticPageContentStyled>
      <GradientTypography className={classes.heading} align="center">Kompetisi</GradientTypography>
      <Grid container className={classes.listCompetition} justify="space-between">
        {competitions.map((competition, index) => {
          return (
            <Grid
              item
              key={competition.title}
              className="competition-item"
              data-aos="fade-up"
              data-aos-delay={index * 500}
            >
              <CloudinaryImg
                src={competition.imageUrl}
                alt={competition.title}
                className="competition-image"
              />
              <div className="competition-content">
                <Typography variant="h1">{competition.title}</Typography>
                <Typography style={{lineHeight: '1.75rem'}}>{competition.description}</Typography>
              </div>
              <div style={{marginTop: 'auto'}}>
                <a
                  href={competition.guideBookUrl}
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GradientButton variant='contained' color="primary">
                    <img src="/download-icon.svg" alt="Download guide book" className="download-icon"/>
                    Download Guide Book</GradientButton>
                </a>
              </div>
            </Grid>
          )
        })}
      </Grid>
      <div className={classes.reoffer} data-aos="zoom-in">
        <Typography variant="h1" align="center">Are you ready ?</Typography>
        <div>
          <LinkScroll to="/register" style={{textDecoration: 'none'}}>
            <GradientButton variant='contained' color="primary">Registrasi Kompetisi</GradientButton>
          </LinkScroll>
        </div>
      </div>
      <FooterPage />
    </StaticPageContentStyled>
  )
}
