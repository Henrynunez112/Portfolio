import React from "react";
import Hwitter from "../images/Hwitter.png";
import Roadie from "../images/Roadie.png";
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
      <div className="row justify-content-center firstProject">
        <div className="col-md-7 col-lg-7">
          <div className="row justify-content-center">
            <div className="col-10 projectJumbo">
              <img src={Hwitter} alt="screenshot of Hwitter" className="img-fluid" id="hwitterImg" />
            </div>
          </div>
          <div className="row justify-content-around descriptionFooter">
            <div className="col">
              <button className="buttonResume" id="liveLink">
                Live
              </button>
            </div>
            <div className="col">
              <button className="buttonResume" id="githubLink">
                Git Hub
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="row justify-content-center">
            <div className="col-10 projectDescription">
              <div className="row justify-content-center descriptionText">
                <div className="col">
                  <div className="row justify-content-center">
                    <div className="col-10">
                      <h3 id="descriptionHeader">Hwitter</h3>
                      <blockquote className="blockquote text-center descriptionBody">
                        <p className="mb-0">
                          A twitter inspired social media application. Build
                          with React, Bootstarp, JavaScript, Firebase,
                          Firestore, CSS3, HTML5, PostgreSQL.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center secondProject">
        <div className="col-md-7">
          <div className="row justify-content-center">
            <div className="col-10 projectJumbo">
              <img src={Roadie} className="img-fluid" alt="screenshot of Roadie" id="roadieImg" />
            </div>
          </div>
          <div className="row justify-content-around descriptionFooter">
            <div className="col">
              <button className="buttonResume" id="liveLink">
                Live
              </button>
            </div>
            <div className="col">
              <button className="buttonResume" id="githubLink">
                Git Hub
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row justify-content-center">
            <div className="col-10 projectDescription">
              <div className="row justify-content-center descriptionText">
                <div className="col">
                  <div className="row justify-content-center">
                    <div className="col-10">
                      <h3 id="descriptionHeader">Roadie</h3>
                      <blockquote className="blockquote text-center descriptionBody">
                        <p className="mb-0">
                          A booking and event planning application that provides
                          access to book your favorite local artist to perform
                          at your next event. Build with React, Redux,
                          Bootstarp, JavaScript, Firebase, Firestore, CSS3,
                          HTML5, PostgreSQL, noSQL.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
