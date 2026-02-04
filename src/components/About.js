function About() {
  return (
    <div
      id="about"
      style={{
        padding: "60px 40px",
        maxWidth: "800px",
        margin: "0 auto",
        background: "white",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          color: "#2c3e50",
          borderBottom: "3px solid #667eea",
          paddingBottom: "10px",
          display: "inline-block",
        }}
      >
        About The Event
      </h2>
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#555",
          marginTop: "20px",
        }}
      >
        Tech Event 2026 brings developers together to learn modern technologies,
        share ideas, and network with professionals.
      </p>
    </div>
  );
}

export default About;
