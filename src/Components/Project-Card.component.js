import React, { Components } from 'react';
import { PROJECTS } from 'Constants/data.js';
class ProjectCard extends Components {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }
  render() {
    return (
      <div className="Header__container">
        <header className="Header__header">Header</header>
      </div>
    );
  }
}

export default ProjectCard;
