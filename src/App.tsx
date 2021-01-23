import { makeStyles } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import StaticPageLayout from './layout/StaticPage.layout';

const useStyles = makeStyles(({palette, breakpoints}) => ({
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
        <StaticPageLayout />
      </div>
    </RecoilRoot>
  );
}

export default App;
