import React, { Component } from 'react';
import {
  Navbar,
  Nav,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Links from './nav';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md">
          <div className='navbar-brand'>
            <Link to="/">
              <img
                alt=""
                src="/static/media/bootstrapLogo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Link>
          </div>
          <Nav className="mr-auto" >
          </Nav>
          <Nav navbar>
            {
              Links.map((item, i) => (
                <Link className="nav-link" key={i} to={item.link}>{item.text}</Link>    
              ))
            }
          </Nav>
      </Navbar>
    );
  }
}

export default Header;
