import React from 'react'
import { Link } from 'react-router-dom';
import Resume from '../Ruiz_Resume.pdf'
import Typical from 'react-typical'
import Card from 'react-bootstrap/Card'


const Menu = () => {

  return (
   <div>
  
      
      <div className="GOS">
         <Typical
         steps={['GOS', 1000, 'George-Operating-System', 500]}
         loop={Infinity}
         wrapper="p"
         />
      </div>

       
         <Card.Body className='main-card'>
            <h4>Welcome to the GOS Editor and Reader</h4>
            <p>I am George Ruiz. Full Stack Developer and graduate of Flatiron Scool.</p>
            <p>Feel free to search around and play with some features.</p>
         </Card.Body>
       

      <Card > 
         <Link to="/about">
            <Card.Body>
               About...
            </Card.Body>
         </Link>
      </Card>
  


      <Card > 
         <a href="https://ruizport.wordpress.com/" target="_blank" rel="noopener noreferrer">
            <Card.Body>
               Projects...  
            </Card.Body>
         </a>
      </Card>


      <Card >
         <a href={Resume}>
            <Card.Body>
               Resume...
            </Card.Body>
         </a>
      </Card>


      <Card >
         <Link to='/contact'>
            <Card.Body>
               Contact...
            </Card.Body>
         </Link>
      </Card>


      <Card >
         <Card.Body>
            R<span id="read-e">e</span>adME.MD
         </Card.Body>
      </Card>


</div>
)
}

export default Menu
