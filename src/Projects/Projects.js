import React from "react";
import Hwitter from "../images/Hwitter.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container projectsContainer">
      <div className="row justify-content-center projectsHeader">
        <div className="col-10 headerProjects">
          <h1 class="display-4">
            <span id="initials">P</span>rojects
          </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 projectJumbo">
          <img src={Hwitter} className="img-fluid" id="hwitterImg" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 projectDescription">
          <div className="row justify-content-start descriptionText">
            <blockquote className="blockquote text-right">
                
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
            
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
