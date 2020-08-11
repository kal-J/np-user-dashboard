import React from 'react';
import { Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import './App.css';
import Home from './pages/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#008000',
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <SideBar />
      <Home />
    </MuiThemeProvider>
  );
};

export default App;
