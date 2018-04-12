import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch,Redirect} from 'react-router-dom';
import './App.css';

import Login from './components/Login/login';
import Home from './components/Home/home';

import {store} from './store/store.js';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()
      
      

class App extends Component {
  // handleClick_app(){
  //   if(history.location.pathname=='/'){
  //     store.dispatch({type:'false'})
  //   }else{
  //     store.dispatch({type:'true'})
  //   }
  //   console.log('aaaaaa'+history.location.pathname)
  // }

  componentWillMount(){
    // this.handleClick_app();
    console.log(history.location.pathname)
    if(history.location.pathname==='/home'){
      // history.push('/');
    }
  }

 
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
