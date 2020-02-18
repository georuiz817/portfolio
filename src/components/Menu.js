import React from 'react'
import { Link } from 'react-router-dom';
import Resume from '../Ruiz_Resume.pdf'



const Menu = () => {

  return (
   <div>

<div className='desc'>
   <p>Hello my name is George.</p>
   <p>I'm a Full Stack Web Developer.</p>
   <p>Feel free to check out my site. Theirs tons to do from viewing the information to doing some editing yourself</p>
   <p>I challenge you to discover every nook and cranny of the site ranging from changing the color scheme to using a DOS based quick search</p>
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
         <div class="card-body">Hobbies...</div>
      </div>
      <div class="card">
         <Link to='/contact'>
         <div class="card-body">Contact...</div>
         </Link>
      </div>
      <div class="card">
         <div class="card-body">ReadME.MD</div>
      </div>
      

 
      </div>
 

   
)
}

export default Menu
