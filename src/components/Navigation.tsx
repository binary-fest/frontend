import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import NavigationResponsive from './NavigationResponsive'

const useStyles = makeStyles(({spacing}) => ({
  root: {
    top: spacing(2),
    position: 'relative'
  },
  hamburgerIcon: {
    cursor: 'pointer'
  }
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
        <Grid item>
          <img
            className={classes.hamburgerIcon}
            src="/hamburger-icon.svg"
            alt="Binary Fest"
            onClick={toggleNavigationResponsive}
          />
        </Grid>
      </Grid>
      { isNavigationResponsiveShow && <NavigationResponsive toggleHandler={setIsNavigationResponsiveShow}/> }
    </Container>
  )
}
