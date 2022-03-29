import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col}  from 'react-bootstrap';
import Footer from './Footer';
function Home() {
  return (
    <div>
        <section>
      <div id="intro" className='bg-image' >
      <div className='mask'>
    
        <div className='text-center p-4 '>
          <Container className='welcome'>
            <h3 className='mb-2 text-center '>welcome to SDWEB</h3>
          <p>
        
          Give wings to your business to high online fly with SDWEB.
       
          </p>
          <Button className='get-btn' as={Link} to={"/contact"}>GET NOW</Button>
          </Container>
         
     </div>
   </div>
 </div>
 <div id='section-2' className='section2'>
   <div className='text-center'><h3>Our Services</h3></div>
 {/* Row 1*/}
  <div className='text-center colms'> 
    <Row className='shad'>
    
      <Col md>
        <Container>
          <div className='thumb'><img src='img/web.png' class="img-fluid "/>
          </div>
          <div className='title'>
            <h4 >WEB DESIGN</h4></div>
        
        </Container>
        </Col>
      <Col md>
        <Container>
        <div className='thumb'><img src='img\Design team-pana (2).png' class="img-fluid "/>
          </div>
          <div className='title'>
          <h4>WORDPRESS DEVELOPMENT</h4>
            </div>
       
        </Container>
        </Col>
      <Col md>
      <Container>
      <div className='thumb'>
       <img src='img/Social media-cuate.png' class="img-fluid "/>
     </div>
        <div className='title'>
        <h4 >Social Media post design</h4>
          </div>
     
        </Container>
        </Col>
        <Col md>
      <Container>
      <div className='thumb'>
       <img src='img\3.png' />
     </div>
        <div className='title'>
        <h4 >Handmade Illustrations</h4>
          </div>
     
        </Container>
        </Col>
        <Col md>
      <Container>
      <div className='thumb'>
       <img src='img\4.png' />
     </div>
        <div className='title'>
        <h4 >Hand Sketch</h4>
          </div>
     
        </Container>
        </Col>
    </Row>

    
     </div>
    {/* Row 2*/ }
     <div className='text-center colms mt-4'>
    <Row className='shad'>
      <Col md>
    <Container>
        <div className='thumb'><img src='img\poster (2).png' className="img-fluid"/>
          </div>
          <div className='title'>
          <h4>Poster Design</h4>
            </div>
       
        </Container>
        </Col>
      <Col md>
      <Container>
          <div className='thumb'><img src='img\2.png' class="img-fluid "/>
          </div>
          <div className='title'>
            <h4 >Digital Prints</h4></div>
        
        </Container>
      </Col>
      <Col md>
        <Container>
          <div className='thumb'><img src='img\Online resume-rafiki.png' class="img-fluid "/>
          </div>
          <div className='title'>
            <h4 >Resume Design</h4></div>
        
        </Container>
        </Col>
      <Col md>
      <Container>
      <div className='thumb'>
       <img src='img/logo.jpg' class="img-fluid "/>
     </div>
        <div className='title'>
        <h4 >LOGO DESIGN</h4>
          </div>
     
        </Container>
        </Col>
        <Col md>
      <Container>
      <div className='thumb'>
       <img src='img\1.png' class="img-fluid "/>
     </div>
        <div className='title'>
        <h4 >Digital Illustrations</h4>
          </div>
     
        </Container>
      </Col>
     
    </Row>
   </div>
   
   </div>
 </section>
 
        <Footer/>
    </div>
  )
}

export default Home