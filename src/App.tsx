import { ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography>Hello world !</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
