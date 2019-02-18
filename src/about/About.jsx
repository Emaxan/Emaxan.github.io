import React, { Component } from 'react';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <img src="/static/media/logo.svg" className="about-logo" alt="logo" />
        <p className="about-text">
          This beautiful site created using ReactJS and Reactstrap.
        </p>
        <a
          className="about-link"
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

export default About;
