import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'

const useStyles = makeStyles(({spacing, breakpoints}) => ({
  root: {
    paddingTop: '139px',
    maxWidth: '806px',
    margin: '0 auto'
  },
  heading: {
    backgroundImage: 'linear-gradient(140.7deg, #FF512F 12%, #DF2672 95.63%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
    fontSize: '36px',
    fontWeight: 'bold'
  },
  listCompetition: {
    color: 'white',
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
      '& img': {
        width: '100%',
        maxWidth: '363px',
        borderRadius: '0 20px 0 20px'
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
    '& h1': {
      fontSize: '70px',
      fontWeight: 'bold',
      color: 'white'
    }
  }
}))

export default function Competition(): ReactElement {
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
    <div className={classes.root}>
      <Typography className={classes.heading} align="center">Kompetisi</Typography>
      <Grid container className={classes.listCompetition} justify="space-between">
        {competitions.map(competition => {
          return (
            <Grid item key={competition.title} className="competition-item">
              <img src={competition.imageUrl} alt={competition.title} />
              <div className="competition-content">
                <Typography variant="h1">{competition.title}</Typography>
                <Typography>{competition.description}</Typography>
              </div>
              <div>
                <Button variant='contained' color="primary">Download Guide Book</Button>
              </div>
            </Grid>
          )
        })}
      </Grid>
      <div className={classes.reoffer}>
        <Typography variant="h1" align="center">Do you ready ?</Typography>
        <div>
          <Button variant='contained' color="primary">Registrasi Kompetisi</Button>
        </div>
      </div>
    </div>
  )
}
