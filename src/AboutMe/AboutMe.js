import React from "react";
import Typical from "react-typical";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container aboutMeContainer">
      <div className="row aboutMeRow">
        <div className="aboutMeLeftCol col-7">
          <div className="jumbotron aboutMeJumbo">
            <h3 className="display-5">Hey, my name is Henry Nuñez</h3>
            <p className="lead">
              I'm a <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  "soccer player",
                  500,
                  "volleyball player",
                  500,
                  "art aficionado",
                  500,
                  "Hodureño",
                  500,
                  "Latinx",
                  500,
                  "Black",
                  500,
                  "Garifuna",
                  500,
                  "a son of two amazing individuals",
                  500,
                  "1 of 7 kids of those amazing individuals",
                  500,
                  "authentic",
                  500,
                  "team player",
                  500,
                  "simply me",
                  500,
                ]}
              />
            </p>
          </div>
        </div>
        <div className="aboutMeRightCol col-5">
          <div class="jumbotron meJumbo"></div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
