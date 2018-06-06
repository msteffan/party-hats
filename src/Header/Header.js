import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'

class Header extends Component {
  render () {
    return (
      <header className="App--header">
        <div className="App--wrapper">
          <h1 className="App--title">{this.props.title}</h1>
          <Nav />
        </div>
      </header>
    )
  }
}

export default Header;
