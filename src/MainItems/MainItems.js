import React, { Component } from 'react';
import './MainItems.css';

class MainItems extends Component {
  render() {
    return (
      <ul className="Items--wrapper">
        <li className="Items--item">Projects</li>
        <li className="Items--item">Github</li>
        <li className="Items--item">Twitter</li>
        <li className="Items--item">Blog</li>
      </ul>
    );
  }
}

export default MainItems;
