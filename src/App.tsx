import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Proficiencies from "./components/Proficiencies/Proficiencies";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/contactMe";
import "./App.css";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <About />
      <Proficiencies />
      <Projects />
      <ContactMe />{" "}
    </div>
  );
}

export default App;
