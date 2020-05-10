import React from 'react'
import { Link } from 'react-router-dom';
import Resume from '../Ruiz_Resume.pdf'
import Typical from 'react-typical'
import Card from 'react-bootstrap/Card'
import {Container, Col, Row } from 'react-bootstrap';

const Menu = () => {

  return (
   <Container>
      <Row>
         <Col sm={4}>
            <Card className='cardEdit' >
               <Link to="/about">
                  <Card.Body>
                     About...
                  </Card.Body>
               </Link>
            </Card>
            <Card className='cardEdit' >
               <a href="https://github.com/georuiz817" target="_blank" rel="noopener noreferrer">
                  <Card.Body>
                     GitHub...  
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
         </Col>
         <Col sm={8}>
            <div className="GOS">
               <Typical
               steps={['George-Operating-System', 1000, 'Hand built with React, Bootstrap and Sass', 1000]}
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
                     <p>Want to see some work 
                        with images and descriptions? Be sure to click on GitHub to take a look at project code and README.mds. 
                     </p>
                  </Col>
               </Row>
            </div>
         </Col>
      </Row>
   </Container>
  )
}

export default Menu
