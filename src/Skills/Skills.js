import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container wholeSkillsContainer">
      <div className="row justify-content-center skillsHeader">
        <div className="col-10 headerSkills">
          <h1 className="display-4 " id="projectsTitle">
            <span id="initials">S</span>kills
          </h1>
        </div>
      </div>
      <div className="col skillsContent">
        <div className="row justify-content-center firstThree">
          <div className="col-md-10 justify-content-between firstThreeContainer">
            <div className="row individualSkills justify-content-around">
              <div className="col skillsContainer js">
                <div className="row imgOfSkill">
                  <div className="col-8 imgContent">
                    <i className="devicon-javascript-plain colored theSkill text-center"></i>
                  </div>
                </div>
                <div className="row justify-content-center skillName">
                  <p className="mb-0 text-center">JavaScript</p>
                </div>
              </div>
            </div>
            <div className="row individualSkills justify-content-center">
              <div className="col skillsContainer">
                <div className="row imgOfSkill">
                  <div className="col-8 imgContent">
                    <i className="devicon-css3-plain colored theSkill text-center"></i>
                  </div>
                </div>
                <div className="row justify-content-center skillName">
                  <p className="mb-0 text-center">CSS</p>
                </div>
              </div>
            </div>
            <div className="row individualSkills justify-content-center">
              <div className="col skillsContainer">
                <div className="row imgOfSkill">
                  <div className="col-8 imgContent">
                    <i className="devicon-html5-plain colored theSkill text-center"></i>
                  </div>
                </div>
                <div className="row justify-content-center skillName">
                  <p className="mb-0 text-center">HTML</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center secondThree">
          <div className="col-md-10 justify-content-between firstThreeContainer">
            <div className="row individualSkills justify-content-center">
              <div className="col skillsContainer">
                <div className="row imgOfSkill">
                  <div className="col-8 imgContent">
                    <i className="devicon-git-plain colored theSkill text-center"></i>
                  </div>
                </div>
                <div className="row justify-content-center skillName">
                  <p className="mb-0 text-center">Git</p>
                </div>
              </div>
            </div>
            <div className="row individualSkills justify-content-center">
              <div className="col skillsContainer">
                <div className="row imgOfSkill">
                  <div className="col-8 imgContent">
                    <i className="devicon-react-original colored theSkill text-center"></i>
                  </div>
                </div>
                <div className="row justify-content-center skillName">
                  <p className="mb-0 text-center">React</p>
                </div>
              </div>
            </div>
            <div className="row individualSkills justify-content-center">
              <div className="col skillsContainer">
                <div className="row imgOfSkill">
                  <div className="col-8 imgContent">
                    <i className="devicon-postgresql-plain colored theSkill text-center"></i>
                  </div>
                </div>
                <div className="row justify-content-center skillName">
                  <p className="mb-0 text-center">PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center thirdThree">
          <div className="col-md-10 justify-content-between firstThreeContainer">
            <div className="row individualSkills justify-content-center">
              <div className="col skillsContainer">
                <div className="row imgOfSkill">
                  <div className="col-8 imgContent">
                    <i className="devicon-nodejs-plain colored theSkill text-center"></i>
                  </div>
                </div>
                <div className="row justify-content-center skillName">
                  <p className="mb-0 text-center">Node</p>
                </div>
              </div>
            </div>
            <div className="row individualSkills justify-content-center">
              <div className="col skillsContainer">
                <div className="row imgOfSkill">
                  <div className="col-8 imgContent">
                    <i className="devicon-express-original colored theSkill text-center"></i>
                  </div>
                </div>
                <div className="row justify-content-center skillName">
                  <p className="mb-0 text-center">Express</p>
                </div>
              </div>
            </div>
            <div className="row individualSkills justify-content-center">
              <div className="col skillsContainer bootstrap">
                <div className="row imgOfSkill">
                  <div className="col-8 imgContent">
                    <i className="devicon-bootstrap-plain colored theSkill text-center"></i>
                  </div>
                </div>
                <div className="row justify-content-center skillName">
                  <p className="mb-0 text-center">Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
