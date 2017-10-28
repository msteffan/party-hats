import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import MainItems from '../MainItems/MainItems.js'
import Blurb from '../Blurb/Blurb.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App--header">
          <div className="App--wrapper">
            <h1 className="App--title">Melissa DePuydt</h1>
            <Nav />
          </div>
        </header>
        <Blurb />
        <section className="App--intro">
          <MainItems />
        </section>
      </div>
    );
  }
}

export default App;
