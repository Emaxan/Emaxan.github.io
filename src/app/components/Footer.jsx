import React, { Component } from 'react';
import SocialNetwork from '../../components/SocialNetwork';
import Networks from "./socials";

import './Footer.scss';

class Footer extends Component {
  render() {
    var year = (new Date()).getFullYear();
    return (
    <footer>
      <div className="container">
        <div className="links">
          {
            Networks.map((item, i) => (
              <SocialNetwork key={i} size={item.size} link={item.link} icon={item.icon} text={item.text}/>
            ))
          }   
        </div>
        <div>
          © 2018-{year} Maxim Ermoshyn.
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;
