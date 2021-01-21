import { makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Navigation from './components/Navigation';
import theme from './theme';

const useStyles = makeStyles(({palette}) => ({
  root: {
    minHeight: '100vh',
    background: palette.gradient?.main
  }
}))

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <div className={classes.root} style={{backgroundColor: 'black'}}>
          <Navigation />
          <Typography>Hello world !</Typography>
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
