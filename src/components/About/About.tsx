import "./About.css";
import profileImg from "../../assets/50407334_85201_0148_Large.jpg";

export default function About() {
  return (
    <section id="about" className="container">
      <img src={profileImg} alt="Photo of JaZir" />
      <h2>JaZir Monté Simon</h2>
      <h3>Software and Systems Developer</h3>
      <h4 className="intro">
        Hello! I'm JaZir Monté Simon - A full-stack web developer with a passion
        for building sleek, responsive, and understandable web applications
      </h4>

      <p className="details">
        I’m a recent Computer Science graduate with a strong commitment to
        building and maintaining user-focused, scalable software solutions. I’m
        proficient in multiple programming languages and have hands-on
        experience with both React framework and Node.js runtime. I have a
        considerable understanding of relational (SQL) and non-relational (NoSQL)
        databases. Known for my leadership potential, collaborative mindset, and
        problem-solving abilities, I’m seeking a Software Engineer or Web
        Developer role where I can grow professionally and contribute to
        meaningful, impactful projects.
      </p>
    </section>
  );
}
