import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import NavigationResponsive from './NavigationResponsive'

const useStyles = makeStyles(({spacing, breakpoints}) => ({
  root: {
    top: spacing(2),
    position: 'relative'
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
  }
}))

export default function Navigation(): ReactElement {
  const [isNavigationResponsiveShow, setIsNavigationResponsiveShow] = useState(false)

  const listNavigationLink = [{
    id: 1,
    name: 'Home',
    href: '/'
  }, {
    id: 2,
    name: 'About',
    href: '/'
  }, {
    id: 3,
    name: 'Kompetisi',
    href: '/'
  }, {
    id: 4,
    name: 'Expo',
    href: '/'
  }]

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
          <div className={classes.listLink}>
            {listNavigationLink.map(link => {
              return (
                <a key={link.id} href={link.href}>
                  <Typography>{link.name}</Typography>
                </a>
              )
            })}
          </div>
        </Grid>
      </Grid>
      { isNavigationResponsiveShow && <NavigationResponsive toggleHandler={setIsNavigationResponsiveShow}/> }
    </Container>
  )
}
