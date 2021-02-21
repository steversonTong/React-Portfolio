import Project from "../../components/Projects";

const styles = {
  title: "title justify-center",
  h2: "text-green-400 text-5xl tracking-tight font-bold mt-7 m-5",
  h3: "text-3xl tracking-tight font-medium pb-7",
  paragraph: "text-lg pb-6 leading-7 text-black",
  description:
    "description bg-gray-100 opacity-80 py-7 px-10 text-center rounded-sm",
};

const Projects = () => {
  return (
    <div className="projects flex w-full h-full pt-20 -mt-28 pb-28 mb-28 px-72 items-center z-10">
      <article className="mx-32 w-full" id="work">
        <div className={styles.title}>
          <h2 className={styles.h2} id="projects">
            My Projects
          </h2>
        </div>
        <Project
          classTitle="babelbox"
          href="http://babelbox.herokuapp.com/"
          src="https://github.com/steversonTong/React-Portfolio/blob/main/src/assests/liardemo.gif?raw=true"
          icons=""
          title="BABELbox"
          tools="Built using Node, Express, Tailwindcss, Handlebars, MySQL, and Heroku."
          summary="BABELbox is a collection of fun games that the BABEL team is actively cultivating. This is a full stack application that follows the MVC paradigm in its architectural structure."
          repoHref="https://github.com/https-github-com-steversonTong/BabelBox"
        />
        <Project
          classTitle="babel-recipe-generator"
          href="https://https-github-com-steversontong.github.io/Recipe-Generatorf/"
          src="https://github.com/steversonTong/React-Portfolio/blob/main/src/assests/BABEL.gif?raw=true"
          icons=""
          title="BABEL Recipe Generator"
          tools="Built using TailwindCSS, jQuery, and Node."
          summary="A web app that allows users to choose ingredients to generate recipes. Recipes are called from the Edamame API and prioritized based off of how many user-chosen ingredients they contain."
          repoHref="https://github.com/https-github-com-steversonTong/Recipe-Generatorf"
        />
      </article>
    </div>
  );
};

export default Projects;
