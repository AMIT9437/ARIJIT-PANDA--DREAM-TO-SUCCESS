import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: replace with real submit logic later
    alert("Thank you, " + (form.name || "Guest") + "! Your message has been received.");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  const inputStyle = { width: "100%", padding: "10px", margin: "8px 0", borderRadius: 6, border: "1px solid #ccc" };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1>Let’s Connect</h1>
      <p>Have a question or need assistance? Fill the form below or use the contact details.</p>

      <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
        <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: 280 }}>
          <input
            style={inputStyle}
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            style={{ ...inputStyle, minHeight: 120 }}
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            style={{ padding: "10px 18px", background: "#38ada9", color: "white", border: "none", borderRadius: 6 }}
          >
            Send Message
          </button>
        </form>

        <div style={{ width: 320, minWidth: 240 }}>
          <h3>Contact Info</h3>
          <p>📍 Bhubaneswar, Odisha, India</p>
          <p>📧 info@arijitpanda.com</p>
          <p>📞 +91-XXXXXXXXXX</p>

          <h4>Business Hours</h4>
          <p>Mon – Fri: 9:30 AM – 7:00 PM</p>
          <p>Sat: 10:00 AM – 2:00 PM</p>
        </div>
      </div>
    </div>
  );
}
