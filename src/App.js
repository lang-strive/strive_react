import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom';
import './App.css';

import Login from './components/Login/login';
import Home from './components/Home/home';

import {store} from './store/store.js';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()


class App extends Component {
  handleClick_sd(){
    // const unlisten = history.listen((location, action) => {

    //   // console.log(action, location.pathname, location.state)
    //     console.log(location.pathname)
    //       if(location.pathname=='/'){
    //         store.dispatch({type:'false'})
    //       }

    //   })
    //   history.push('/', { some: 'state' })
      
      
    //   unlisten()

    if(history.location.pathname=='/'){
      store.dispatch({type:'false'})
    }else{
      store.dispatch({type:'true'})
    }
    console.log('aaaaaa'+history.location.pathname)

  }
  componentWillMount(){
    this.handleClick_sd();
  }
  componentWillUpdate(){
    this.handleClick_sd();
  }  
 

  render() {
    return (
        <Router>
          <div className="App">
            <Link to='/'></Link>
            <Link to='/home'></Link>
            <div className="home_nav" style={{display:store.getState()==true?'block':'none'}}>
                <div className="home_header clearfix">
                    <h1 className="home_headline fl">Strive</h1>
                    <ul className="home_module">
                        <li>
                            <div>Web</div>
                            <ol>
                                <li>NodeJS</li>
                                <li>JS</li>
                                <li>Vue</li>
                                <li>React</li>
                                <li>ES6</li>
                                <li>H5</li>
                                <li>Webpack</li>
                                <li>微信小程序</li>
                            </ol>  
                        </li>
                        <li>
                            <div>Superman</div>
                            <ol>
                                <li>personalStation</li>
                                <li>resume</li>
                            </ol>  
                        </li>
                        <li>
                            <div>设置</div>
                            <ol>
                                <li>sd</li>
                                <li>sd</li>
                                <li>sd</li>
                                <li>sd</li>
                            </ol>  
                        </li>
                    </ul>
                </div>
            </div>
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
