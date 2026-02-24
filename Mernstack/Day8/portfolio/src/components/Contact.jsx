import { useState } from "react";

function Contact() {
  const [clicked, setClicked] = useState(false);

  return (
    <section>
      <h2 style={{ color: "#00f7ff" }}>Contact Me</h2>

      <p>Email: sachin@email.com</p>
      <p>Phone: 9876543210</p>

      <button
        onClick={() => setClicked(true)}
        style={{
          padding: "12px 25px",
          background: "#00f7ff",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          marginTop: "15px",
          textAlign : "center"
        }}
      >
        Send Message
      </button>

      {clicked && (
        <p style={{ marginTop: "15px", color: "#ff0080" }}>
          🚀 Message Sent Successfully!
        </p>
      )}
    </section>
  );
}

export default Contact;