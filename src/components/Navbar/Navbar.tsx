import "./Navbar.css";

export default function Navbar() {
  return (
    <header id="header">
      <nav className="nav">
        <h1>
          <a href="#top" id="meet">
            Meet JaZir
          </a>
        </h1>
        <ul>
          <li>
            <a href="#proficiencies">Proficiencies</a>
          </li>
          <li>
            <a href="#projects">Previous Work Experience</a>
          </li>
          <li>
            <a href="#contact">Resume & Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
