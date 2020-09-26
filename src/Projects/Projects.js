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
          <div className="row justify-content-center descriptionText">
            <div className="col">
              <div className="row justify-content-center">
                <div className="col-10">
                  <h3 id="descriptionHeader">Hwitter</h3>
                  <blockquote className="blockquote text-center descriptionBody">
                    <p className="mb-0">
                      A twitter inspired social media application. Build with
                      React, Bootstarp, JavaScript, Firebase, Firestore, CSS3,
                      HTML5, PostgreSQL.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="row justify-content-around descriptionFooter">
                <button className="buttonResume" id="liveLink">Live</button>
                <button className="buttonResume" id="githubLink">Git Hub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 projectJumbo">
          <img src={Hwitter} className="img-fluid" id="hwitterImg" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 projectDescription">
          <div className="row justify-content-center descriptionText">
            <div className="col">
              <div className="row justify-content-center">
                <div className="col-10">
                  <h3 id="descriptionHeader">Hwitter</h3>
                  <blockquote className="blockquote text-center descriptionBody">
                    <p className="mb-0">
                      A twitter inspired social media application. Build with
                      React, Bootstarp, JavaScript, Firebase, Firestore, CSS3,
                      HTML5, PostgreSQL.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="row justify-content-around descriptionFooter">
                <button className="buttonResume" id="liveLink">Live</button>
                <button className="buttonResume" id="githubLink">Git Hub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
