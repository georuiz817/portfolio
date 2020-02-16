import React from 'react'
import me from '../photos/me.png'
import me4 from '../photos/me4.png'
import me8 from '../photos/me8.png'
import me22 from '../photos/me22.png'


const AboutComp = () => {
  const imagePixelator = () => {
    setTimeout(function(){document.getElementById('pixel-img').src = me8 }, 1000);
    setTimeout(function(){document.getElementById('pixel-img').src = me4 }, 2000);
    setTimeout(function(){document.getElementById('pixel-img').src = me }, 3000);

  }
  
    return (
       <div className="about-page" >
         <div className="about-educated">
           <h1>Educated</h1>
           <p>After graduating with a Bachelors from Stony Brook in 2016, I started working in corporate office environments. I was able to thrive in hands on experience with topics like team building, data management, and corporate best practices.</p>
           </div>
          
          <div className="about-img">
            <img alt="n/a" id="pixel-img" onLoad={imagePixelator()} src={me22} />
              
            </div>
    </div>
 
    )
  }


export default AboutComp