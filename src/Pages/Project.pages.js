import React, { Component } from 'react';
import 'App.css';
import ProjectCard from 'Components/Project-Card.component';
import { PROJECTS } from 'Constants/data';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }
  componentDidMount = () => (
    <div>
      {this.state.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
  render() {
    const mapProjects = () => {
      console.log(this.state);
      return this.state.projects.map((project) => <ProjectCard key={project.id} project={project} />);
    };

    return <div id="projects-grid">{mapProjects(this.state)}</div>;
  }
}

export default ProjectPage;
