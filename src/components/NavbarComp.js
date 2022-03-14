import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import {FiGrid} from 'react-icons/fi';
import './Navbar.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About';
export default class NavbarComp extends Component {
  render() {
    return (
      <BrowserRouter>
     
      <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
      <Container>
      <Navbar.Brand as={Link} to={"/"} ><FiGrid className="navbar-icon mb-1"/>SDWEB </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <NavDropdown title="Services"  id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/contact" >
          <Button variant='dark' className='sign-btn'>CONTACT</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      <div>
       <Routes>
       <Route path="/about" element={<About />}/>
       <Route path="/" element={<Home />}/>
       <Route path="/contact" element={<Contact />}/>
       </Routes>
      </div>
    </div>
    </BrowserRouter>
    
    )
  }
}
