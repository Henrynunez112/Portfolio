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
              I'm also{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "a Soccer Player.",
                  500,
                  "a Volleyball Player.",
                  500,
                  "a Art Aficionado.",
                  500,
                  "a Hondureño.",
                  500,
                  "a Runner.",
                  500,
                  "a Afro-Latinx.",
                  500,
                  "a Black Man.",
                  500,
                  "a Garifuna.",
                  500,
                  "an Authentic.",
                  500,
                  "a Team Player.",
                  500,
                  "a Creator.",
                  500,
                ]}
              />
            </p>
          </div>
          <div className="row bodyButtonResume">
            <button className="buttonResume">Resume</button>
          </div>
          <div className="row aboutMeParagraph">
            <p>
              I'm a passionate full-stack web developer from The Bronx, NY. I love
              Hip Hop, puzzles, a long run, and a good conversation over a
              couple of pints of beers. I am always looking forward to working
              and meeting people.
            </p>
            <p className="h4 letsWork">Let's Work Together!</p>
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
