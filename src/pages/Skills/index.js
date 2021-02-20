import React from "react";
// import Sphere from "../../components/Sphere";
import "./style.css";

function Skills() {
  return (
    <div>
      <div className="textsec">
        <span className="font-serif font-semibold tracking-widest text-center text-white-800 pt-1">
          Skills and Experiences
        </span>
        <p
          style={{ color: "white" }}
          className="font-serif text-base sm:text-white-lg md:text-white-xl lg:text-white-2xl xl:text-white-3xl"
        >
          <br></br>I am a full-stack web developer, able to tackle projects from
          front-end to back-end!
          <br></br>
          My skills and experience includes: HTML, CSS, Javascript, Bootstrap,
          Tailwindcss, Node, mySQL, Express, Git, C++, C#, UX, UI, Handlebars
          <br></br>I love working in teams, and thrive to learn from my
          teammates and help them!
        </p>
      </div>

      <section id="spheresec">
        <canvas id="canvas">{/* <Sphere /> */}</canvas>
      </section>
    </div>
  );
}

export default Skills;
