import { ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import Navigation from './components/Navigation';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{backgroundColor: 'black'}}>
        <Navigation />
        <Typography>Hello world !</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
