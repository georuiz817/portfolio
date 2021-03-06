import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComp from './components/HomeComp.js'
import Menu from './components/Menu.js'
import AboutComp from './components/AboutComp.js'
import NavBar from './components/NavBar.js'
import ErrorComp from './components/ErrorComp'
import EditComp from './components/EditComp'
//import ProjectMenu from './components/ProjectComps/ProjectMenu'
//<Route exact path='/projects' component={ProjectMenu}/>

function App() {
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={HomeComp} />
          <Route exact path="/about" component={AboutComp}/> 
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/edit" component={EditComp}/>
          <Route component={ErrorComp} />
        </Switch>
    </Router>
  );
}

export default App;
