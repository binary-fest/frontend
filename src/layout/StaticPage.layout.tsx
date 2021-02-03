import { Container, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import FixedSocialMedia from '../components/FixedSocialMedia'
import Navigation from '../components/Navigation'
import NavigationResponsive from '../components/NavigationResponsive'
import About from '../pages/About'
import Competition from '../pages/Competition'
import Expo from '../pages/Expo'
import Home from '../pages/Home'
import Register from '../pages/Register'
import { isNavigationResponsiveShowAtom } from '../store/ui'

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  decorationContainer: {
    display: 'none',
    position: 'fixed',
    overflowY: 'hidden',
    width: '17px',
    height: '100vh',
    top: '236px',
    left: '60px',
    [breakpoints.up('md')]: {
      display: 'flex',
      left: '96px'
    }
  },
  decoration1: {
    position: 'absolute',
  }
}))

const RouteComponents = (): ReactElement => {
  const routes = [{
    path: '/',
    components: Home
  }, {
    path: '/about',
    components: About
  }, {
    path: '/competition',
    components: Competition
  }, {
    path: '/expo',
    components: Expo
  }, {
    path: '/register',
    components: Register
  }]

  return (
    <>
      {routes.map(route => (
        <Route path={route.path} exact key={route.path}>
          <route.components />
        </Route>
      ))}
    </>
  )
}

export default function StaticPageLayout(): ReactElement {
  const isNavigationResponsiveShow = useRecoilValue(isNavigationResponsiveShowAtom)
  const classes = useStyles()

  return (
    <>
      <Navigation />
      {isNavigationResponsiveShow && <NavigationResponsive />}
      <div className={classes.decorationContainer}>
        <img className={classes.decoration1} src="/decoration-1.svg" alt="decoration" />
      </div>
      <FixedSocialMedia />
      <Container>
        <Switch>
          <RouteComponents />
        </Switch>
      </Container>
    </>
  )
}
