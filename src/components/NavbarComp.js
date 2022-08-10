import React, { useState } from 'react';
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
import Wordpress from './Services/Wordpress';
import SocialMedia from './Services/SocialMedia';
import ResumeDesign from './Services/ResumeDesign';
import LogoDesign from './Services/LogoDesign';
import PosterDesign from './Services/PosterDesign';
import DigitalIllustrations from './Services/DigitalIllustrations';
import DigitalPrints from './Services/DigitalPrints';
import HandmadeIllustrations from './Services/HandmadeIllustrations';
import WebDesign from './Services/WebDesign';
import HandSketch from './Services/HandSketch'
function NavbarComp() {
  const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
    return (
      <BrowserRouter>
     
      <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
      <Container>
      <Navbar.Brand as={Link} to={"/"} ><img src='img\logo-black.png' alt='brand' height='50px' width='50px'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <NavDropdown title="Services"  id="collasible-nav-dropdown" 
           show={show}
           onMouseEnter={showDropdown} 
           onMouseLeave={hideDropdown}
          
          >
            <NavDropdown.Item as={Link} to="/webDesign">Web Design</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/wordpress">Wordpress Development</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/socialMedia">Social Media post design</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/resumeDesign">Resume Design</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/posterDesign">Poster Design</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/logoDesign">Logo Design</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/digitalIllustrations">Digital Illustrations</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/digitalPrints">Digital Prints</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/handmadeIllustrations">Handmade Illustrations</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/handSketch">Hand Sketch</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/contact" >
          <Button className='sign-btn'>CONTACT</Button>
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
       <Route path="/webDesign" element={<WebDesign />}/>
       <Route path="/wordpress" element={<Wordpress />}/>
       <Route path="/socialMedia" element={<SocialMedia />}/>
       <Route path="/resumeDesign" element={<ResumeDesign />}/>
       <Route path="/posterDesign" element={<PosterDesign />}/>
       <Route path="/logoDesign" element={<LogoDesign />}/>
       <Route path="/digitalPrints" element={<DigitalPrints />}/>
       <Route path="/handmadeIllustrations" element={<HandmadeIllustrations />}/>
       <Route path="/handsketch" element={<HandSketch />}/>
       <Route path="/digitalIllustrations" element={<DigitalIllustrations />}/>
       </Routes>
      </div>
    </div>
    </BrowserRouter>
    
    )
  }
  export default NavbarComp;