import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import AOS from 'aos';

import './styles/root.css';
import './styles/animation.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import StaticLayout from './layout/StaticLayout';

const RegisterLazy = React.lazy(() => import('./pages/Register'))
const AboutLazy = React.lazy(() => import('./pages/About'))
const CompetitionLazy = React.lazy(() => import('./pages/Competition'))
const SubmissionLazy = React.lazy(() => import('./pages/Submission'))
const ErrorLazy = React.lazy(() => import('./pages/404'))

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
    components: AboutLazy
  }, {
    path: '/competition',
    components: CompetitionLazy,
  }, {
    path: '/submission',
    components: SubmissionLazy
  }]

  return (
    <RecoilRoot>
      <div className={classes.root}>
        <Switch>
          <Route path="/register" exact>
            <Navigation />
            <React.Suspense fallback={null}>
              <RegisterLazy />
            </React.Suspense>
          </Route>
          {
            routes.map(route => (
              <Route path={route.path} exact key={route.path} component={() => (
                <StaticLayout>
                  <React.Suspense fallback={null}>
                    <route.components />
                  </React.Suspense>
                </StaticLayout>
              )} />
            ))
          }
          <Route component={() => (
            <StaticLayout>
              <React.Suspense fallback={null}>
                <ErrorLazy />
              </React.Suspense>
            </StaticLayout>
          )}/>
        </Switch>
      </div>
    </RecoilRoot>
  );
}

export default App;
