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
            steps={['George-Operating-System', 1000, 'Hand built with React, JSX, Sass', 1000]}
            loop={Infinity}
            wrapper="p"
         />
      </div>
      
         <div className='main-card'>
               <h4>Welcome</h4>
               <hr></hr>
               <p>I am George Ruiz a Full Stack Developer and graduate of Flatiron School. 
               Please take a look around and play with any features. This site was inspired 
               by various MS-DOS systems. Click help to get information on the 
               search bar/additional info. If you want to see some projects 
               with images and descriptions, be sure to click on projects and be forwarded 
               over to my WordPress powered projects page. </p>
         </div>
         
         <Card className='cardEdit' > 
            <Link to="/about">
               <Card.Body>
                  About...
               </Card.Body>
            </Link>
         </Card>

         <Card className='cardEdit' >
            <Link to='/Games'>
               <Card.Body>
                  Games
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
   </div>
   )
}

export default Menu
