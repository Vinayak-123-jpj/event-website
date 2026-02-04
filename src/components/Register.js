function Register() {
  return (
    <div
      id="register"
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
        Register
      </h2>
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <input
          placeholder="Your Name"
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "16px",
            border: "2px solid #e0e0e0",
            borderRadius: "5px",
            marginBottom: "20px",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#667eea")}
          onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
        />
        <input
          placeholder="Email"
          type="email"
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "16px",
            border: "2px solid #e0e0e0",
            borderRadius: "5px",
            marginBottom: "30px",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#667eea")}
          onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
        />
        <button
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "18px",
            background: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#5568d3")}
          onMouseOut={(e) => (e.target.style.background = "#667eea")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
