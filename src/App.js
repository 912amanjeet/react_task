import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Login from './Login';

import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router>
      <div>
        <ul>
       
          <li>
            <Link to="/Login">Login</Link>
          </li>
         
         
        </ul>

        <Switch >
        
        <Route path="/Login">
            <Login />
          </Route>
        
         
         
        </Switch>
      </div>
    </Router>
        </header>
       
      </div>
      
    );
  }
}

export default App;