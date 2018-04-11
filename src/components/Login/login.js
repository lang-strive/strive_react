import React, { Component } from 'react';
import './login.css';
import '../../base.css';
import { Input ,Button } from 'antd';
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props);
    }
    handleClick_login(){
        this.props.history.push('/home');
    }
    render(){
        return(
            <div className="login_banner">
                <h1 className="login_headline animated tada infinite">Strive</h1>
                <p className="login_describe">这是一个自己买服务器，配置，写前后台代码的网站。</p>
                <div className="login_modal_box">
                    <p><i>*</i><span>账号</span></p>
                    <Input placeholder="请输入账号" maxLength="11" className="login_input"/>
                    <p><i>*</i><span>密码</span></p>   
                    <Input placeholder="请输入密码" maxLength="18" type="password" className="login_input"/>
                    <Button type="primary" onClick={this.handleClick_login.bind(this)} className="login_primary">登陆</Button>
                </div> 
            </div>
        )
    }
}

// export default withRouter(Login);
export default Login;

