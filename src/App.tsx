import { makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Navigation from './components/Navigation';
import theme from './theme';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    background: "radial-gradient(312.96% 312.96% at 109.41% -262.96%, #780031 13.16%, #100E17 100%)"
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
