import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import AppContent from './components/AppContent';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <AppContent/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
