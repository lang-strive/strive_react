import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login/login';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Link to='/'></Link>
            <Route exact path='/' component={Login}/>
            {/* <Login/> */}
          </div>
        </Router>
    );
  }
}

export default App;
