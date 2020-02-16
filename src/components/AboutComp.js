import React from 'react'
import me from '../photos/me.png'

const AboutComp = () => {
    return (
       <div className="about-page" >
         <div className="about-educated">
           <h1>Educated</h1>
           <p>After graduating with a Bachelors from Stony Brook in 2016, I started working in corporate office environments. I was able to thrive in hands on experience with topics like team building, data management, and corporate best practices.</p>
           </div>
          
          <div className="about-img">
            <img alt="n/a" src={me}/>
          </div>

       </div>
 
    )
  }


export default AboutComp