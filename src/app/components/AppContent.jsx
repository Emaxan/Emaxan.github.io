import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from 'about/About';
import Home from 'home/Home';

import './AppContent.scss';

class AppContent extends Component {
  render() {
    return (
      <div className="AppContent">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/aboutme" component={() => (<div>About me</div>)} />
        <Route exact path="/cv" component={() => (<div>CV</div>)} />
        <Route exact path="/about" component={ About } />
        <Route path="*" component={() => (<div> 404 </div>)} />
      </Switch>
      </div>
    );
  }
}

export default AppContent;
