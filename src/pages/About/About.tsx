import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import CloudinaryImg from '../../components/CloudinaryImg'
import FooterPage from '../../components/FooterPage'
import useTitlePage from '../../hooks/useTitlePage'
import { GradientTypography, StaticPageContentStyled } from '../../theme/extends'
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

export default function About(): ReactElement {
  useTitlePage("About - BinaryFest")
  const classes = useStyles()

  const missions = [{
    no: '1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vitae id odio at mi mauris. Dolor purus lacus risus rhoncus. Interdum lobortis massa nisi, turpis dictum fusce ultrices. Turpis bibendum cursus ut a mauris,'
  }, {
    no: '2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vitae id odio at mi mauris. Dolor purus lacus risus rhoncus. Interdum lobortis massa nisi, turpis dictum fusce ultrices. Turpis bibendum cursus ut a mauris,'
  }, {
    no: '3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vitae id odio at mi mauris. Dolor purus lacus risus rhoncus. Interdum lobortis massa nisi, turpis dictum fusce ultrices. Turpis bibendum cursus ut a mauris,'
  }]

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
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vitae id odio at mi mauris. Dolor purus lacus risus rhoncus. Interdum lobortis massa nisi, turpis dictum fusce ultrices. Turpis bibendum cursus ut a mauris, mi sit quam.  Dolor purus lacus risus rhoncus. Interdum lobortis massa nisi, turpis dictum fusce ultrices. Turpis bibendum cursus ut a mauris, mi sit quam.</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.quote} direction="column" alignItems="center" data-aos="zoom-in">
        <Grid item>
          <CloudinaryImg src="quote-icon.svg" alt="quote"/>
        </Grid>
        <Grid item>
          <Typography>Lorem ipsum dolor sit amet</Typography>
        </Grid>
        <Grid item>
          <CloudinaryImg src="quote-icon.svg" alt="quote"/>
        </Grid>
      </Grid>
      <Grid container className={classes.visi} direction="column">
        <Grid item data-aos="fade-up">
          <Typography variant="h1" className={classes.titleTrapezoid}>Visi</Typography>
        </Grid>
        <Grid item data-aos="fade-up" data-aos-delay="250">
          <Typography align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vitae id odio at mi mauris. Dolor purus lacus risus rhoncus. Interdum lobortis massa nisi, turpis dictum fusce ultrices. Turpis bibendum cursus ut a mauris, mi sit quam.  Dolor purus lacus risus rhoncus. Interdum lobortis massa nisi, turpis dictum fusce ultrices. Turpis bibendum cursus ut a mauris, mi sit quam.</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.mission} direction="column">
        <Grid item data-aos="fade-up">
          <Typography variant="h1" className={classes.titleTrapezoid}>Misi</Typography>
        </Grid>
        <Grid container justify="space-between">
          {missions.map((mission, index) => (
            <Grid
              item
              xs={12}
              key={mission.no}
              className="mission-item"
              data-aos="fade-up"
              data-aos-delay={250 * index}
            >
              <Typography variant="h4" align="center">{mission.no}</Typography>
              <Typography align="center">{mission.content}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <FooterPage />
    </StaticPageContentStyled>
  )
}
