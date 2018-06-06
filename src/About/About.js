import React, { Component } from 'react';
import Header from "../Header/Header"
import "./About.css"

class About extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Melissa DePuydt" />
        <section className="App--intro">
          <p className="About">I'm a <span>journalist</span>, a <span>marketer</span>, a <span>teacher</span>, a <span>dog mom</span>, a <span>wife</span>.</p>
          <p className="About">Oh, and I <span>code</span>.</p>
        </section>
      </div>
    );
  }
}

export default About;
