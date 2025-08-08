import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      {/* Banner */}
      <img
        src="/images/banner.jpg"
        alt="Dream 2 Success Banner"
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />

      {/* Profile section */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "30px", gap: "20px" }}>
        <img
          src="/images/arijit-photo.jpg"
          alt="Arijit Panda"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #38ada9"
          }}
        />
        <div>
          <h1>Arijit Panda</h1>
          <p>
            Commerce Graduate | CA & CMA Aspirant | Registered GST Practitioner  
            6+ Years of Professional Experience in Finance, Audit, and Compliance.
          </p>
        </div>
      </div>

      {/* Intro */}
      <p>
        Welcome to the official website of <b>Arijit Panda</b> – Commerce Graduate, CA & CMA aspirant,
        Registered GST Practitioner with 6+ years of professional experience. From Audit to Fund
        Management, we deliver value-driven solutions for sustainable growth.
      </p>

      <h3>Our Services</h3>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ width: "200px", textAlign: "center" }}>
          <img src="/images/services/audit.jpeg" alt="Audit" style={{ width: "100%", borderRadius: "8px" }} />
          <p>Audit & Assurance – Ensure compliance and accuracy.</p>
        </div>

        <div style={{ width: "200px", textAlign: "center" }}>
          <img src="/images/services/taxation.jpeg" alt="Taxation" style={{ width: "100%", borderRadius: "8px" }} />
          <p>Taxation – Optimize taxes, maximize savings.</p>
        </div>

        <div style={{ width: "200px", textAlign: "center" }}>
          <img src="/images/services/gst" alt="GST" style={{ width: "100%", borderRadius: "8px" }} />
          <p>GST Solutions – Hassle-free registration, filing & advisory.</p>
        </div>

        <div style={{ width: "200px", textAlign: "center" }}>
          <img src="/images/services/fund-management.jpg" alt="Fund Management" style={{ width: "100%", borderRadius: "8px" }} />
          <p>Fund Management – Strategic investment & resource planning.</p>
        </div>
      </div>

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#38ada9",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Book a Consultation
      </button>
    </div>
  );
}


