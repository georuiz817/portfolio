import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComp from './components/HomeComp.js'
import NavBar from './components/NavBar.js'
import Menu from './components/Menu.js'
import AboutComp from './components/AboutComp.js'

function App() {
  return (
    <Router>
     <NavBar/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={HomeComp} />
          <Route exact path="/about" component={AboutComp}/> 
          <Route exact path="/menu" component={Menu}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
