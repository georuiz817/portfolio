import React from 'react'
import { Link } from 'react-router-dom';
import Resume from '../Ruiz_Resume.pdf'


const Menu = () => {
    return (
     
      <div  class="card-columns">
         <Link to="/about">
         <div class="card bg-light">
            <div class="card-body text-center">
               <p>About...</p>
            </div>
         </div>
         </Link>

         <a href="https://ruizport.wordpress.com/" target="_blank" rel="noopener noreferrer">  
         <div class="card bg-light">
            <div class="card-body text-center">
               <p><span className="redText">P</span>rojects...</p>
            </div>
         </div>
         </a>


         <div class="card bg-light">
            <div class="card-body text-center">
               <p>Contact...</p>
            </div>
         </div>

         <a href={Resume}> 
         <div class="card bg-light">
            <div class="card-body text-center">
               <p>Resume...</p>
            </div>
         </div>
         </a>

         <div class="card bg-light">
            <div class="card-body text-center">
               <p>Hobbies...</p>
            </div>
         </div>
         <div class="card bg-light">
            <div class="card-body text-center">
               <p>README.md</p>
            </div>
         </div>
      </div>
    )
  }


export default Menu
