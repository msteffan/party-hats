import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  render() {
    const details = this.props.details;

    return (
      <article className="Project">
        <div>
          <h3 className="Project--Title">{details.name}</h3>
          <p className="Project--Desc">{details.desc}</p>
          {/* Only show the button if the project has been launched */}
          {details.status === "live" ? <button className="Project--Button">View Live</button> : ""}
        </div>
        <div>
          <h3 className="Project--Title Project--Title__result">The Result</h3>
          <img className="Project--Image" src={details.image} alt={details.nae} />
        </div>
      </article>
    );
  }
}

export default Project;
