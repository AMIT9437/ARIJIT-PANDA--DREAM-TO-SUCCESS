import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        {/* Left - Hamburger */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Center - Brand Name */}
        <Navbar.Brand href="/">Dream 2 Success</Navbar.Brand>

        {/* Right - Login / Signup */}
        <div className="ms-auto d-flex align-items-center">
          <Button variant="outline-primary" className="me-2">Login</Button>
          <Button variant="primary">Sign Up</Button>
        </div>

        {/* Dropdown Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
