import React from "react";

const sampleTestimonials = [
  {
    name: "Priya S.",
    role: "Business Owner",
    message: "Arijit sir’s taxation advice saved me a lot of time and stress. Highly professional!"
  },
  {
    name: "Rajesh K.",
    role: "Trader",
    message: "Thanks to Arijit, our GST compliance is always on time."
  },
  {
    name: "Sunita P.",
    role: "Entrepreneur",
    message: "Very reliable and knowledgeable. I trust him completely with my company accounts."
  }
];

export default function Testimonials() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1>What Our Clients Say</h1>
      <p>Real feedback from people we have served.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
        {sampleTestimonials.map((t, idx) => (
          <div key={idx} style={{ padding: 16, borderRadius: 8, boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
            <p style={{ fontStyle: "italic" }}>"{t.message}"</p>
            <p style={{ marginTop: 8, fontWeight: "bold" }}>{t.name}</p>
            <p style={{ color: "#555", fontSize: 14 }}>{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
