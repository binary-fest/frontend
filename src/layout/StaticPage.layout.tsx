import { Container, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import FixedSocialMedia from '../components/FixedSocialMedia'
import FooterPage from '../components/FooterPage'
import Navigation from '../components/Navigation'
import About from '../pages/About'
import Competition from '../pages/Competition'
import Expo from '../pages/Expo'
import Home from '../pages/Home'

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  decoration1: {
    display: 'none',
    position: 'absolute',
    top: '236px',
    left: '60px',
    [breakpoints.up('sm')]: {
      display: 'flex'
    },
    [breakpoints.up('md')]: {
      left: '96px'
    }
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
      <img className={classes.decoration1} src="/decoration-1.svg" alt="decoration" />
      <FixedSocialMedia />
      <Container>
        <Switch>
          <RouteComponents />
        </Switch>
      </Container>
      <FooterPage />  
    </>
  )
}
