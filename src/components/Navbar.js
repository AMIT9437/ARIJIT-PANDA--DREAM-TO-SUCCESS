import React from "react";
import { Navbar as RBNavbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <RBNavbar bg="light" expand="lg" className="shadow-sm" fixed="top">
      <Container>
        {/* Hamburger toggler is placed automatically on the left */}
        <RBNavbar.Toggle aria-controls="main-nav" />

        {/* Brand (left of toggler on wide screens, visible always) */}
        <RBNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src="/images/logo.jpg" alt="logo" style={{ width: 40, height: 40, marginRight: 8 }} />
          <span>Dream 2 Success</span>
        </RBNavbar.Brand>

        <RBNavbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {/* Right side buttons */}
          <div className="d-flex">
            <Button as={Link} to="/login" variant="outline-primary" className="me-2">Log in</Button>
            <Button as={Link} to="/signup" variant="primary">Sign up</Button>
          </div>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}

