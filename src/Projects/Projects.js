import React, { Component } from 'react';
import Header from '../Header/Header';
import Project from '../Project/Project';
import projectData from "../projects-data"

class Projects extends Component {
  state = {
    projects : projectData
  }

  render() {
    return (
      <div className="App">
        <Header title="Melissa DePuydt" />
        <section className="App--intro">
          {Object.keys(this.state.projects)
              .map(key =>
                <Project key={key}
                details={this.state.projects[key]}
                index={key}
              />)}
        </section>
      </div>
    );
  }
}

export default Projects;
