import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import './App.css';

class Home extends Component{
  render(){
    return (
      <div>sdf</div>
    )
  }
}

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <div className='ba'></div>
            <Link to="/">111</Link>
            <Link to="/222">222</Link>
            <Link to="/333">333</Link>
            <Route exact path='/' component={Home}/>
          </div>
        </Router>
    );
  }
}

export default App;
