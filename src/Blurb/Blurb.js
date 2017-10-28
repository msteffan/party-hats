import React, { Component } from 'react';
import './Blurb.css';

class Blurb extends Component {
  render() {
    return (
      <aside className="Blurb--wrapper">
        <div className="Blurb--arrow"></div>
        <p className="Blurb--text">I'm here to build kickass front-end websites and chew bubble gum...and I'm all out of bubble gum.</p>
      </aside>
    );
  }
}

export default Blurb;
