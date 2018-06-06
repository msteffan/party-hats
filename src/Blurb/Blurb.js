import React, { Component } from 'react';
import './Blurb.css';

class Blurb extends Component {
  render() {
    return (
      <aside className="Blurb--wrapper">
        <div className="Blurb--arrow"></div>
        <p className="Blurb--text">{this.props.text}</p>
      </aside>
    );
  }
}

export default Blurb;
