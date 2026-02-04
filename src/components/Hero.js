function Hero() {
  return (
    <div
      style={{
        padding: "80px 40px",
        textAlign: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
      }}
    >
      <h1
        style={{ fontSize: "48px", marginBottom: "20px", fontWeight: "bold" }}
      >
        Welcome to Tech Event 2026
      </h1>
      <p style={{ fontSize: "20px", marginBottom: "30px", opacity: 0.9 }}>
        Join us for an amazing tech experience
      </p>
      <button
        style={{
          padding: "15px 40px",
          fontSize: "18px",
          background: "white",
          color: "#667eea",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Register Now
      </button>
    </div>
  );
}

export default Hero;
