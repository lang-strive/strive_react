import React, { Component } from 'react';
import './login.css';
import '../../base.css';
import { Input ,Button ,Modal,message } from 'antd';
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            modal:'',
            secret_key:'6ebe76c9fb411be97b3b0d48b791a7c9',
            login_box:true,
            reg_box:false
        }
    }
    componentDidMount(){

    }
    handleClick_login(){
        this.props.history.push('/home');
    }
    handleClick_showModal(){
        this.setState({
            visible:true
        })
    }
    handleOk(){
        if(this.state.modal==''){
            message.info('请输入秘钥！');
        }else if(this.state.modal!=this.state.secret_key){
            message.error('秘钥错误！');
        }else{
            message.success('恭喜你密钥正确！');
            this.setState({
                visible:false,
                login_box:false,
                reg_box:true  
            })
        }
    }
    handleChange_modal(e){
        this.setState({
            modal:e.target.value
        })
    }
    handleCancel(){
        this.setState({
            visible:false
        })
    }
    render(){
        return(
            <div className="login_banner">
                <h1 className="login_headline animated tada infinite">Strive</h1>
                <p className="login_describe">这是一个自己买服务器，配置，写前后台代码的网站。</p>
                <div className="login_modal_box" style={{display:this.state.login_box==true?'block':'none'}}>
                    <p><i>*</i><span>账号</span></p>
                    <Input placeholder="请输入账号" maxLength="11" className="login_input"/>
                    <p><i>*</i><span>密码</span></p>   
                    <Input placeholder="请输入密码" maxLength="18" type="password" className="login_input"/>
                    <Button type="primary" onClick={this.handleClick_login.bind(this)} className="login_primary">登陆</Button>
                    <strong className="reg" onClick={this.handleClick_showModal.bind(this)}>注册账号</strong>  
                    <Modal
                        title="友情提示"
                        visible={this.state.visible}
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                        className="modal"
                        ref="Modal"
                        okText="确定"
                        cancelText="取消"
                        >
                        <p style={{color:'#48576a',fontSize: '14px'}}>请输入邀请码</p>
                        <p><Input placeholder="请输入邀请码" maxLength="32" style={{height:'35px'}} onChange={this.handleChange_modal.bind(this)}/></p>
                    </Modal>
                </div> 
                <div className="login_modal_box_reg" style={{display:this.state.reg_box==true?'block':'none'}}>
                    <p><i>*</i><span>真实姓名</span></p>
                    <Input placeholder="请输入姓名" maxLength="4" className="login_input"/>
                    <p><i>*</i><span>用户名</span></p>
                    <Input placeholder="请输入账号" maxLength="11" className="login_input"/>
                    <p><i>*</i><span>密码</span></p>
                    <Input placeholder="请输入密码" maxLength="18" type="password" className="login_input"/>
                    <Button type="primary" className="login_primary">注册</Button>
                </div>
            </div>
        )
    }
}

// export default withRouter(Login);
export default Login;

