import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom';
import './App.css';

import Login from './components/Login/login';
import Home from './components/Home/home';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Link to='/'></Link>
            <Link to='/home'></Link>
            <Switch>
              <Route exact path='/' component={Login}/>
              {/* <Login/> */}
              <Route exact path='/home' component={Home}/>
              <Route component={Home}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
