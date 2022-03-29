
import React from 'react'
import { Row , Col, Container, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'
function WebDesign() {
  return (
    <section className='services d-flex flex-direction: colum  align-items-center'>
  <Row>
    <Col xl={5} className='text-right'><Container ><img src='img\19362653-removebg-preview.png'  alt='about-img' className=" text-right img-fluid"></img></Container></Col>
    <Col  xl={7}>
      <Container className='services-title'>
        <Row>
          <Col xl={12} sm={6}> <div><h1>Get designed your dreamy website with us</h1></div></Col>
          </Row>
          <Row>
          <Col xl={12}></Col>
          </Row>

         <Row>          
           <Col xl={12}></Col>
        </Row>
   
      
      <div>
       <p>
        Grow your business online with an Appealing Web plan with proficient advancement. <br/>We designed professional and responsive website for you. 
      </p>
      <div className=" service-btn" ><Button as={Link} to={"/contact"} className='service-contact' size="lg">Contact Now</Button></div>
      </div>
    
    
      
      </Container>
    </Col>
  </Row>
    </section>
    
  )
}

export default WebDesign