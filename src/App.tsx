import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Navigation from './components/Navigation';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Competition from './pages/Competition';
import Expo from './pages/Expo';
import FooterPage from './components/FooterPage';
import FixedSocialMedia from './components/FixedSocialMedia';

const useStyles = makeStyles(({palette, breakpoints}) => ({
  root: {
    minHeight: '100vh',
    background: palette.gradient.main
  },
  decoration1: {
    display: 'none',
    position: 'fixed',
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

function App() {
  const classes = useStyles()

  return (
    <RecoilRoot>
      <div className={classes.root}>
        <Navigation />
        <img className={classes.decoration1} src="/decoration-1.svg" alt="decoration"/>
        <FixedSocialMedia />
        <Container>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/competition">
              <Competition />
            </Route>
            <Route path="/expo">
              <Expo />
            </Route>
          </Switch>
        </Container>
        <FooterPage />
      </div>
    </RecoilRoot>
  );
}

export default App;
