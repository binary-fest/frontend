import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis eu lacus vel aliquam. Suspendisse potenti. Ut sed orci quis nisl lacinia ullamcorper.',
    imageUrl: 'https://images.unsplash.com/photo-1611172062119-05251ea06de8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    guideBookUrl: '/'
  }, {
    title: 'Internet of Things',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis eu lacus vel aliquam. Suspendisse potenti. Ut sed orci quis nisl lacinia ullamcorper.',
    imageUrl: 'https://images.unsplash.com/photo-1611172062119-05251ea06de8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    guideBookUrl: '/'
  }];

  const classes = useStyles()
  
  return (
    <StaticPageContentStyled>
      <GradientTypography className={classes.heading} align="center">Kompetisi</GradientTypography>
      <Grid container className={classes.listCompetition} justify="space-between">
        {competitions.map(competition => {
          return (
            <Grid item key={competition.title} className="competition-item">
              <img src={competition.imageUrl} alt={competition.title} className="competition-image"/>
              <div className="competition-content">
                <Typography variant="h1">{competition.title}</Typography>
                <Typography>{competition.description}</Typography>
              </div>
              <div>
                <GradientButton variant='contained' color="primary">
                  <img src="/download-icon.svg" alt="Download guide book" className="download-icon"/>
                  Download Guide Book</GradientButton>
              </div>
            </Grid>
          )
        })}
      </Grid>
      <div className={classes.reoffer}>
        <Typography variant="h1" align="center">Do you ready ?</Typography>
        <div>
          <GradientButton variant='contained' color="primary">Registrasi Kompetisi</GradientButton>
        </div>
      </div>
    </StaticPageContentStyled>
  )
}
