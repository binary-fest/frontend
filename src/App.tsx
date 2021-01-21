import { ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Navigation from './components/Navigation';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <div className="App" style={{backgroundColor: 'black'}}>
          <Navigation />
          <Typography>Hello world !</Typography>
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
