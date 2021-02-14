import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
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
        maxWidth: '363px',
        borderRadius: '0 20px 0 20px'
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
    description: 'Perkembangan sebuah aplikasi melibatkan berbagai macam hal termasuk UI / UX untuk mempengaruhi dan membantu pengguna dalam menggunakan aplikasi. BinaryFest 2021 mengadakan perlombaan bagi seluruh masyarakat Indonesia untuk menunjukan hasil-hasil terbaik',
    imageUrl: 'https://images.unsplash.com/photo-1611172062119-05251ea06de8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    guideBookUrl: '/'
  }, {
    title: 'Internet of Things',
    description: 'Internet of Things merupakan salah satu kompetisi yang diadakan oleh BinaryFest 2021 yang fokusnya pada pengembangan perangkat berbasis IoT. Harapannya, para peserta dapat menghasilkan inovasi-inovasi baru yang bermanfaat tentunya untuk permasalahan yang ada. ',
    imageUrl: 'https://images.unsplash.com/photo-1611172062119-05251ea06de8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    guideBookUrl: 'https://res.cloudinary.com/binaryfest/raw/upload/v1613276868/web/binaryfest-guidebook-iot.docx'
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
              <img src={competition.imageUrl} alt={competition.title} className="competition-image"/>
              <div className="competition-content">
                <Typography variant="h1">{competition.title}</Typography>
                <Typography>{competition.description}</Typography>
              </div>
              <div>
                <a href={competition.guideBookUrl} style={{textDecoration: 'none'}}>
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
        <Typography variant="h1" align="center">Do you ready ?</Typography>
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
