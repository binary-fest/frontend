import { Container, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import FixedSocialMedia from '../components/FixedSocialMedia'
import Navigation from '../components/Navigation'
import About from '../pages/About'
import Competition from '../pages/Competition'
import Expo from '../pages/Expo'
import Home from '../pages/Home'

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  decorationContainer: {
    display: 'none',
    position: 'fixed',
    overflowY: 'hidden',
    width: '17px',
    height: '100vh',
    [breakpoints.up('sm')]: {
      display: 'flex'
    },
    top: '236px',
    left: '60px',
    [breakpoints.up('md')]: {
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
  const classes = useStyles()

  return (
    <>
      <Navigation />
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
