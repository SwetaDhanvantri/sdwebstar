import React from 'react'
import { Row , Col, Container, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';
function HandSketch() {
  return (
    <section className='services-nxt d-flex flex-direction: colum  align-items-center'>
    <Row>
      <Col xl={4} className='text-right'><Container className='pl-4'><img src='img\IMG20220325151228-removebg-preview (1).png'  alt='about-img' className=" text-right img-fluid"></img></Container></Col>
      <Col  xl={8}>
        <Container className='pl-0'>
          <Row>
            <Col xl={12} sm={6}> <div><h1>Get designed hand sketch with us</h1></div></Col>
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
        <div className="service-btn " ><Button as={Link} to={"/contact"} className='service-contact' size="lg">Contact Now</Button></div>
        </div>
      
      
        
        </Container>
      </Col>
    </Row>
      </section>
  )
}

export default HandSketch