function Footer() {
  return (
    <div
      style={{
        padding: "40px",
        background: "#2c3e50",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>Contact Us</h3>
        <p style={{ fontSize: "16px", opacity: 0.9 }}>📧 techevent@gmail.com</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          fontSize: "16px",
        }}
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          Instagram
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          LinkedIn
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          Twitter
        </a>
      </div>
      <p style={{ marginTop: "30px", opacity: 0.7, fontSize: "14px" }}>
        © 2026 Tech Event. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
