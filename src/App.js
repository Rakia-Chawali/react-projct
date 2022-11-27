import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <a href="/">
            <img
              src="https://img.freepik.com/vecteurs-libre/modele-logo-fleur-club-spa-vecteur-conception-moderne-or_53876-136293.jpg?size=338&ext=jpg&ga=GA1.2.300554384.1667384422"
              alt="logo"
              height="60"
              width="70"
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
      <Form className="form">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Radios
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="third radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
