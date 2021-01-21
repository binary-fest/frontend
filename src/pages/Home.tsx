import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'

const useStyles = makeStyles(({palette, breakpoints, spacing}) => ({
  hero: {
    height: '100vh',
    display: 'flex',
    '& .hero-content': {
      margin: 'auto',
      '& *': {
        textAlign: 'center'
      },
      '& .heading': {
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '45px',
        [breakpoints.up('md')]: {
          fontSize: '36px',
          maxWidth: '600px'
        }
      },
      '& .coming-soon': {
        backgroundImage: 'linear-gradient(140.7deg, #FF512F 12%, #DF2672 95.63%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent', 
        '-moz-background-clip': 'text',
        '-moz-text-fill-color': 'transparent',
        fontSize: '50px',
        [breakpoints.up('md')]: {
          fontSize: '72px',
        }
      },
      '& .date': {
        color: '#C4C4C4',
        fontSize: '18px'
      },
      '& .detail-remain': {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
        [breakpoints.up('md')]: {
          fontSize: '72px',
        }
      },
      '& .detail-text': {
        fontWeight: 'bold',
        backgroundImage: 'linear-gradient(140.7deg, #FF512F 12%, #DF2672 95.63%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        '-moz-background-clip': 'text',
        '-moz-text-fill-color': 'transparent',
        fontSize: '14px',
        [breakpoints.up('md')]: {
          fontSize: '18px',
        }
      },
      '& .detail-container': {
        maxWidth: '317px',
        margin: '0 auto',
        marginTop: spacing(2),
        [breakpoints.up('md')]: {
          maxWidth: '535px',
        }
      }
    },
  }
}))

export default function Home(): ReactElement {
  const dateDetails = [{
      remain: '12',
      text: 'Day'
    },
    {
      remain: '12',
      text: 'Hours'
    },
    {
      remain: '12',
      text: 'Minutes'
    },
    {
      remain: '12',
      text: 'Seconds'
  }]

  const classes = useStyles()

  return (
    <div className={classes.hero}>
      <div className="hero-content">
        <Typography
          style={{color: 'white'}}
          className="heading"
        >Want to Be First BinaryFest Pariticipant ?</Typography>
        <Typography
          className="coming-soon"
        >COMING SOON</Typography>
        <Typography
          className="date"
        >ON MARCH 2021</Typography>
        <Grid container justify="space-between" className="detail-container">
          {dateDetails.map(detail => {
            return (
              <Grid item key={detail.text}>
                <Typography className="detail-remain">{detail.remain}</Typography>
                <Typography className="detail-text">{detail.text}</Typography>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}
