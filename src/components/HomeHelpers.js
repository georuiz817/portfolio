import me from '../photos/me.png'
import me4 from '../photos/me4.png'
import me8 from '../photos/me8.png'

const HomeHelpers = {
     BootText: function(){
        setTimeout(function(){document.getElementById('init-presentational-text').innerHTML = "<p>Initialize Presentational and Container Components...</p>"}, 1000);
        setTimeout(function(){document.getElementById('react-text').innerHTML = "<p>React Init Completed</p>"}, 1500);
        setTimeout(function(){document.getElementById('scss-text').innerHTML='<p>Bootstrap/Sass Beautification Rendered</p>'},2000);
        setTimeout(function(){document.getElementById('read-cards-text').innerHTML='<p>Intializing Read Cards and Quick Search Capabilities</p>'},2500);
        setTimeout(function(){document.getElementById('init-complete').innerHTML='<p>Career status: Applying</p>'},3000);
        setTimeout(function(){document.getElementById('done-text').innerHTML='<p>Done</p>'},3500)
        setTimeout(function(){document.getElementById('home-button').innerHTML='<button>enter</button>'},4200)
     },
    ///////////////////////////////////////////////////////////////////////////////////////////
     imagePixelator: function(){
        setTimeout(function(){document.getElementById('pixel-img').src = me8 }, 500);
        setTimeout(function(){document.getElementById('pixel-img').src = me4 }, 1000);
        setTimeout(function(){document.getElementById('pixel-img').src = me }, 1500);}
}


export default HomeHelpers;



     