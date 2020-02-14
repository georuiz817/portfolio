import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class HomeComp extends Component {
    
    

    componentDidMount(){
     setTimeout(function(){document.getElementById('boot-text').innerHTML = "<p>Booting up</p>"}, 2000);
     setTimeout(function(){document.getElementById('grab-text').innerHTML = "<p>Grabbing portfolio information</p>"}, 3000);
     setTimeout(function(){document.getElementById('image-text').innerHTML='<p>Uploading Images</p>'},4000);
     setTimeout(function(){document.getElementById('done-text').innerHTML='<p>Done</p>'},5000)
     setTimeout(function(){document.getElementById('home-button').innerHTML='<button>enter</button>'},6000)
  }
    

    render(){
        return(
     
            <div className="booting" >
            <p id="date-time"></p>
            <div className="home-head">
              <p>George Ruiz</p>
              <p>Portfolio 2020</p>
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