import React from "react";
import "./style.css";
import pfpimage from "../../assests/pfp.jpg";

function About() {
  return (
    <div className="App">
      <div id="header">
        <span className="font-serif font-semibold tracking-widest text-center text-white-800 pt-1">
          About Me
        </span>
        <br></br>
        <br></br>
        <img src={pfpimage} alt="profile" className="center" />
      </div>

      <div id="bioTextWrapper">
        <div className="px-6 py-4">
          <p className="font-serif text-base sm:text-white-lg md:text-white-xl lg:text-white-2xl xl:text-white-3xl">
            My name is Steve Tong and I am a full-stack web developer, coder,
            and software engineer. I don't have much of experience in real-world
            coding as I am in my second year of university. I am currently
            taking the Coding Boot Camp at UCI Continuing Education, where I am
            furthering my skills and experience. Although I lack any real-world
            experience in my field, I have experience in various coding
            languages and skills. I have tackle many projects in HTML, CSS,
            JavaScript, and C++. I love to work with teammates and thrive off
            their energy. My future goals and career is to become a software
            engineer. I plan to become an entrepreneur with a software or
            program I make. I am an open book that is always ready and willing
            to learn more and new things.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <h2>Contact Info</h2>
          <a
            href="https://www.linkedin.com/in/steversontong/"
            target="_blank"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/steversonTong"
            target="_blank"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            GitHub
          </a>
          <a
            href="mailto: stevetong53@yahoo.com"
            target="_blank"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
