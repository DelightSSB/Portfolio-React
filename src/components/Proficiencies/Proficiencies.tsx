import "./Proficiencies.css";

export default function Proficiencies() {
  return (
    <section id="proficiencies" className="container">
      <h2>Proficiencies</h2>
      <div id="profLists">
        <div>
          <h3>Languages</h3>
          <div id="lstLanguages">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
              className="profimg"
              alt="Python"
              title="Python"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
              className="profimg"
              alt="Java"
              title="Java"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              className="profimg"
              alt="typescript"
              title="typescript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              className="profimg"
              alt="html"
              title="html"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              className="profimg"
              alt="css"
              title="css"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              className="profimg"
              alt="JavaScript"
              title="JavaScript"
            />
          </div>
        </div>

        <div id="frameworksCont">
          <h3>Frameworks & Libraries</h3>
          <div id="lstFrameworks">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              className="profimg"
              alt="React"
              title="React/React Native"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              className="profimg"
              alt="express"
              title="express"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              className="profimg"
              alt="nodejs"
              title="nodejs"
            />
          </div>
        </div>

        <div>
          <h3>Tools</h3>
          <div id="lstTools">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
              className="profimg"
              alt="github"
              title="github"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
              className="profimg"
              alt="mongodb"
              title="mongodb"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              className="profimg"
              alt="vscode"
              title="vscode"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              className="profimg"
              alt="figma"
              title="figma"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png"
              className="profimg"
              alt="Google Sheets"
              title="Google Sheets"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
