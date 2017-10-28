import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav--wrapper">
        <ul className="Nav">
          <li className="Nav--item">Home</li>
          <span className="Nav--separator">|</span>
          <li className="Nav--item">About</li>
          <span className="Nav--separator">|</span>
          <li className="Nav--item">Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
