import React from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";

const ContactMe = () => {

  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_u9k9ax4', 'template_gnlytrf', e.target, 'user_tD8PkVFzsvwt9E0FLUf8k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }


  return (
    <div className="container contactMeForm">
      <div className="row justify-content-center">
        <div className="col-10 contactHeader">
          <h1 className="display-4 " id="projectsTitle">
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
              <p>
                <a href="mailto:henrynunez@pursuit.org">Henrynunez@pursuit.org</a>
              </p>
            </div>
            <div className="row justify-content-between logoContact">
              <div className="col-6" id="contactIcon">
                <a href={"https://www.linkedin.com/in/henrysaulnunez/"}>
                  <i className="devicon-linkedin-plain colored theSkillTwo text-center"></i>
                </a>
              </div>
              <div className="col-6" id="contactIcon">
                <a href={"https://github.com/Henrynunez112/"}>
                  <i className="devicon-github-plain colored theSkillTwo text-center"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center contactFormRow">
        <div className="col-10 contactForm">
          <form onSubmit={sendEmail}>
            <div className="row nameContactText">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="user"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  required
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
                  name="message"
                  required
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
