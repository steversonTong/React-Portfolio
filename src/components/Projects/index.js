import React from "react";

const Projects = (props) => {
  return (
    <div>
      <button
        className="bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 shadow-2xl p-6 m-4 rounded-2xl text-2xl"
        onClick={() => {
          window.open(`${props.URL}`, "_blank");
        }}
      >
        <img
          src={props.projectimage}
          alt="project"
          className="rounded-full mb-4"
        />
        <h1>{props.name}</h1>
        <p className="text-lg m-2">{props.title}</p>
        <p className="text-lg m-2">{props.description}</p>
      </button>
    </div>
  );
};

export default Projects;
