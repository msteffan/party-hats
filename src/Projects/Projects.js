import React, { Component } from 'react';
import Header from '../Header/Header'
import Blurb from '../Blurb/Blurb'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Melissa DePuydt" />
        <Blurb text="I've worked on a variety of projects throughout my career." />
        <section className="App--intro">
          {/* <Project /> */}
        </section>
      </div>
    );
  }
}

export default App;
