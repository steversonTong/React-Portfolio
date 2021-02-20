import React from "react";
import "./style.css";

function Projects() {
  return (
    <div>
      <section>
        <span className="font-serif font-semibold tracking-widest text-center text-white-800 pt-1">
          My Projects
        </span>
      </section>
      <div className="row">
        <div className="col-3">
          <div className="list-group" id="list-tab" role="tablist">
            <a
              className="list-group-item list-group-item-action active"
              id="list-BABELbox-list"
              data-toggle="list"
              href="#list-BABELbox"
              role="tab"
              aria-controls="more"
            >
              BABELbox
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-BABEL-list"
              data-toggle="list"
              href="#list-BABEL"
              role="tab"
              aria-controls="BABEL"
            >
              BABEL
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-weather-list"
              data-toggle="list"
              href="#list-weather"
              role="tab"
              aria-controls="weather"
            >
              Weather Dashboard
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-note-list"
              data-toggle="list"
              href="#list-note"
              role="tab"
              aria-controls="note"
            >
              Note Taker
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-dayplanner-list"
              data-toggle="list"
              href="#list-dayplanner"
              role="tab"
              aria-controls="note"
            >
              Day Planner
            </a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="tab-content" id="nav-tabContent">
          <div
            style={{ color: "white" }}
            className="tab-pane fade show active"
            id="list-BABELbox"
            role="tabpanel"
            aria-labelledby="list-BABELbox-list"
          >
            <h2>BABELbox</h2>
            <p className="font-serif text-base sm:text-white-lg md:text-white-xl lg:text-white-2xl xl:text-white-3xl">
              BABELbox is a collection of fun games that we have cultivated for
              the best party games around. Head over to our website and choose a
              game. Create portals or join existing ones to pair up with your
              friends. Easy as that! As groups of friends, we want users to be
              able to join a game room and play against each other in rounds of
              light hearted fun.
              <br></br>
              <h6>Creation of BABEL:</h6>
              BABELbox was a group project that I contributed to. BABELbox uses
              HTML, JavaScript, Socket IO, TailWind CSS Framework,
              TailWind-Toast.js, and Twemoji as the frontent applications.
              NodeJS, Express, Handlebars, MVC Paradigm, SQL Database,
              Sequelize, and DotEnv as the backend applications. Prettier,
              ESLint, Git, Node Package Manager, and Travis CI as the
              development. With Heroku and JawsDB as its deployement
              <br></br>
              {/* <img style="border: 3px solid black;" src="images/liardemo.gif"> */}
              <br></br>
              <a
                className="link"
                href="https://babelbox.herokuapp.com"
                target="_blank"
              >
                Click Here to go to BABELbox!
              </a>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ color: "white" }}
        className="tab-pane fade"
        id="list-BABEL"
        role="tabpanel"
        aria-labelledby="list-BABEL-list"
      >
        <h2>BABEL</h2>
        <h5>Tell us what you have, we’ll tell you what’s for dinner</h5>
        <p className="font-serif text-base sm:text-white-lg md:text-white-xl lg:text-white-2xl xl:text-white-3xl">
          Everyone had the struggles of what to cook for dinner, lunch, or a
          date. We want to help those user not think too hard or struggle on
          what to make, with simple recipes that the user already have the
          ingredients for.
          <br></br>
          This program is a user friendly recipe generator for the ingredients
          you already have. This program will take in the ingredients you
          inputted and will generate recipes based on those ingredients.
          Cooking, especially those who just started, can be a daunting task;
          so, a random inspiration quote will appear each time the user search
          for a recipe.
          <br></br>
          <h6>Creation of BABEL:</h6>
          This application/ program was a group project that I contributed to.
          This application uses HTML, CSS, JavaScript, API, and JQuery. My group
          used a recipe API as this site’s primary function. We gave this recipe
          API a search query, and that API returns recipes based on that search
          query. We created this because we want to help users have an easier
          time on deciding what to cook or try new recipes. For future
          development, we will have the application to be a mobile app, have
          cuisine filters, and have a rating and review system for recipes.
          <br></br>
          {/* <img style="border: 3px solid black;" src="images/BABEL.gif"> */}
          <br></br>
          <a
            className="link"
            href="https://https-github-com-steversontong.github.io/Recipe-Generatorf/index.html"
            target="_blank"
          >
            Click Here to go to BABEL!
          </a>
        </p>
      </div>

      <div
        style={{ color: "white" }}
        className="tab-pane fade"
        id="list-weather"
        role="tabpanel"
        aria-labelledby="list-weather-list"
      >
        <h2>Weather Dashboard</h2>
        <p className="font-serif text-base sm:text-white-lg md:text-white-xl lg:text-white-2xl xl:text-white-3xl">
          User can enter a city they would like to look up and it will give them
          indept information about today's weather in that city. For the 5 next
          upcoming days, users will just be given the tempurature and humidity
          of that. Cities that users recently search will appear and they can
          click on that city again to view its information
          <br></br>
          <h6>Creation of Weather Dashboard:</h6>
          This program was a mini project that I created. This application uses
          HTML, CSS, JavaScript, API, and JQuery, with API being the primary
          functionality. The search query will run through the API and give back
          the weather of the current inputed city. I created this to give users
          a program that would give people more indebt details of how their day
          is looking, to help better plan their days better.
          <br></br>
          {/* <img style="border: 3px solid black;" src="images/weather.gif"> */}
          <br></br>
          <a
            className="link"
            href="https://steversontong.github.io/WeatherDashboard/"
            target="_blank"
          >
            Click Here to go to Weather Dashboard!
          </a>
        </p>
      </div>

      <div
        style={{ color: "white" }}
        className="tab-pane fade"
        id="list-note"
        role="tabpanel"
        aria-labelledby="list-note-list"
      >
        <h2>Note Taking</h2>
        <p className="font-serif text-base sm:text-white-lg md:text-white-xl lg:text-white-2xl xl:text-white-3xl">
          This is an application where users can capture quick thoughts, create
          checklists, sketch ideas, etc.
          <br></br>
          <h6>Creation of Note Taker:</h6>
          This program was a mini project that I created. This application uses
          HTML, CSS, JavaScript, Express, Node, and Heroku deployment. This is
          just a mini project I created to allow users to jot down notes or
          anything that comes to mind.
          <br></br>
          {/* <img style="border: 3px solid black;" src="images/notetaker.gif"> */}
          <br></br>
          <a
            className="link"
            href="https://steverson-note-taking.herokuapp.com/"
            target="_blank"
          >
            Click Here to go to Note Taker
          </a>
        </p>
      </div>

      <div
        style={{ color: "white" }}
        className="tab-pane fade"
        id="list-dayplanner"
        role="tabpanel"
        aria-labelledby="list-dayplanner-list"
      >
        <h2>Day Planner</h2>
        <p className="font-serif text-base sm:text-white-lg md:text-white-xl lg:text-white-2xl xl:text-white-3xl">
          This is an application where users can write down their todo list for
          the day. User can save and update their list and will be stored.
          <br></br>
          <h6>Creation of Day Planner:</h6>
          This program was a mini project that I created. This application uses
          HTML, CSS, JavaScript, and local storage. This is a mini project I
          created to allow users to organize their day and have something to
          reference back to.
          <br></br>
          {/* <img style="border: 3px solid black;" src="images/dayplannerdemo.gif"> */}
          <br></br>
          <a
            className="link"
            href="https://steversontong.github.io/Day-Planner/"
            target="_blank"
          >
            Click Here to go to Day Planner
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
