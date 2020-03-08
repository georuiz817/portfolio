import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import me from '../photos/me.png'
import me4 from '../photos/me4.png'
import me8 from '../photos/me8.png'
import me22 from '../photos/me22.png'
import BootUpSound from '../BootUpSound.mp3'
import Energy from '../photos/energy-black.jpg'

class HomeComp extends Component {

      componentDidMount(){
     setTimeout(function(){document.getElementById('boot-text').innerHTML = "<p>Booting up</p>"}, 1000);
     setTimeout(function(){document.getElementById('grab-text').innerHTML = "<p>Grabbing portfolio</p>"}, 1500);
     setTimeout(function(){document.getElementById('image-text').innerHTML='<p>Loading components</p>'},2000);
     setTimeout(function(){document.getElementById('read-cards-text').innerHTML='<p>Intializing Read Cards</p>'},2500);
     setTimeout(function(){document.getElementById('init-complete').innerHTML='<p>Career status: Applying</p>'},3000);
     setTimeout(function(){document.getElementById('done-text').innerHTML='<p>Done</p>'},3700)
     setTimeout(function(){document.getElementById('home-button').innerHTML='<button>enter</button>'},4200)
  }
    

    render(){
      const imagePixelator = () => {
        setTimeout(function(){document.getElementById('pixel-img').src = me8 }, 500);
        setTimeout(function(){document.getElementById('pixel-img').src = me4 }, 1000);
        setTimeout(function(){document.getElementById('pixel-img').src = me }, 1500);
      }
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date+' '+time;

      
    
    return(
      <div className="booting" >
        <audio  type="audio/mpeg" autoPlay >
          <source src={ BootUpSound}></source>
        </audio>
        
        <p id="date-time"></p>
            
        <div className="home-head">
          <p>Award Modular BIOS v4, An Energy Star Ally</p>  <span id="home-img"><img alt='N/A' height='250px' src={Energy} /></span>
          <p>Copyright (C) 2020, Award Software, Inc,</p>
          <br></br>
          <p>4525B7-0001</p>
          <p id='loops'></p>
          <br></br>
          <p>GEORGE RUIZ | PORTFOLIO 2020</p>
          {dateTime}
        </div>
        
        <br></br>
            
        <div className="about-img">
          <img height='150px' alt="n/a" id="pixel-img" onLoad={imagePixelator()} src={me22} />
        </div>
         
        <div className="boot-up-info">
          <p id="boot-text"></p>
          <p id="grab-text"></p>
          <p id="image-text"></p>
          <p id='read-cards-text'></p>
          <p id='init-complete'></p>
          <p id='done-text'></p>
          <br></br>
          <Link to="/menu"><span id='home-button'></span></Link>
        </div>
      </div>
      )
    }
  }
    
export default HomeComp