import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import CloudinaryImg from '../../components/CloudinaryImg'
import FooterPage from '../../components/FooterPage'
import useTitlePage from '../../hooks/useTitlePage'
import { GradientTypography, StaticPageContentStyled } from '../../theme/extends'
import ErrorPage from '../404'
import { StyledAboutHeroImageContainer } from './About.styled'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  aboutContainer: {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [breakpoints.up('md')]: {
      textAlign: 'left',
      alignItems: 'flex-start',
    },
    '& h1': {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: spacing(5),
      display: 'inline-block',
      [breakpoints.up('md')]: {
        marginBottom: spacing(2),
      },
    },
    '& .content': {
      maxWidth: '419.71px'
    },
  },
  quote: {
    color: 'white',
    margin: '110px 0',
    '& p': {
      fontSize: '24px',
      margin: '12px 0',
      [breakpoints.up('md')]: {
        fontSize: '48px',
        maxWidth: '459px',
        textAlign: 'center'
      }
    },
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: '711px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  titleTrapezoid: {
    backgroundImage: 'url(/trapezoid.svg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '79.5px',
    marginBottom: '56px'
  },
  visi: {
    color: 'white',
    marginBottom: '84px',
    '& h1': {
      fontSize: '30px',
      fontWeight: 'bold'
    },
  },
  mission: {
    color: 'white',
    maxWidth: '1016px',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '147px',
    '& h1': {
      fontSize: '30px',
      fontWeight: 'bold'
    },
    '& .mission-item': {
      marginBottom: '45px',
      '& h4': {
        fontSize: '64px',
        fontWeight: 'bold',
        marginBottom: '9px'
      },
      [breakpoints.up('md')]: {
        maxWidth: '250px'
      },
      [breakpoints.up('lg')]: {
        maxWidth: '300px'
      },
    },
    [breakpoints.up('lg')]: {
      width: '1016px',
    },
  }
}))

const isDisabled = false;

export default function About(): ReactElement {
  useTitlePage("About - BinaryFest")
  const classes = useStyles()

  if (isDisabled) return <ErrorPage title="</>" caption="Halaman sedang dalam proses pengembangan" />

  return (
    <StaticPageContentStyled>
      <Grid container className={classes.aboutContainer}>
        <Grid item data-aos="fade-up">
          <GradientTypography variant="h1">About</GradientTypography>
        </Grid>
        <StyledAboutHeroImageContainer item data-aos="fade-up">
          <CloudinaryImg src="/binary-fest-logo-diagonal.svg" alt="binaryfest" className="binaryfest-logo"/>
          <CloudinaryImg src="/highlight.svg" alt="Highlight" className="highlight"/>
        </StyledAboutHeroImageContainer>
        <Grid item className="content" data-aos="fade-up" data-aos-delay="250">
          <Typography style={{lineHeight: '1.75rem'}}>BinaryFest tercipta untuk menarik para informatik berkontribusi dalam penerapan teknologi digital di semua aspek kehidupan yang terdapat pada masyarakat dan menyebarluaskan informasi tentang pentingnya inovasi teknologi yang menjadi urgensi saat ini. Untuk membantu indonesia dalam menyelaraskan Sustainable Development Goals (SDGs) 2030.</Typography>
        </Grid>
      </Grid>
      <div style={{marginTop: '100px'}}/>
      <FooterPage />
    </StaticPageContentStyled>
  )
}
