import React from "react";
import "./intro.css";
import introimage from "../assests/intro.jpg";

function Intro() {
  return (
    <div>
      <section>
        <span
          className="font-serif font-semibold tracking-widest"
          id="steveTitle"
        >
          Hello,<br></br>
          I'm Steve Tong,<br></br>
          full-stack web developer
        </span>

        <p className="font-serif text-base" id="steveDetail">
          <br></br>
          Innovative thinker to solve Data Structures and Algorithms
        </p>
      </section>
      <img
        src={introimage}
        alt="intro"
        className="center"
        style={{
          width: 500,
          height: 500,
          borderRadius: 30,
          marginLeft: "62%",
          marginTop: "-20%",
        }}
      />
    </div>
  );
}

export default Intro;
