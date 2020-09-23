import React from "react";
import { NavLink } from "react-router-dom";
import Typical from "react-typical";
import Henry2 from "../images/Henry2.JPG";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container aboutMeContainer">
      <div className="row aboutMeRow">
        <div className="col-7 aboutMeJumbo">
          <div className="row aboutMeHeaderRow">
            <h1 className="display-4 aboutMeHeader">Hey, I'm Henry Nuñez</h1>
            <p className="h1 iAm">
              I'm also a{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Soccer Player",
                  500,
                  "Volleyball Player",
                  500,
                  "Art Aficionado",
                  500,
                  "Hondureño",
                  500,
                  "Runner",
                  500,
                  "Afro-Latinx",
                  500,
                  "Black Man",
                  500,
                  "Garifuna",
                  500,
                  "Authentic",
                  500,
                  "Team Player",
                  500,
                  "Creator",
                  500,
                ]}
              />
            </p>
          </div>
          <div className="row bodyButtonResume">
            <button className="buttonResume">Resume</button>
          </div>
        </div>
        <div className="col-5 meJumbo">
          <img
            src={Henry2}
            alt={"henry is smilling"}
            class="img-thumbnail imgOfHenry"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
