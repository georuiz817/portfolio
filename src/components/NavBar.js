import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Resume from '../Ruiz_Resume.pdf';
import Navbar from 'react-bootstrap/Navbar'
 

const NavBar = () => {

   const [SearchLtr, UpdateSearchLtr] = useState("");
   const history = useHistory();
   
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log({SearchLtr})
    let searchLogix = SearchLtr.toUpperCase()
    
    if ( searchLogix === 'A'){
      history.push('/about');
    } else if (searchLogix === 'P'){
      window.open(
        'https://ruizport.wordpress.com/',
        '_blank'  
        );
      }else if (searchLogix === 'RE'){
        history.push('/readme');
      } else if (searchLogix === 'R'){
        window.open(Resume, 
        '_blank'
        );
      }else if (searchLogix === 'C'){
        window.open("mailto:ruiz.fullstack@gmail.com"
        );
      }
    } 
    
    return (
      
      <div className="Nav-Bar">
        
        <Navbar className='Nav' bg="light">
  
          <Link to='/menu'>
            <li>Menu</li>
          </Link>
      
          <li>Edit</li>
      
          <li>Help</li>

          <form className="form-bar" onSubmit={handleSubmit}>
            <input type="text" value={SearchLtr} placeholder="quick search" name="name" onChange={(e) => UpdateSearchLtr( e.target.value)}/>
            <button id="button" type="submit"><span role='img' aria-label='glass'>🔎</span></button>
          </form>
        </Navbar>
      </div>
    )
  }


export default NavBar