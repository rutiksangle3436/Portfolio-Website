import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div class="ZB min-w-full shadow-red-500">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav navbarScroll className="mx-auto space-x-80">
                <Nav.Link href="#intro">Intro</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}
