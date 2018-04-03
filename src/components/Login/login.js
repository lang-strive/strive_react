import React, { Component } from 'react';
import './login.css';
import { Input ,Button } from 'antd';
import 'antd/dist/antd.css';

class Login extends Component{
    render(){
        return(
            <div className="login_banner">
                <h1 className="login_headline">Strive</h1>
                <p className="login_describe">这是一个自己买服务器，配置，写前后台代码的网站。</p>
                <div className="login_modal_box">
                    <p><i>*</i><span>账号</span></p>
                    <Input placeholder="请输入账号" maxLength="11" style={{width:'320px',height:'40px'}} className="login_input"/>
                    <p><i>*</i><span>密码</span></p>   
                    <Input placeholder="请输入密码" maxLength="18" type="password" style={{width:'320px',height:'40px'}} className="login_input"/>
                    <Button type="primary" className="login_primary">登陆</Button>
                </div> 
                <embed src="./music.mp3" hidden="true"/> 
            </div>
        )
    }
}

export default Login;