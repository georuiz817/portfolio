import React from 'react'
import { Link } from 'react-router-dom';
import Resume from '../Ruiz_Resume.pdf'
import NavBar from './NavBar'


const Menu = () => {

  return (
   <div>
   <NavBar/>
   <div className="button-group">
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
</div>
)
}

export default Menu
