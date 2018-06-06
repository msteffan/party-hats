import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav--wrapper">
        <ul className="Nav">
          <li className="Nav--item">
            <Link to="/">Home</Link>
          </li>
          <span className="Nav--separator">|</span>
          <li className="Nav--item">
            <Link to="/projects">Projects</Link>
          </li>
          <span className="Nav--separator">|</span>
          <li className="Nav--item">
            <Link to="/about">About</Link>
          </li>
          <span className="Nav--separator">|</span>
          <li className="Nav--item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
