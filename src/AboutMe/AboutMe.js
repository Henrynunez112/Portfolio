import React from "react";
import Typical from "react-typical";
import Henry2 from "../images/Henry2.JPG";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container aboutMeContainer">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="row justify-content-center">
            <div className="col-sm-10 aboutMeJumbo">
              <div className="row justify-content-around aboutMeHeaderRow">
                <p className="h1 text-center col-10 aboutMeHeader">
                Henry Nuñez
                </p>
              </div>
              <div className="row justify-content-center text-left aboutMeParagraphContainer">
                <div className="col-10 aboutMeP">
                  <p className="lead" id="aboutHenry">
                    I'm a passionate full-stack web developer from The Bronx,
                    NY. I love Hip Hop, puzzles, long runs, and a good
                    conversation over a couple of pints. I am always
                    looking forward to working and meeting new people.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center typistContainer">
                <p className="h4">
                  I'm also{" "}
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "a Soccer Player.",
                      700,
                      "a Volleyball Player.",
                      700,
                      "an Art Aficionado.",
                      700,
                      "un Hondureño.",
                      700,
                      "a Runner.",
                      700,
                      "a Afro-Latino.",
                      700,
                      "a Black Man.",
                      700,
                      "a Garifuna.",
                      700,
                      "inquisitive.",
                      700,
                      "a Team Player.",
                      700,
                      "a Creator.",
                      700,
                    ]}
                  />
                </p>
              </div>
              <div className="row justify-content-center aboutMeFooter">
                <p className="h4 letsWork">Let's Work Together!</p>
              </div>
              <div className="row justify-content-center bodyButtonResume">
                <button className="buttonResume">Resume</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="row justify-content-center aboutMeFirstRow">
            <div className="col meJumbo">
              <img src={Henry2} alt={"henry is smilling"} className="imgOfHenry" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col aboutMeQuote">
              <blockquote className="blockquote text-right philsQuote">
                <p className="mb-0">
                  The cowards never started and the weak died along the way.
                  That leaves us, ladies and gentlemen. Us.
                </p>
                <footer className="blockquote-footer">Phil Knight</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
