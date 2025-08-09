import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Bootstrap Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          {/* Brand / Logo */}
          <Navbar.Brand href="/">Dream 2 Success</Navbar.Brand>

          {/* Hamburger menu button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Menu items */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/testimonials">Testimonials</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>

            {/* Right side buttons */}
            <div className="d-flex">
              <Button variant="outline-primary" href="/login" className="me-2">
                Log in
              </Button>
              <Button variant="primary" href="/signup">
                Sign up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content */}
      <div style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
