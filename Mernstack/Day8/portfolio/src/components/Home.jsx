import { useState } from "react";
import "./Home.css";

function Home() {
  const [mode, setMode] = useState("blue");

  return (
    <section className={`home ${mode}`}>
      <div className="home-content">
        <h1 className="main-heading">
          Hi, I'm Sachin <span className="wave">👋</span>
        </h1>

        <h3>Frontend Developer</h3>

        <p>
          I build interactive and modern web applications using React.
        </p>

        <button
          className="mode-btn"
          onClick={() =>
            setMode(mode === "blue" ? "pink" : "blue")
          }
        >
          {mode === "blue" ? "Pink Mode 🌸" : "Blue Mode 💙"}
        </button>
      </div>
    </section>
  );
}

export default Home;