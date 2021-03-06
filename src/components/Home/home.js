import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './home.css';
import '../../base.css';
import 'animate.css';
import { BrowserRouter as Router , Route , Link , Switch,withRouter,Redirect} from 'react-router-dom';
import {store} from '../../store/store.js';
import HomePage from './home_page.js';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class Home extends Component{
    constructor(){
        super();
        this.state={
            web:false,
            superman:false,
            setSetting:false
        }
    }
    handleClick_home(){
        this.props.history.replace('/home');
    }
    handleClick_web_mousemover(){
        this.setState({
            web:true
        })
    }
    handleClick_web_mouseout(){
        this.setState({
            web:false
        })
    }

    handleClick_superman_mousemover(){
        this.setState({
            superman:true
        })
    }
    handleClick_superman_mouseout(){
        this.setState({
            superman:false
        })
    }

    handleClick_setSetting_mousemover(){
        this.setState({
            setSetting:true
        })
    }
    handleClick_setSetting_mouseout(){
        this.setState({
            setSetting:false
        })
    }

    handleClick_btn(){
        if(this.refs.home_module2_btn.className.indexOf('active')!=-1){
            function handleClick_btn(obj){
                obj.classList.remove('active');
            }
            handleClick_btn(this.refs.home_module2_background);
            handleClick_btn(this.refs.home_module2_btn);
            handleClick_btn(this.refs.home_module2_menu);
        }else{
            function handleClick_btnTwo(obj){
                obj.classList.add('active');
            }
            handleClick_btnTwo(this.refs.home_module2_background);
            handleClick_btnTwo(this.refs.home_module2_btn);
            handleClick_btnTwo(this.refs.home_module2_menu);
        }
    }
    handleClick_background(){
        function handleClick_background(obj){
            obj.classList.remove('active');
        }
        handleClick_background(this.refs.home_module2_background);
        handleClick_background(this.refs.home_module2_btn);
        handleClick_background(this.refs.home_module2_menu);
    }
    render(){
        var b=function(){
            return <p style={{paddingTop:'500px'}}>bbbbbbb</p>    
        }
        return (
            <div className="home_box">
                <div className="home_nav">
                    <div className="home_header clearfix">
                        <h1 className="home_headline fl" onClick={this.handleClick_home.bind(this)}>Strive</h1>
                        <ul className="home_module">
                            <li onMouseOver={this.handleClick_web_mousemover.bind(this)} onMouseOut={this.handleClick_web_mouseout.bind(this)}>
                                <div className={this.state.web==true?'home_hover':''}>Web</div>
                                <ol style={{display:this.state.web==true?'block':'none'}}>
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
                            <li onMouseOver={this.handleClick_superman_mousemover.bind(this)} onMouseOut={this.handleClick_superman_mouseout.bind(this)}>
                                <div className={this.state.superman==true?'home_hover':''}>Superman</div>
                                <ol style={{display:this.state.superman==true?'block':'none'}}>
                                    <li>PersonalStation</li>
                                    <li>Resume</li>
                                </ol>  
                            </li>
                            <li onMouseOver={this.handleClick_setSetting_mousemover.bind(this)} onMouseOut={this.handleClick_setSetting_mouseout.bind(this)}>
                                <div className={this.state.setSetting==true?'home_hover':''}>设置</div>
                                <ol style={{display:this.state.setSetting==true?'block':'none'}}>
                                    <li>修改密码</li>
                                    <li>更换头像</li>
                                    <li>退出</li>
                                </ol>  
                            </li>
                        </ul>
                        <div className="home_module2">
                            <div className="home_module2_background" ref="home_module2_background" onClick={this.handleClick_background.bind(this)}></div> 
                            <div className="home_module2_btn" ref="home_module2_btn" onClick={this.handleClick_btn.bind(this)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div  className="home_module2_menu" ref="home_module2_menu">
                                <ul>
                                    <li><span>Web</span></li> 
                                    <ol>
                                        <li><i></i>NodeJS</li>
                                        <li><i></i>JS</li>
                                        <li><i></i>Vue</li>
                                        <li><i></i>React</li>
                                        <li><i></i>ES6</li>
                                        <li><i></i>H5</li>
                                        <li><i></i>Webpack</li>
                                        <li><i></i>微信小程序</li>
                                    </ol>
                                    <li><span>Superman</span></li>   
                                    <ol>
                                        <li><i></i>PersonalStation</li>
                                        <li><i></i>Resume</li>
                                    </ol>
                                    <li><span>设置</span></li> 
                                    <ol>  
                                        <li><i></i>修改密码</li>
                                        <li><i></i>更换头像</li>
                                        <li><i></i>退出</li>
                                    </ol>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>

                <Switch>
                    <Route path="/home/b" exact component={b}/>
                    <Route path="/home" exact component={HomePage}/>
                </Switch>

                <div className="home_tail">
                    <p className="animated bounce infinite">陈浪</p>
                    <p>2018-2018</p>
                </div>
            </div>
        )
    }
} 


export default withRouter(Home);
