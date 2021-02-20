import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "./pages/Intro/index";
import About from "./pages/About/index";
import Projects from "./pages/Projects/index";
import Skills from "./pages/Skills/index";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Intro />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
