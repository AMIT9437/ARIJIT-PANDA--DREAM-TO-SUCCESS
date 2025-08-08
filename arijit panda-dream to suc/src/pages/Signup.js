import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({ name: "", email: "", phone: "", password: "", confirm: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      alert("Please fill required fields.");
      return;
    }
    if (user.password !== user.confirm) {
      alert("Passwords do not match.");
      return;
    }
    // placeholder: replace with actual signup API
    alert("Account created (demo). You can now login.");
    navigate("/login");
  }

  return (
    <div style={{ maxWidth: 520, margin: "20px auto" }}>
      <h1>Create an Account</h1>
      <p>Join us to access exclusive financial resources and personalized services.</p>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={user.name} onChange={handleChange}
               style={{ width: "100%", padding: 10, margin: "8px 0", borderRadius: 6, border: "1px solid #ccc" }} required />

        <input name="email" type="email" placeholder="Email" value={user.email} onChange={handleChange}
               style={{ width: "100%", padding: 10, margin: "8px 0", borderRadius: 6, border: "1px solid #ccc" }} required />

        <input name="phone" placeholder="Phone Number" value={user.phone} onChange={handleChange}
               style={{ width: "100%", padding: 10, margin: "8px 0", borderRadius: 6, border: "1px solid #ccc" }} />

        <input name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange}
               style={{ width: "100%", padding: 10, margin: "8px 0", borderRadius: 6, border: "1px solid #ccc" }} required />

        <input name="confirm" type="password" placeholder="Confirm Password" value={user.confirm} onChange={handleChange}
               style={{ width: "100%", padding: 10, margin: "8px 0", borderRadius: 6, border: "1px solid #ccc" }} required />

        <button type="submit" style={{ padding: "10px 18px", background: "#38ada9", color: "white", border: "none", borderRadius: 6 }}>
          Create Account
        </button>
      </form>
    </div>
  );
}
