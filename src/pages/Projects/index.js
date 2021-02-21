import React from "react";
import "./style.css";
import Project from "../../components/Projects";

function Projects() {
  return (
    <div>
      <span className="font-serif font-semibold tracking-widest text-center text-white-800 pt-1">
        My Projects
      </span>
      <Project
        URL="https://babelbox.herokuapp.com"
        projectimage=""
        title="BABELbox"
        description="BABELbox is a collection of fun games that we have cultivated for the best party games around.
              Head over to our website and choose a game. Create portals or join existing ones to pair up with your friends. Easy as that!
              As groups of friends, we want users to be able to join a game room and play against each other in rounds of light hearted fun.

              Creation of BABEL:
              BABELbox was a group project that I contributed to. 
              BABELbox uses HTML, JavaScript, Socket IO, TailWind CSS Framework, TailWind-Toast.js, and Twemoji as the frontent applications.              
              NodeJS, Express, Handlebars, MVC Paradigm, SQL Database, Sequelize, and DotEnv as the backend applications.
              Prettier, ESLint, Git, Node Package Manager, and Travis CI as the development.
              With Heroku and JawsDB as its deployement"
      />
    </div>
  );
}

export default Projects;
