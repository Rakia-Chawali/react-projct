import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <a href="/">
            <img
              src="https://img.freepik.com/vecteurs-libre/modele-logo-fleur-club-spa-vecteur-conception-moderne-or_53876-136293.jpg?size=338&ext=jpg&ga=GA1.2.300554384.1667384422"
              alt="logo"
              height="60" width="70"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Vlog</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
