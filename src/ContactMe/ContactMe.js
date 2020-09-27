import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="container contactMeForm">
      <div className="row justify-content-center">
        <div className="col-10 contactHeader">
          <h1>
            <span id="initials">C</span>ontact
          </h1>
        </div>
      </div>
      <div className="row justify-content-center contactBodyRow">
        <div className="col-10 contactBodyDiv">
            <div className="row justify-content-center">
                <div className="col-10 contactHeaderTouch">
                    <h2>Get in touch</h2>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-10 emailContact text-center">
                    <p><a>Henrynunez@pursuit.org</a></p>
                </div>
            <div className="row justify-content-between logoContact">
                <div className="col-6">
                <i className="devicon-linkedin-plain colored theSkillTwo text-center"></i>
                </div>
                <div className="col-6">
                <i className="devicon-github-plain colored theSkillTwo text-center"></i>
                </div>
            </div>
            </div>
        </div>
      </div>
      <div className="row justify-content-center contactFormRow">
        <div className="col-10 contactForm">
          <form>
            <div className="row nameContactText">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col buttonContact">
              <button className="buttonResume">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
