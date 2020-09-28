import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./NavBar/NavBar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import Toaster from './Toaster/Toaster'
import { Route, Switch } from "react-router-dom";
import "./App.css";

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
  
      <Toaster />
    </div>
  );
}

export default App;
