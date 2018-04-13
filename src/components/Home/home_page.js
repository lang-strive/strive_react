import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'animate.css';


class HomePage extends Component{
    constructor(){
        super();
    }
    handleScroll(e){
        var scrollTop = document.body.scrollTop;
        // console.log('滚动距离 '+scrollTop)
        // console.log('设备宽度'+document.body.clientWidth)
        // console.log('可视区'+document.body.offsetHeight)

        /*xs*/
        if(document.body.clientWidth>='0'&&document.body.clientWidth<='576'){
            // alert('xs')
            function xs(obj,animate,scrollMin,scrollMix){
                if(scrollTop>=scrollMin&&scrollTop<=scrollMix){
                    obj.style.visibility='visible';
                    obj.style.animationName=animate;
                }
            }
            xs(this.refs.web_one,'bounceInLeft',0,200);
            xs(this.refs.web_two,'bounceInRight',0,400);
            xs(this.refs.web_three,'bounceInDown',300,700);
            xs(this.refs.web_four,'bounceInUp',600,900);
            xs(this.refs.web_five,'flipInX',900,1300);
            xs(this.refs.web_six,'slideInDown',1100,1800);
            xs(this.refs.web_seven,'slideInLeft',1400,2000);
            xs(this.refs.web_eight,'lightSpeedIn',1900,2200);

            xs(this.refs.superman_one,'jello',2200,2500);
            xs(this.refs.superman_two,'fadeInUpBig',2500,2900);
        }

        /*sm*/
        if(document.body.clientWidth>='576'&&document.body.clientWidth<='768'){
            // alert('sm')
            function sm(obj,animate,scrollMin,scrollMix){
                if(scrollTop>=scrollMin&&scrollTop<=scrollMix){
                    obj.style.visibility='visible';
                    obj.style.animationName=animate;
                }
            }
            sm(this.refs.web_one,'bounceInLeft',0,200);
            sm(this.refs.web_two,'bounceInRight',0,200);
            sm(this.refs.web_three,'bounceInDown',0,200);
            sm(this.refs.web_four,'bounceInUp',0,200);
            sm(this.refs.web_five,'flipInX',400,900);
            sm(this.refs.web_six,'slideInDown',400,900);
            sm(this.refs.web_seven,'slideInLeft',600,1100);
            sm(this.refs.web_eight,'lightSpeedIn',600,1100);

            sm(this.refs.superman_one,'jello',600,1050);
            sm(this.refs.superman_two,'fadeInUpBig',600,1050);
        }

        /*md*/
        if(document.body.clientWidth>='768'&&document.body.clientWidth<='992'){
            // alert('md')
            function md(obj,animate,scrollMin,scrollMix){
                if(scrollTop>=scrollMin&&scrollTop<=scrollMix){
                    obj.style.visibility='visible';
                    obj.style.animationName=animate;
                }
            }
            md(this.refs.web_one,'bounceInLeft',0,200);
            md(this.refs.web_two,'bounceInRight',0,200);
            md(this.refs.web_three,'bounceInDown',0,200);
            md(this.refs.web_four,'bounceInUp',0,200);
            md(this.refs.web_five,'flipInX',0,200);
            md(this.refs.web_six,'slideInDown',0,200);
            md(this.refs.web_seven,'slideInLeft',200,600);
            md(this.refs.web_eight,'lightSpeedIn',200,600);

            md(this.refs.superman_one,'jello',600,725);
            md(this.refs.superman_two,'fadeInUpBig',600,725);
        }

        /*lg*/
        if(document.body.clientWidth>='992'&&document.body.clientWidth<='1200'){
            // alert('lg')
            function lg(obj,animate,scrollMin,scrollMix){
                if(scrollTop>=scrollMin&&scrollTop<=scrollMix){
                    obj.style.visibility='visible';
                    obj.style.animationName=animate;
                }
            }
            lg(this.refs.web_one,'bounceInLeft',0,200);
            lg(this.refs.web_two,'bounceInRight',0,200);
            lg(this.refs.web_three,'bounceInDown',0,200);
            lg(this.refs.web_four,'bounceInUp',0,200);
            lg(this.refs.web_five,'flipInX',0,200);
            lg(this.refs.web_six,'slideInDown',0,200);
            lg(this.refs.web_seven,'slideInLeft',0,200);
            lg(this.refs.web_eight,'lightSpeedIn',0,200);

            lg(this.refs.superman_one,'jello',200,600);
            lg(this.refs.superman_two,'fadeInUpBig',200,600);
        }

        /*xl*/
        if(document.body.clientWidth>='1200'){
            // alert('xl')
            function xl(obj,animate,scrollMin,scrollMix){
                if(scrollTop>=scrollMin&&scrollTop<=scrollMix){
                    obj.style.visibility='visible';
                    obj.style.animationName=animate;
                }
            }
            xl(this.refs.web_one,'bounceInLeft',0,200);
            xl(this.refs.web_two,'bounceInRight',0,200);
            xl(this.refs.web_three,'bounceInDown',0,200);
            xl(this.refs.web_four,'bounceInUp',0,200);
            xl(this.refs.web_five,'flipInX',0,200);
            xl(this.refs.web_six,'slideInDown',0,200);
            xl(this.refs.web_seven,'slideInLeft',0,200);
            xl(this.refs.web_eight,'lightSpeedIn',0,200);

            xl(this.refs.superman_one,'jello',200,600);
            xl(this.refs.superman_two,'fadeInUpBig',200,600);
        }

        
    }
    componentDidMount(){
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll.bind(this))
            // this.refs.aaa.style.visibility='visible';
            // this.refs.aaa.style.animationName='fadeInDown';

    }
    componentDidUpdate(){
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }
    render(){
        return (
            <div style={{overflowX :'hidden'}}>
                <nav className="home_nav_headline_first animated" style={{visibility: 'visible', animationName: 'bounceIn'}}>Web</nav>
                <div className="home_nav_content">
                    <Row type="flex" justify="center" gutter={{xl:30,lg:30,md:25,sm:20}}>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list" ref="web_one" style={{visibility: 'hidden', animationName: 'none'}}>
                                <ul>
                                    <li><img src="./img/home_node.jpg"/></li>
                                    <li>NodeJS</li>
                                    <li>node.js基本模块的使用和npm包管理器，express框架，mysql基本操作。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20} >
                            <div className="home_nav_content_list" ref="web_two" style={{visibility: 'hidden', animationName: 'none'}}>
                                <ul>                                                                                    
                                    <li><img src="./img/home_js.jpg"/></li>
                                    <li>JS</li>
                                    <li>js基本语法，this指向和闭包，面向对象编程。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list" ref="web_three" style={{visibility: 'hidden', animationName: 'none'}}>
                                <ul>
                                    <li><img src="./img/home_vue.jpg"/></li>
                                    <li>Vue</li>
                                    <li>Vue组件开发，高阶用法，封装插件，各类问题汇总。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20} >
                            <div className="home_nav_content_list" ref="web_four" style={{visibility: 'hidden', animationName: 'none'}}>
                                <ul>
                                    <li><img src="./img/home_react.jpg"/></li>
                                    <li>React</li>
                                    <li>react基本用法，jsx语法，redux数据流。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list" ref="web_five" style={{visibility: 'hidden', animationName: 'none'}}>
                                <ul>
                                    <li><img src="./img/home_es6.jpg"/></li>
                                    <li>ES6</li>
                                    <li>ES6常用语法，新特性，promise异步操作。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list" ref="web_six" style={{visibility: 'hidden', animationName: 'none'}}>
                                <ul>
                                    <li><img src="./img/home_h5.jpg"/></li>
                                    <li>H5</li>
                                    <li>H5新特性，HTTP、HTTPS、安全通信。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list" ref="web_seven" style={{visibility: 'hidden', animationName: 'none'}}>
                                <ul>
                                    <li><img src="./img/home_webpack.jpg"/></li>
                                    <li>Webpack</li>
                                    <li>入口文件，出口文件，loader转换器，plugins插件。</li>
                                    <li className="clearfix"><span>4个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20} >
                            <div className="home_nav_content_list" ref="web_eight" style={{visibility: 'hidden', animationName: 'none'}}>
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
                <nav className="home_nav_headline animated" style={{visibility: 'visible', animationName: 'bounceIn'}}>Superman</nav>
                <div className="home_nav_content">
                    <Row type="flex" justify="center" gutter={{lg:30,md:25,sm:20}}>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list" ref="superman_one" style={{visibility: 'hidden', animationName: 'none'}}>
                                <ul>
                                    <li><img src="./img/home_personal_station.jpg" style={{top:'-40px'}}/></li>
                                    <li>PersonalStation</li>
                                    <li>个人站</li>
                                    <li className="clearfix"><span>1个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20}>
                            <div className="home_nav_content_list" ref="superman_two" style={{visibility: 'hidden', animationName: 'none'}}>
                                <ul>
                                    <li><img src="./img/home_resume.jpg" style={{left:'-26px',top:'-189px'}}/></li>
                                    <li>Resume</li>
                                    <li>个人简历</li>
                                    <li className="clearfix"><span>1个目录</span><strong className="fr">Strive</strong></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20}>

                        </Col>
                        <Col xl={5} lg={5} md={7} sm={11} xs={20}>

                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default HomePage;