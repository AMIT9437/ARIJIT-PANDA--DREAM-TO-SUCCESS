import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0a3d62",
    padding: "10px 20px",
    color: "white"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 10px"
  };

  return (
    <nav style={navStyle}>
      <h2>Arijit Panda</h2>
      <div>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About</Link>
        <Link style={linkStyle} to="/services">Services</Link>
        <Link style={linkStyle} to="/testimonials">Testimonials</Link>
        <Link style={linkStyle} to="/blog">Blog</Link>
        <Link style={linkStyle} to="/contact">Contact</Link>
        <Link style={linkStyle} to="/login">Login</Link>
        <Link style={linkStyle} to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
