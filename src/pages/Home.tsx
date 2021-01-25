import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import useTitlePage from '../hooks/useTitlePage'
import { navigationLinks } from '../store/links'

const useStyles = makeStyles(({breakpoints, spacing}) => ({
  hero: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '& .hero-content': {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& *': {
        textAlign: 'center'
      },
      '& .binary-fest-logo': {
        [breakpoints.up('md')]: {
          width: '225px'
        },
      },
      '& .arrows-down': {
        position: 'relative',
        top: '79px',
        [breakpoints.up('sm')]: {
          display: 'none'
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
        lineHeight: '36px',
        [breakpoints.up('sm')]: {
          width: '388px'
        }
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
  },
  footer: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: '20px 20px 0 0',
    padding: '42px 36px',
    marginTop: '79px',
    '& h3': {
      color: 'white'
    },
    '& .footer-link': {
      color: 'white',
      textDecoration: 'none',
      marginTop: '56px',
      display: 'block'
    }
  }
}))

export default function Home(): ReactElement {
  useTitlePage("BinaryFest 2021")
  const links = useRecoilValue(navigationLinks)

  const classes = useStyles()

  return (
    <>
      <div className={classes.hero}>
        <div className="hero-content">
          <img src="/binary-fest-text-bottom.svg" className="binary-fest-logo" alt="binary-fest"/>
          <Typography
            className="coming-soon"
          >COMING SOON</Typography>
          <Typography
            className="tagline"
          >"Future Technology to Reinforce 9th Sustainable Developement"</Typography>
          <img src="/arrows-down.svg" className="arrows-down" alt="arrows down"/>
        </div>
      </div>
      <div className={classes.footer}>
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="h3"
              align="center"
            >Want to Be The First BinaryFest Participant ?</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              {links.map((link) => {
                return (
                  <Grid item key={link.id}>
                    <Link to={link.href} className="footer-link">
                      <Typography>{link.name}</Typography>
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
