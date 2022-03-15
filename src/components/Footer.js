import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import {SiGmail} from 'react-icons/si';

import {AiFillInstagram} from 'react-icons/ai';
import {TiLocation} from 'react-icons/ti';
import {Button, Container, Row, Col}  from 'react-bootstrap';

function Footer() {
 
    return (
      <div id='footer' className='foot text-left'>
        <Container>
            <Row>
                <Col xl={4} sm={12}>
                 <div className='Container footer'>
                    <div className='heading'><h5>Connect with us</h5></div>
                    
                    <div class="card">
                     <form action="/action_page.php">
                     <div className='form'><input type="text" id="name" placeholder="Name" /></div>
                     <div className='form'><input type="text" id="email" placeholder="E-mail Address"/></div> 
                     <div className='form'><textarea name="message" placeholder="Your message" rows="2" cols="23"></textarea></div> 
                  
                     <div className='form'><input type="submit" className='subbtn' value="SUBMIT"/></div>
                     </form>
                    </div>  
                  </div>
                    
           
                </Col>
                <Col xl={4} sm={12}>
                <div className='Container footer'>
                   <div className='heading'><h5>Important Link</h5></div>
                   <div>
                   <div ><Link to='/about' className='footlink'>ABOUT</Link></div>
                   <div ><Link to='/about' className='footlink'>SERVICES</Link></div>
                   <div ><Link to='/about' className='footlink'>CONTACT</Link></div>
                   </div >
                  
                  
                  
                </div>
                  
                </Col>
            <Col xl={4} sm={12}>
            <div className='footer Container'>
             <div className='heading'><h5>CONTACT</h5></div>
             <div className='text-right'><SiGmail  className='icon'/>   sdwebstar@gmail.com</div> 
             <div className='mail'><a><AiFillInstagram className='icon'/><span>https://www.instagram.com/sdwebpoint/</span></a></div>
              <div className='mail'><a><TiLocation className='icon'/>Faridabad, India</a></div> 
             </div>
                 
            </Col>
            </Row>
        </Container>
      </div>
    )
  
}


export default Footer