import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder authentication — replace with real auth later
    if (!credentials.email || !credentials.password) {
      alert("Please enter email and password.");
      return;
    }
    alert("Login successful (demo).");
    // after login redirect to home (or dashboard)
    navigate("/");
  }

  return (
    <div style={{ maxWidth: 480, margin: "20px auto" }}>
      <h1>Login to Your Account</h1>
      <p>Access your dashboard to view updates, track services, and manage your profile.</p>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email or Username"
          value={credentials.email}
          onChange={handleChange}
          style={{ width: "100%", padding: 10, margin: "10px 0", borderRadius: 6, border: "1px solid #ccc" }}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          style={{ width: "100%", padding: 10, margin: "10px 0", borderRadius: 6, border: "1px solid #ccc" }}
          required
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <label style={{ fontSize: 14 }}>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/" style={{ fontSize: 14, textDecoration: "none", color: "#0a3d62" }}>Forgot Password?</a>
        </div>

        <button type="submit" style={{ padding: "10px 18px", background: "#0a3d62", color: "white", border: "none", borderRadius: 6 }}>
          Login
        </button>
      </form>
    </div>
  );
}
