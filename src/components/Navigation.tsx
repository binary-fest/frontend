import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import NavigationResponsive from './NavigationResponsive'

const useStyles = makeStyles(({spacing, breakpoints}) => ({
  root: {
    top: spacing(2),
    position: 'absolute',
    maxWidth: 'none',
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
}))

export default function Navigation(): ReactElement {
  const [isNavigationResponsiveShow, setIsNavigationResponsiveShow] = useState(false)

  const toggleNavigationResponsive = () => setIsNavigationResponsiveShow(!isNavigationResponsiveShow)

  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <img src="/binary-fest-logo-mobile.svg" alt="Binary Fest"/>
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
      { isNavigationResponsiveShow && <NavigationResponsive toggleHandler={setIsNavigationResponsiveShow}/> }
    </Container>
  )
}
