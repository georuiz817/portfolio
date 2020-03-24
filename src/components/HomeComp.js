import React from 'react'
import { Link } from 'react-router-dom';
import me22 from '../photos/me22.png'
import BootUpSound from '../BootUpSound.mp3'
import Energy from '../photos/energy-black.jpg'
import HomeHelpers from './HomeHelpers'

const HomeComp = () => {

return(
      <div className="booting" onLoad={HomeHelpers.BootText()}>
        <audio  type="audio/mpeg" autoPlay >
          <source src={ BootUpSound}></source>
        </audio>
        
        <p id="date-time"></p>
            
        <div className="home-head">
          <p>Award Modular BIOS v4, An Energy Star Ally</p>  <span id="home-img"><img alt='N/A' height='250px' src={Energy} /></span>
          <p>Copyright (C) 2020, Award Software, Inc,</p>
          <br></br>
          <p>4525B7-0001</p>
          <br></br>
          <p>PENTIUM-MAX CPU at 200MHz</p>
          <p>Memory Test : 6553k OK</p>
          <p id='loops'></p>
          <br></br>
        </div>
        
        <br></br>
   
        <div className="about-img">
          <img height='150px' alt="n/a" id="pixel-img" onLoad={HomeHelpers.imagePixelator()} src={me22} />
        </div>
         
        <div className="boot-up-info">
          <p id="init-presentational-text"></p>
          <p id="react-text"></p><br></br>
          <p id="scss-text"></p>
          <p id='read-cards-text'></p><br></br>
          <p id='init-complete'></p>
          <p id='done-text'></p>
          <br></br>
          <Link to="/menu"><span id='home-button'></span></Link>
        </div>
      </div>
      )
    }
  
    //          <p>GEORGE RUIZ | PORTFOLIO 2020</p>
    //{dateTime}
export default HomeComp