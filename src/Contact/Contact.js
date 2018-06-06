import React, { Component } from 'react';
import MainItems from '../MainItems/MainItems.js'
import Blurb from '../Blurb/Blurb.js'
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Blurb />
        <section className="App--intro">
          <MainItems />
        </section>
      </div>
    );
  }
}

export default App;
