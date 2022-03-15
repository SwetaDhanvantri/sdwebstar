import React from 'react';
import './About.css';
import { Container, Row, Col}  from 'react-bootstrap';
import Footer from './Footer';
function About() {
  return (
    <div>
        <div className='head-about'>
         <Row>
           <Col xl={2}></Col>
           <Col xl={5}>
             <div className='about-intro text-right'>
              <Container>
                <div className='first-line'><p>Hi I'Am</p></div>
                <div className='name'><p>SHWETA DHANVANTRI</p></div>
                <div className='service'><h7>Web Designer & Wordpress Developer</h7></div> 
             </Container>
             </div>
             </Col>
           <Col xl={3}><div className='about-pic'><img src='img\about-2.png' alt='about-img' className="img-fluid"/></div></Col>
           <Col xl={2} sm></Col>
         </Row>
        </div>

        <div className='about-me'>

        </div>
        <Footer/>
    </div>
  )
}

export default About