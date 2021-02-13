import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import AOS from 'aos';

import './styles/root.css';
import './styles/animation.css';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Navigation from './components/Navigation';
import ErrorPage from './pages/404';
import Home from './pages/Home';
import About from './pages/About';
import Competition from './pages/Competition';
import Webinar from './pages/Webinar';
import StaticLayout from './layout/StaticLayout';
import RegisterWebinar from './pages/RegisterWebinar';

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
    path: '/webinar',
    components: Webinar
  }, {
    path: '/webinar/register',
    components: RegisterWebinar
  }]

  return (
    <RecoilRoot>
      <div className={classes.root}>
        <Switch>
          <Route path="/register" exact>
            <Navigation />
            <Register />
          </Route>
          {
            routes.map(route => (
              <Route path={route.path} exact key={route.path} component={() => (
                <StaticLayout>
                  <route.components />
                </StaticLayout>
              )} />
            ))
          }
          <Route component={() => (
            <StaticLayout>
              <ErrorPage />
            </StaticLayout>
          )}/>
        </Switch>
      </div>
    </RecoilRoot>
  );
}

export default App;
