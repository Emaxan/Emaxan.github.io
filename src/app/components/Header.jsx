import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';
import Links from './nav';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img
              alt=""
              src="/static/media/bootstrapLogo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </NavbarBrand>
          <Nav className="mr-auto" >
          </Nav>
          <Nav navbar>
            {
              Links.map((item, i) => (
                <NavLink key={i} href={item.link}>{item.text}</NavLink>    
              ))
            }
          </Nav>
      </Navbar>
    );
  }
}

export default Header;
