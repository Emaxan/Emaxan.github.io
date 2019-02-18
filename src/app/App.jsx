import React, { Component } from 'react';
import Components from './components';

import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Components.Header/>
        <Components.AppContent/>
        <Components.Footer/>
      </React.Fragment>
    );
  }
}

export default App;
