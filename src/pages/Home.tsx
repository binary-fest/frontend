import { makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import useTitlePage from '../hooks/useTitlePage'

const useStyles = makeStyles(({breakpoints, spacing}) => ({
  hero: {
    height: '100vh',
    display: 'flex',
    '& .hero-content': {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& *': {
        textAlign: 'center'
      },
      '& img': {
        [breakpoints.up('md')]: {
          width: '225px'
        },
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
        color: '#CBCBCB',
        margin: '21px 0'
      },
      '& .tagline': {
        color: '#FFFFFF',
        fontSize: '18px',
        lineHeight: '36px'
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
  const classes = useStyles()

  return (
    <div className={classes.hero}>
      <div className="hero-content">
        <img src="/binary-fest-text-bottom.svg" alt="binary-fest"/>
        <Typography
          className="coming-soon"
        >COMING SOON</Typography>
        <Typography
          className="tagline"
        >"Future Technology to Reinforce 9th Sustainable Developement"</Typography>
      </div>
    </div>
  )
}
