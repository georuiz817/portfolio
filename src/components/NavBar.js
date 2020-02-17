import React from 'react'
import { Link } from 'react-router-dom';
import Resume from '../Ruiz_Resume.pdf'

const NavBar = () => {
    return (
       <div className="Nav-Bar">
        <ul>
          <Link to="/menu"><li>menu</li></Link>
          <Link to="/about"><li>about</li></Link>
          <li><a href = {Resume}>resume</a></li>
        </ul>
       </div>
 
    )
  }


export default NavBar