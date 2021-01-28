import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import StaticPageLayout from './layout/StaticPage.layout';
import AOS from 'aos';

import './styles/root.css';

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
      duration: 1000
    })
  }, [])

  return (
    <RecoilRoot>
      <div className={classes.root}>
        <StaticPageLayout />
      </div>
    </RecoilRoot>
  );
}

export default App;
