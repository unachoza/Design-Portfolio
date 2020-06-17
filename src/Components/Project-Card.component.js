import React, { Components } from 'react';
import '../css/layout.css';
// import '../font';

const ProjectCard = ({ project }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     projects: PROJECTS,
  //   };
  // }
  return (
    <React.Fragment>
      <a href={project.projectLink} className="animsition-link" target="_blank">
        <div className={`portfolio-box-1 ${project.category}`}>
          <div className="mask-1"></div>
          <img src={project.imageLinks[project.imageLinks.length - 1]} alt="" />
          <h6>{project.name}</h6>
          <p>{project.category}</p>
        </div>
      </a>
    </React.Fragment>
  );
};

export default ProjectCard;

// <a href="http://susans.surge.sh/" class="animsition-link" target="">
// 		{/* // <!-- put filter category here --> */}
// 		<div class="portfolio-box-1 game">
// 			<div class="mask-1"></div>
// 			<img style="border: solid 5px black"
// 				src="https://res.cloudinary.com/dh41vh9dx/image/upload/e_grayscale,o_35/c_scale,h_140,w_230/v1546220914/susan-sarandon.jpg"
// 				alt="Susan Sarandon image representing Susan Says Game">
// 			<h6>Susan Says</h6>
// 			<p>Game</p>
// 		</div>
// 	</a>
