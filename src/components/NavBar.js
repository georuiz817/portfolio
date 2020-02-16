import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
       <div className="Nav-Bar">
        <ul>
          <Link to="/menu"><li>menu</li></Link>
          <Link to="/about"><li>about</li></Link>
        </ul>
       </div>
 
    )
  }


export default NavBar