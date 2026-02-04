function Schedule() {
  const schedule = [
    { time: "10:00 AM", event: "Opening Ceremony" },
    { time: "11:00 AM", event: "Tech Talks" },
    { time: "2:00 PM", event: "Workshops" },
    { time: "5:00 PM", event: "Closing Remarks" },
  ];

  return (
    <div
      id="schedule"
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
        Schedule
      </h2>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {schedule.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "25px",
              padding: "20px",
              background: "#f8f9fa",
              borderRadius: "8px",
              borderLeft: "4px solid #667eea",
            }}
          >
            <div
              style={{
                minWidth: "120px",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#667eea",
              }}
            >
              {item.time}
            </div>
            <div
              style={{
                fontSize: "18px",
                color: "#2c3e50",
              }}
            >
              {item.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
