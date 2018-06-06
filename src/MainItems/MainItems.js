import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainItems.css';

class MainItems extends Component {
  render() {
    return (
      <ul className="Items--wrapper">
        <li className="Items--item Items--item__github">
          <Link className="Items--item__github" to='/github'>Github</Link>
        </li>
        <li className="Items--item Items--item__twitter">
          <Link className="Items--item__twitter" to="/twitter">Twitter</Link>
        </li>
        <li className="Items--item Items--item__blog">
          <Link className="Items--item__bloc" to='/linkedin'>LinkedIn</Link>
        </li>
      </ul>
    );
  }
}

export default MainItems;
