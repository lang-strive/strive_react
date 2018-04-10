import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './home.css';
import '../../base.css';
import 'animate.css';

class Home extends Component{
    render(){
        return (
            <div className="home_box">
                <div className="home_nav">
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
                <nav className="home_nav_headline_first">Web</nav>
                <div className="home_nav_content">
                    <Row type="flex" justify="center" gutter={{xl:30,lg:30,md:25,sm:20}}>
                        <Col xl={6} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_node.jpg"/></li>
                                    <li>NodeJS</li>
                                    <li>node.js基本模块的使用和npm包管理器，express框架，mysql基本操作。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={6} lg={5} md={7} sm={11} xs={20} >
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_js.jpg"/></li>
                                    <li>JS</li>
                                    <li>js基本语法，this指向和闭包，面向对象编程。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={6} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_vue.jpg"/></li>
                                    <li>Vue</li>
                                    <li>Vue组件开发，高阶用法，封装插件，各类问题汇总。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={6.5} lg={5} md={7} sm={11} xs={20} >
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_react.jpg"/></li>
                                    <li>React</li>
                                    <li>react基本用法，jsx语法，redux数据流。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={4} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_es6.jpg"/></li>
                                    <li>ES6</li>
                                    <li>ES6常用语法，新特性，promise异步操作。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={4} lg={5} md={7} sm={11} xs={20} >
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_h5.jpg"/></li>
                                    <li>H5</li>
                                    <li>H5新特性，HTTP、HTTPS、安全通信。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={4} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_webpack.jpg"/></li>
                                    <li>Webpack</li>
                                    <li>入口文件，出口文件，loader转换器，plugins插件。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={4} lg={5} md={7} sm={11} xs={20} >
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_xiaochengxu.jpg"/></li>
                                    <li>微信小程序</li>
                                    <li>小程序开发流程，App与Page wx与window添加事件等。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <nav className="home_nav_headline">Superman</nav>
                <div className="home_nav_content">
                    <Row type="flex" justify="center" gutter={{lg:30,md:25,sm:20}}>
                        <Col xl={4} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_personal_station.jpg" style={{top:'-40px'}}/></li>
                                    <li>PersonalStation</li>
                                    <li>个人站</li>
                                    <li className="clearfix"><span>1个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={4} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list">
                                <ul>
                                    <li><img src="./img/home_resume.jpg" style={{left:'-26px',top:'-189px'}}/></li>
                                    <li>Resume</li>
                                    <li>个人简历</li>
                                    <li className="clearfix"><span>1个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3} lg={5} md={7} sm={11} xs={20}>
    
                        </Col>
                        <Col xl={3} lg={5} md={7} sm={11} xs={20}>
    
                        </Col>
                    </Row>
                </div>
                <div className="home_tail">
                    <p className="animated bounce infinite">陈浪</p>
                    <p>2018-2018</p>
                </div>
            </div>
        )
    }
} 

export default Home