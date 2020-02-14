import React from 'react';
// styling 
import 'bootstrap/dist/css/bootstrap.min.css';
//extra
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//comps
import HomeComp from './components/HomeComp.js'
import NavBar from './components/NavBar.js'
import Menu from './components/Menu.js'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomeComp} />
          <Route exact path="/menu" component={Menu}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
