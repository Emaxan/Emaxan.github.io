import React, { Component } from 'react';
import SocialNetwork from 'globals/SocialNetwork';

import './Footer.scss';

class Footer extends Component {
  state = {
    Networks : [],
  }

  render() {
    if(this.state.Networks.length===0)
    {
      var request = new XMLHttpRequest();
      request.open('GET','/socials.json',true);
      request.addEventListener('readystatechange', () => {
        if ((request.readyState===4) && (request.status===200)) {
          this.setState({
            Networks : JSON.parse(request.responseText),
          });
        }
      }); 
      request.send();
    }
    var year = (new Date()).getFullYear();
    return (
    <footer>
      <div className="container">
        <div className="links">
          {
            this.state.Networks.map((item, i) => (
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
