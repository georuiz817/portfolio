import React from 'react'
import { Link } from 'react-router-dom';


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
         <div class="card bg-light">
            <div class="card-body text-center">
               <p>Projects...</p>
            </div>
         </div>
         <div class="card bg-light">
            <div class="card-body text-center">
               <p>Contact...</p>
            </div>
         </div>
         <div  class="card bg-light">
            <div class="card-body text-center">
               <p>Resume...</p>
            </div>
         </div>
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
