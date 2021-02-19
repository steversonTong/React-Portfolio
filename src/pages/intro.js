import React from "react";
import "./intro.css";

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
    </div>
  );
}

export default Intro;
