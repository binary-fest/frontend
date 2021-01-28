import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isNavigationResponsiveShowAtom } from '../store/ui'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    paddingTop: spacing(2),
    position: 'absolute',
    maxWidth: 'none',
    zIndex: 10,
    [breakpoints.up('md')]: {
      padding: '0 96px'
    }
  },
  hamburgerIcon: {
    cursor: 'pointer',
    [breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  listLink: {
    display: 'none',
    "& *": {
      color: 'white',
      textDecoration: 'none'
    },
    width: '378px',
    [breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  containerLinkResponsive: {
    [breakpoints.up('sm')]: {
      position: 'absolute',
      left: "50%",
      transform: 'translateX(-50%)'
    }
  },
  decoration2: {
    display: 'none',
    position: 'absolute',
    right: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
    [breakpoints.up('sm')]: {
      display: 'block'
    },
    [breakpoints.up('md')]: {
      right: '66px'
    }
  },
  mobileIcon: {
    [breakpoints.up('md')]: {
      display: 'none'
    }
  },
  desktopIcon: {
    display: 'none',
    [breakpoints.up('md')]: {
      display: 'block'
    }
  }
}))

export default function Navigation(): ReactElement {
  const [isNavigationResponsiveShow, setIsNavigationResponsiveShow] = useRecoilState(isNavigationResponsiveShowAtom)

  const toggleNavigationResponsive = () => setIsNavigationResponsiveShow(!isNavigationResponsiveShow)

  const classes = useStyles()

  return (
    <Container className={classes.root} data-aos="fade-down">
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Link to="/">
            <img src="/binary-fest-logo-mobile.svg" alt="Binary Fest" className={classes.mobileIcon}/>
            <img src="/binary-fest-text-right.svg" alt="Binary Fest" className={classes.desktopIcon}/>
          </Link>
        </Grid>
        <Grid item className={classes.containerLinkResponsive}>
          <img
            className={classes.hamburgerIcon}
            src="/hamburger-icon.svg"
            alt="Binary Fest"
            onClick={toggleNavigationResponsive}
          />
        </Grid>
      </Grid>
      <img src="/decoration-2.svg" alt="decoration-2" className={classes.decoration2}/>
    </Container>
  )
}
