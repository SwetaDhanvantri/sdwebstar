import React from 'react';
import './About.css';
import {BsArrowDown} from 'react-icons/bs';
import { Container, Row, Col, Form, Button}  from 'react-bootstrap';


import Footer from './Footer';
function About() {
  
  return (
    <div>
          {/* About Head */}
        <div className='head-about'>
      
         <Row>
           <Col xl={2}></Col>
           <Col xl={5}>
             <div className='about-intro text-right'>
              <Container>
                <div className='first-line'><p>Hi I'Am</p></div>
                <div className='name'><p>SHWETA DHANVANTRI</p></div>
                <div className='service'><h7>Web Designer & Developer</h7></div> 
                <div className='mt-3'><Button className='about-btn'>ABOUT ME <BsArrowDown/></Button></div>
             </Container>
             </div>
             </Col>
           <Col xl={3}><div className='about-pic'><img src='img/about-2.png' alt='about-img' className="img-fluid"/></div></Col>
           <Col xl={2} sm></Col>
         </Row>
        </div>
      {/* About Me*/}
        <div className='about-me'>
        <Row>
          
        <Col xl={1}>
            
            </Col>
        <Col xl={3}>
          <div className='pic-background'  id='content'>
            <img src='img/about-2.png' alt='about-img' className="img-fluid"/></div>
          </Col>
          <Col xl={3} >
            <Container className='about-detail'>
              <div className='pb-2'><h4><u>About</u> Me </h4></div>
          <div><p><div className='pb-2 style'><h6>
           I am a creative Web Designer & WordPress Developer.</h6></div>
          I am obsessed with learning new things. If I talked about my career and Education, I have 1 year of experience in Web Designing and WordPress development from E-learning Point Pvt Ltd.
            I also worked as an intern for 6 months at Samadhey Technology.
            I have done Post Graduation [MSc Computer Science (2017-2019)] 
            & Graduation [Bsc Computer Science (2014-2017)] from MDU Rohtak.
            Also, I have done Sr. Sec(2013-2014) & Sec. (2011-2012) Examination from Board of School Education Haryana.</p></div>
            </Container></Col>
          
          <Col xl={3}>
          <div className='skills'>
          <Row>
         
            <Col>
              <div>
                <h4>My Skills</h4>
              </div>
            </Col>
            <Col>
            <div className='bar'>
            <div class="progress">
             <div class="progress-value"><div className='p-1'><h6>HTML</h6></div></div>
            
            </div>
            <div class="progress">
             <div class="progress-value-1"><div className='p-1'><h6>CSS</h6></div></div>
            
            </div>

            <div class="progress">
             <div class="progress-value-2"><div className='p-1'><h6>Bootstrap</h6></div></div>
            
            </div>
            <div class="progress">
             <div class="progress-value-3"><div className='p-1'><h6>Java Script</h6></div></div>
            
            </div>
            <div class="progress">
             <div class="progress-value-4"><div className='p-1'><h6>WordPress</h6></div></div>
            
            </div>
           </div>
            </Col>
           
          </Row>
        </div>
          </Col>
          <Col xl={1}>
            
            </Col>
        </Row>
        
        </div>
       
   {/* Our Team */}
      
   <div className='team-about' >
   <Row><Col></Col><Col  className='our-team'><div className='ourteam-head'>Our Team</div></Col><Col></Col></Row>
      <Row>
        <Col xl={2}></Col>
        <Col xl={5}>
          <div className='about-intro text-right'>
           <Container>
            
             <div className='name'><p>Bhavana DHANVANTRI</p></div>
             <div className='service'><h7>Faishon Designer</h7></div> 
             <div className='mt-1'><Button className='about-btn'>SKILLS <BsArrowDown/></Button></div>
             <div className='mt-1'><Button className='about-btn'>Handmade Illustrations</Button></div>
             <div className='mt-1'><Button className='about-btn'>Hand Sketch</Button></div>
             <div className='mt-1'><Button className='about-btn'>Digital Prints</Button></div>
             <div className='mt-1'><Button className='about-btn'>Digital Illustrations</Button></div>
          </Container>
          </div>
          </Col>
        <Col xl={3}><div className='team-pic'><img src='img\fashion.png' alt='about-img' className="img-fluid"/></div></Col>
        <Col xl={2} sm></Col>
      </Row>
     </div>

     {/* Team-member-2 */}
     <div className='about-me'>
      
        <Row>
          
        <Col xl={2}>
            
            </Col>
        <Col xl={3}>
          <div className='pic-background'  id='content'>
            <img src='img\3572691.jpg' alt='about-img' className="img-fluid"/></div>
          </Col>
          <Col xl={5} >
            <Container className='about-detail'>
              <div className='pb-2'><h4 className='name'>Shikha DHANVANTRI </h4></div>
              <div className='service'><h7>Graphic Designer</h7></div> 
             <div className='mt-1'><Button className='about-btn'>SKILLS <BsArrowDown/></Button></div>
             <div className='mt-1'><Button className='about-btn'>Adobe Illustrations</Button></div>
             <div className='mt-1'><Button className='about-btn'>Adobe Photoshop</Button></div>
             <div className='mt-1'><Button className='about-btn'>Corel Draw</Button></div>
        
            </Container></Col>
          
          <Col xl={2}>
        
          </Col>
         
        </Row>
        
        </div>
       {/* team member 2 end*/}

        <Footer/>
    </div>
  )
}

export default About