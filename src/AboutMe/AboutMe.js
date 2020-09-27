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
              <div className="row justify-content-center aboutMeHeaderRow">
                <p className="h1 text-center col-10 aboutMeHeader">
                  Hey, I'm Henry Nuñez
                </p>
              </div>
              <div className="row justify-content-center typistContainer">
                <p className="lead">
                  I'm also{" "}
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "a Soccer Player.",
                      500,
                      "a Volleyball Player.",
                      500,
                      "an Art Aficionado.",
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
              <div className="row justify-content-center text-left aboutMeParagraphContainer">
                <div className="col-10 aboutMeP">
                  <p clasName="lead" id="aboutHenry">
                    I'm a passionate full-stack web developer from The Bronx,
                    NY. I love Hip Hop, puzzles, a long run, and a good
                    conversation over a couple of pints of beers. I am always
                    looking forward to working and meeting people.
                  </p>
                </div>
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
              <img src={Henry2} alt={"henry is smilling"} class="imgOfHenry" />
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
