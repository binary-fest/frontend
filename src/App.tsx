import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import StaticPageLayout from './layout/StaticPage.layout';
import AOS from 'aos';

import './styles/root.css';
import './styles/animation.css';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Navigation from './components/Navigation';

const useStyles = makeStyles(({palette, breakpoints}) => ({
  root: {
    minHeight: '100vh',
    background: palette.gradient.main
  }
}))

function App() {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <RecoilRoot>
      <div className={classes.root}>
        <Switch>
          <Route path="/register" exact>
            <Navigation />
            <Register />
          </Route>
          <Route path="/" component={StaticPageLayout} />
        </Switch>
      </div>
    </RecoilRoot>
  );
}

export default App;
