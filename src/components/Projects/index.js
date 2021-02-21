import React from "react";

const styles = {
  img: "object-cover rounded-full mt-20",
  h3: "text-4xl uppercase text-green-400 tracking-tight font-bold mt-7 mb-1",
  h4: "text-white text-base tracking-tight font-light mb-1 italic",
  summary: "summary text-lg pb-6 leading-7 font-normal text-white",
  button:
    "mr-4 pb-1 pt-2 px-2 text-lg  text-gray-800 border-b-2 border-green-400 font-medium hover:bg-transparent hover:bg-green-400 hover:rounded-sm hover:text-white transition duration-200 ease-in-out transform hover:-translate-y-1",
  link: "ml-2 font-normal",
};

const Project = (props) => {
  return (
    <div className="project grid grid-cols-2 gap-2 mb-10">
      <a
        className={props.classTitle}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectImage">
          <img className={styles.img} src={props.src} alt={props.classTitle} />
        </div>
      </a>
      <div className="projectDesc text-left ml-0 mt-12">
        <div className="projectTitle">
          <h3 className={styles.h3}>{props.title}</h3>
          <h4 className={styles.h4}>{props.tools}</h4>
          <p className={styles.summary}>{props.summary}</p>
          <div className="buttons flex flex-wrap">
            <a
              className={styles.button}
              href={props.repoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
            <a
              className={styles.button}
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to {props.title}!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
