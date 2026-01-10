import "./Projects.css";
import AetherNotes from "../../assets/AetherNotes.png";
import AICompanion from "../../assets/AI-Companion Image.png";
import ToDo from "../../assets/ToDo-List.png";
import CrudAPI from "../../assets/CRUD API.png"

export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <a
            href="https://github.com/DelightSSB/AetherNotes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AetherNotes}
              alt="Screenshot of Project 1"
              className="poster"
            />
          </a>
          <h3>AetherNotes</h3>
          <div className="project-tech-stack">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              title="JavaScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              alt="React"
              title="React Native"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="express"
              title="express"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              title="nodejs"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              title="mongodb"
            />
          </div>
          <p>
            AetherNotes is an A.I. summarization app that my team made for our
            2025 Capstone class. Features include notes summarization, local
            storage saving, ai context response, and chat creation/deletion.
            More info on the GitHub
          </p>
        </div>

        <div className="project-card">
          <a
            href="https://delightssb.github.io/ToDo-List/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ToDo}
              alt="Screenshot of ToDo List App"
              className="poster"
            />
          </a>
          <h3>ToDo List</h3>
          <div className="project-tech-stack">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              alt="html"
              title="html"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              alt="css"
              title="css"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              title="JavaScript"
            />
          </div>
          <p>
            A simple todo list website meant for basic HTML, CSS, and JavaScript
            practice
          </p>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/DelightSSB/AI-Companion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AICompanion}
              alt="Screenshot of AI-Companion application"
              className="poster"
            />
          </a>
          <h3>My AI Heart</h3>
          <div className="project-tech-stack">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              alt="html"
              title="html"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              alt="css"
              title="css"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              title="JavaScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="express"
              title="express"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              title="nodejs"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              title="mongodb"
            />
          </div>
          <p>
            Current W.I.P project that's a customizable AI companion chatbox.
            Main feature is being able to create an ai girlfriend/boyfriend
            who's personality can be customized to your liking.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/DelightSSB/CRUD-API-START"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={CrudAPI}
              alt="Screen shot of CRUD A-P-I Github"
              className="poster"
            />
          </a>
          <h3>Beginner CRUD API</h3>
          <div className="project-tech-stack">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
              alt="typescript"
              title="typescript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="express"
              title="express"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              alt="Node.js"
              title="Node.js"
            />
          </div>
          <p>
            A simple foundational CRUD API. Made as proof of understanding and generic practice of RESTful API routes
            and practice.
          </p>
        </div>
      </div>
    </section>
  );
}
