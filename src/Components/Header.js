import React from 'react';
import '../css/header.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

function Header() {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Neha Joshi's Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/comtact">Contact</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="https://www.linkedin.com/in/neha-joshi-03b61b117/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></Nav.Link>
      <Nav.Link eventKey={2} href="https://www.facebook.com/nehajoshigkp/" target="_blank">
      <i class="fa fa-facebook-official" aria-hidden="true"></i>
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/ne_joshi/?fbclid=IwAR0hCAvLx8qkd3YZtncJRjHRbSK1gvwfk4jN3UvkNH5XKg549_lL5DYSvSo" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></Nav.Link>
      <Nav.Link href="https://github.com/joshinehajoshi" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>
      </Nav.Link>
      <Nav.Link href="https://thenehajoshi.medium.com/" target="_blank"><i class="fa fa-medium" aria-hidden="true"></i></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
