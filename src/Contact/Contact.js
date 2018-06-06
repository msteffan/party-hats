import React, { Component } from 'react';
import MainItems from '../MainItems/MainItems.js'
import Blurb from '../Blurb/Blurb.js'
import Header from '../Header/Header'

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Melissa DePuydt" />
        <Blurb />
        <section className="App--intro">
          <MainItems />
        </section>
      </div>
    );
  }
}

export default Contact;
