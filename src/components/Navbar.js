function Navbar() {
  return (
    <nav
      style={{
        padding: "20px 40px",
        background: "#2c3e50",
        color: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "24px", fontWeight: "bold" }}>
        Tech Event 2026
      </span>
      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="#speakers" style={{ color: "white", textDecoration: "none" }}>
          Speakers
        </a>
        <a href="#schedule" style={{ color: "white", textDecoration: "none" }}>
          Schedule
        </a>
        <a href="#register" style={{ color: "white", textDecoration: "none" }}>
          Register
        </a>
        <a href="#venue" style={{ color: "white", textDecoration: "none" }}>
          Venue
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
