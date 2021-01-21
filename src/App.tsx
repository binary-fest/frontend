import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Navigation from './components/Navigation';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Competition from './pages/Competition';
import Expo from './pages/Expo';

const useStyles = makeStyles(({palette}) => ({
  root: {
    minHeight: '100vh',
    background: palette.gradient.main
  }
}))

function App() {
  const classes = useStyles()

  return (
    <RecoilRoot>
      <div className={classes.root}>
        <Navigation />
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
      </div>
    </RecoilRoot>
  );
}

export default App;
