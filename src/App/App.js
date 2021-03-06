import React, { Component } from 'react';
import Header from '../Header/Header'
import MainItems from '../MainItems/MainItems'
import Blurb from '../Blurb/Blurb'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Melissa DePuydt" />
        <Blurb text="I'm here to build kickass front-end websites and chew bubble gum...and I'm all out of bubble gum." />
        <section className="App--intro">
          <MainItems history={this.props.history} />
        </section>
      </div>
    );
  }
}

export default App;
