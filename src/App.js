import React from "react";
import NavBar from "./NavBar/NavBar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
        <AboutMe />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
