import React from 'react'
import {Button, Container, Row, Col}  from 'react-bootstrap';
import {SiGmail} from 'react-icons/si';

import {AiFillInstagram} from 'react-icons/ai';
import {TiLocation} from 'react-icons/ti'

import './Contact.css';

function Contact() {
  return (
    <div>
        <section id='contact-section' className='contact'>

        
        <div className='text-center heading'>CONTACT US</div>
        <Container >
        <Row className='row'>
           
            <Col lg={4} sm={6} >
              <div className='first'>
                  <Container>
                  <h4>Contact Information</h4>
                    <div className='mail'><a href='mailto:dhanvantrisweta@gmail.com'><SiGmail className='icon'/> <span>sdwebpoint@gmail.com</span></a></div>
                    <div className='mail'><a><AiFillInstagram className='icon'/><span>https://www.instagram.com/sdwebpoint/</span></a></div>
                    <div className='mail'><a><TiLocation className='icon'/>Faridabad, India</a></div>
                  </Container>
                    
                    <div className='shape'><img src='./sdwebstar/img/shape.png' class="img-fluid "/></div>
              </div>
            </Col>
            <Col md sm={6}>
             <div className='two'>
              <Row className='non-shad'>
                
               <Col>
                 <form className='form-1'>
                  <div><label for="fname">First Name</label></div>
                 <div><input type="text" id="fname" name="fname" /></div><br/>
                 <div><label for="mail">E-Mail Id</label></div>
                 <div><input type="email" id="email" name="email" /></div>
            
                 </form>
               </Col>
              <Col>
              <form className='form-1'>
                <div><label for="fname">Last Name</label></div>
                <div><input type="text" id="fname" name="fname" /></div><br/>
                <div><label for="fname">Phone Number</label></div>
                <div><input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /></div>
            
               </form>
              </Col>

              </Row>
             
              <div>
              <form>
            <div className='form-2'>
            <div className='head'><label for="text">Please select which of the following services do you need?</label></div>
              <div>
                <Row className='opt'>
                  <Col xl={2}><input type="radio" id="contactChoice1" name="contact" value="email" />
               <label for="contactChoice1">Web Design</label></Col>
                  <Col xl={3}> <input type="radio" id="contactChoice2" name="contact" value="phone"/>
               <label for="contactChoice2">Wordpress Development</label></Col>
                  <Col  xl={2}>  <input type="radio" id="contactChoice3" name="contact" value="mail"/>
               <label for="contactChoice3">Poster Design</label></Col>
                  <Col xl={3}>
               <input type="radio" id="contactChoice4" name="contact" value="mail"/>
               <label for="contactChoice4">Social Media Post Design</label></Col>
                  <Col>     
               <input type="radio" id="contactChoice5" name="contact" value="mail"/>
               <label for="contactChoice3">Logo Design</label></Col>

                </Row>
              
              
        
                </div> 
           </div>

           <div className='form-3'>
           <div className='head'><label for="text">Message</label></div>
           <div><input type="text" id="fname" name="fname" placeholder='Write your message' /></div>
           </div>
           <div className='send-btn'><Button className='butn-send'>Send</Button></div>
   <div>
    
  </div>
</form>
      
              </div>
             </div>
            </Col>
           
        </Row>
        </Container>
        </section>
    </div>
  )
}

export default Contact