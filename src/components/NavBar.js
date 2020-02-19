import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const NavBar = () => {

   const [SearchLtr, UpdateSearchLtr] = useState("");


   const handleSubmit = (e) => {
     
    e.preventDefault();
    console.log({SearchLtr})
    if ( {SearchLtr} === 'A'){
      return <Redirect to='/about' />
    }
    
  } 



    return (
       <div className="Nav-Bar">
        <ul>
          <li>file</li>
          <Link to="/menu"><li>Menu</li></Link>
            
                 <form className="form-bar" onSubmit={handleSubmit}>
            
                 <input type="text" value={SearchLtr} name="name" onChange={(e) => UpdateSearchLtr( e.target.value)}/>
       
                 <button id="button" type="submit">🔎</button>
 
                 </form>
              
   

         
         
         
         </ul>
       </div>
 
    )
  }


export default NavBar