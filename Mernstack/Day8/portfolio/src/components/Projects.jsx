import { useState } from "react";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      name: "Podcast Website",
      description: "Modern React podcast platform."
    },
    {
      name: "Smart Soil Monitor",
      description: "IoT based agriculture monitoring system."
    },
    {
      name: "Portfolio Website",
      description: "Personal animated portfolio using React."
    }
  ];

  return (
    <section>
      <h2 style={{ color: "#00f7ff" }}>My Projects</h2>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "20px",
            margin: "20px auto",
            width: "60%",
            borderRadius: "15px",
            transition: "0.3s",
            cursor: "pointer",
          }}
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          <h3>{project.name}</h3>

          {activeIndex === index && (
            <p style={{ marginTop: "10px" }}>
              {project.description}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;