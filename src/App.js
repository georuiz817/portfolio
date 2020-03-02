import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComp from './components/HomeComp.js'
import Menu from './components/Menu.js'
import AboutComp from './components/AboutComp.js'
import NavBar from './components/NavBar.js'
import Readme from './components/ReadmeFolder/Readme'

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container">
        <Switch>
        <Route exact path='/' component={HomeComp} />
          <Route exact path="/about" component={AboutComp}/> 
          <Route exact path="/menu" component={Menu}/>
          <Route exact path='/readme' component={Readme}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
