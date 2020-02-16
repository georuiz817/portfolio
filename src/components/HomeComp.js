import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import me from '../photos/me.png'
import me4 from '../photos/me4.png'
import me8 from '../photos/me8.png'
import me22 from '../photos/me22.png'

class HomeComp extends Component {


      componentDidMount(){
     setTimeout(function(){document.getElementById('boot-text').innerHTML = "<p>Booting up.</p>"}, 1000);
     setTimeout(function(){document.getElementById('grab-text').innerHTML = "<p>Grabbing portfolio information..</p>"}, 1500);
     setTimeout(function(){document.getElementById('image-text').innerHTML='<p>Finding components...</p>'},2000);
     setTimeout(function(){document.getElementById('done-text').innerHTML='<p>Done</p>'},2500)
     setTimeout(function(){document.getElementById('home-button').innerHTML='<button>enter</button>'},2500)
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
            <p id="date-time"></p>
            <div className="home-head">
              <p>George Ruiz</p>
              <p>Portfolio 2020</p>
              {dateTime}
            </div>
            <div className="about-img">
                <img alt="n/a" id="pixel-img" onLoad={imagePixelator()} src={me22} />
              </div>
            <div className="boot-up-info">
                <p id="boot-text"></p>
                <p id="grab-text"></p>
                <p id="image-text"></p>
                <p id='done-text'></p>
                <Link to="/menu"><span id='home-button'></span></Link>
              </div>  

            </div>
        )
    }
  }
    




export default HomeComp