import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import useCountdown from '../hooks/useCountdown'
import useTitlePage from '../hooks/useTitlePage'
import { GradientTypography } from '../theme/extends'

const useStyles = makeStyles(({breakpoints, spacing}) => ({
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
          '& div': {
            width: '95px'
          }
        },
      }
    },
  }
}))

export default function Home(): ReactElement {
  useTitlePage("BinaryFest 2021")
  const [dateRemain] = useCountdown()

  const classes = useStyles()

  return (
    <div className={classes.hero}>
      <div className="hero-content">
        <Typography
          style={{color: 'white'}}
          className="heading"
        >Want to Be First BinaryFest Pariticipant ?</Typography>
        <GradientTypography
          className="coming-soon"
        >COMING SOON</GradientTypography>
        <Typography
          className="date"
        >ON MARCH 2021</Typography>
        <Grid container justify="space-between" className="detail-container">
          {dateRemain.map(detail => {
            return (
              <Grid item key={detail.text}>
                <Typography className="detail-remain">{detail.remain}</Typography>
                <GradientTypography className="detail-text">{detail.text}</GradientTypography>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}
