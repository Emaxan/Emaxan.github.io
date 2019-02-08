import React, { Component } from 'react';

import './AppContent.scss';

class AppContent extends Component {
  render() {
    return (
      <div className="AppContent">
        <img src="/static/media/logo.svg" className="App-logo" alt="logo" />
        <p>
          This beautiful site created using ReactJS.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default AppContent;
