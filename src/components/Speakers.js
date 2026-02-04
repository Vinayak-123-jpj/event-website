function Speakers() {
  const speakers = [
    { name: "John Doe", role: "Full Stack Developer" },
    { name: "Jane Smith", role: "Data Scientist" },
    { name: "Alex Kumar", role: "AI Engineer" },
  ];

  return (
    <div
      id="speakers"
      style={{
        padding: "60px 40px",
        background: "#f8f9fa",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "40px",
          color: "#2c3e50",
          textAlign: "center",
        }}
      >
        Speakers
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {speakers.map((speaker, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#667eea",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              {speaker.name.charAt(0)}
            </div>
            <h3
              style={{
                fontSize: "22px",
                marginBottom: "10px",
                color: "#2c3e50",
              }}
            >
              {speaker.name}
            </h3>
            <p style={{ color: "#667eea", fontSize: "16px" }}>{speaker.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
