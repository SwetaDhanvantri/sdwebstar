import React from 'react'
import { Row , Col, Container, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';
function DigitalIllustrations() {
  return (
    <div> <section className='services d-flex flex-direction: colum  align-items-center'>
    <Row>
      <Col xl={4} sm={12} className='text-right'><Container ><img src='img\digital-illus-removebg-preview.png'  alt='about-img' className=" text-right img-fluid"></img></Container></Col>
      <Col  xl={8} sm={12}>
        <Container className='services-title pt-5'>
          <Row>
            <Col xl={12} sm={12}> <div className=' pb-4 digi-titte'>Get designed Digital Illustrations with us</div></Col>
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
      </section></div>
  )
}

export default DigitalIllustrations