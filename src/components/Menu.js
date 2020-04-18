import React from 'react'
import { Link } from 'react-router-dom';
import Resume from '../Ruiz_Resume.pdf'
import Typical from 'react-typical'
import Card from 'react-bootstrap/Card'
import {Container, Col, Row } from 'react-bootstrap';

const Menu = () => {

  return (
   <Container>
      
      <div className="GOS">
         <Typical
            steps={['George-Operating-System', 1000, 'Hand built with React, JSX, Sass', 1000]}
            loop={Infinity}
            wrapper="p"
         />
      </div>
      
         <div className='main-card'>
               <h4>Welcome</h4>
               <hr></hr>
               <Row>
                  <Col>
                  <p>I am George Ruiz a Full Stack Developer and recent graduate of Flatiron School.</p>
                  <p>Click<strong> Edit</strong> on the toolbar above to make changes to the site. Feel free to also type in the red
                     highlighted letters into the search bar to quickly jump to a selected page.
                  </p>
                  <p>If you want to see some work 
                     with images and descriptions, be sure to click on projects and be forwarded over to my WordPress powered projects page. 
                  </p>
                  </Col>
               </Row>

         </div>
         
         <Card className='cardEdit' > 
            <Link to="/about">
               <Card.Body>
                  About...
               </Card.Body>
            </Link>
         </Card>

         <Card className='cardEdit' > 
            <a href="https://ruizport.wordpress.com/" target="_blank" rel="noopener noreferrer">
            <Card.Body>
               Projects...  
            </Card.Body>
            </a>
         </Card>
         
         <Card className='cardEdit' >
            <a href={Resume}>
            <Card.Body>
               Resume...
            </Card.Body>
             </a>
          </Card>
          
          <Card className='cardEdit' >
            <a href="mailto:ruiz.fullstack@gmail.com">
            <Card.Body>
               Contact...
            </Card.Body>
            </a>
         </Card>
  </Container>
   )
}

export default Menu
