import styles from "../styles/About.module.css";

function About() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>About Me</h2>

      <h4>Education</h4>
      <p>B.TECH Computer Science</p>

      <h4>Skills</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </section>
  );
}

export default About;