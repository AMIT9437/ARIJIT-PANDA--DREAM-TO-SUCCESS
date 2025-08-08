import React from "react";
import servicesData from "../data/servicesData";

export default function Services() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <h1>Our Services</h1>
      <p>We provide a wide range of professional financial services designed to meet your specific needs.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 20 }}>
        {servicesData.map(service => (
          <div key={service.id} style={{ padding: 16, borderRadius: 8, border: "1px solid #eee", background: "#fafafa" }}>
            <h3>{service.title}</h3>
            <p style={{ color: "#555" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
