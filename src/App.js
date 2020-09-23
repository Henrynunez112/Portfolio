import React from "react";
import NavBar from "./NavBar/NavBar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <AboutMe />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/contact">
        <ContactMe />
      </Route>
    </div>
  );
}

export default App;
