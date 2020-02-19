import React from 'react'
import { Link } from 'react-router-dom';
import Resume from '../Ruiz_Resume.pdf'
import Typical from 'react-typical'

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
    

       <div  className='desc'>
          <div className='about-body'>
       <div class="card-body">
          <div class='text-body'>          
          <h4>Welcome to the GOS Editor and Reader</h4>
          <p>I am George Ruiz. Full Stack Developer and graduate of Flatiron Scool.</p>
          <p>Feel free to search around and play with some features.</p>
          </div>

       
       
       </div>
       </div>
       </div>

       <div class="card">
         <Link to="/about">
         <div class="card-body">About...</div>
         </Link>
      </div>

      <div class="card">
         <a href="https://ruizport.wordpress.com/" target="_blank" rel="noopener noreferrer">
            <div class="card-body">Projects...</div>
         </a>
      </div>
      <div class="card">
         <a href={Resume}>
            <div class="card-body">Resume...</div>
         </a>
      </div>

      <div class="card">
         <Link to='/contact'>
         <div class="card-body">Contact...</div>
         </Link>
      </div>
      <div class="card">
         <div class="card-body">R<span id="read-e">e</span>adME.MD</div>
      </div>
      

 
      </div>
 

   
)
}

export default Menu
