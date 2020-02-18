import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComp from './components/HomeComp.js'
import Menu from './components/Menu.js'
import AboutComp from './components/AboutComp.js'
import ContactComp from './components/ContactComp.js'
import ProjectsComp from './components/ProjectsComp.js'
import NavBar from './components/NavBar.js'
function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container">
        <Switch>
        <Route exact path='/' component={HomeComp} />
          <Route exact path="/about" component={AboutComp}/> 
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/contact" component={ContactComp} />
          <Route exact path='/projects' component={ProjectsComp}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
