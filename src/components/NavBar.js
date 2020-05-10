import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Resume from '../Ruiz_Resume.pdf';
import Navbar from 'react-bootstrap/Navbar'
import Clock from 'react-live-clock'

const NavBar = () => {

   const [SearchLtr, UpdateSearchLtr] = useState("");
   const history = useHistory();
   
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log({SearchLtr})
    let searchLogix = SearchLtr.toUpperCase()
    if ( searchLogix === 'A'){
      history.push('/about');
    } else if (searchLogix === 'G'){
      window.open(
        'https://github.com/georuiz817',
        '_blank'  
        );
      }else if (searchLogix === 'E'){
        history.push('/edit');
      } else if (searchLogix === 'R'){
        window.open(Resume, 
        '_blank'
        );
      }else if (searchLogix === 'C'){
        window.open("mailto:ruiz.fullstack@gmail.com"
        );
      }else if (searchLogix ==='M'){
        history.push('/menu');
      }
    } 

    return (
      <div className="Nav-Bar">
        <Navbar className='Nav' bg="light">
            <Link to='/menu'>
            <li><span className='red-col'>M</span>enu</li>
            </Link>
            <Link to='/edit'>
            <li><span className='red-col'>E</span>dit</li>
            </Link> 
            <form className="form-bar" onSubmit={handleSubmit}>
              <input className="form-bar" type="text" value={SearchLtr} placeholder="quick search" name="name" onChange={(e) => UpdateSearchLtr( e.target.value)}/>
              <button className="form-bar" id="button" type="submit"><span role='img' aria-label='glass'>🔎</span></button>
            </form>
            <Clock className='clocky' format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
        </Navbar>
      </div>
        )
      }


export default NavBar