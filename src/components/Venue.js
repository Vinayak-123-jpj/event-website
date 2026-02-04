function Venue() {
  return (
    <div
      id="venue"
      style={{
        padding: "60px 40px",
        background: "white",
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
        Venue
      </h2>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        <div
          style={{
            padding: "30px",
            background: "#f8f9fa",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              marginBottom: "15px",
            }}
          >
            📍
          </div>
          <h3
            style={{ fontSize: "22px", marginBottom: "10px", color: "#2c3e50" }}
          >
            In-Person
          </h3>
          <p style={{ fontSize: "18px", color: "#555" }}>
            M Auditorium1, VIT Bhopal
          </p>
        </div>
        <div
          style={{
            padding: "30px",
            background: "#f8f9fa",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              marginBottom: "15px",
            }}
          >
            💻
          </div>
          <h3
            style={{ fontSize: "22px", marginBottom: "10px", color: "#2c3e50" }}
          >
            Online
          </h3>
          <p style={{ fontSize: "18px", color: "#555" }}>Zoom</p>
        </div>
      </div>
    </div>
  );
}

export default Venue;
