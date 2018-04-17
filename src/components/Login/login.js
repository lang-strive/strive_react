import React, { Component } from 'react';
import './login.css';
import '../../base.css';
import { Input ,Button ,Modal,message } from 'antd';
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            modal:'',
            secret_key:'6ebe76c9fb411be97b3b0d48b791a7c9',
            login_box:true,
            reg_box:false,
            reg_username:'',
            reg_password:'',
            reg_name:'',
            login_username:'',
            login_password:''
        }
    }
    componentDidMount(){
        
    }
    handleClick_login(){
        if(!this.state.login_username&&!this.state.login_password){
            message.info('账号，密码为空！');
        }else if(!this.state.login_username){
            message.info('账号为空！');
        }else if(!this.state.login_password){
            message.info('密码为空！');
        }else{
            let params = new URLSearchParams();
            params.append('username',this.state.login_username);  
            params.append('password',this.state.login_password);
            axios({
                url:'http://localhost:8088/login',
                data:params,
                method: 'post'
            }).then(data=>{
                console.log(data)
                if(data.data.number=='-1'){
                    message.info(data.data.msg);
                }else if(data.data.number=='0'){
                    message.success(data.data.msg);
                    this.props.history.push('/home');
                }else if(data.data.number=='-2'){
                    message.error(data.data.msg);
                }
            }).catch((res)=>{
                message.error('服务器错误！');
            })
        }
    }
    handleClick_showModal(){
        this.setState({
            visible:true
        })
    }
    handleOk(){
        if(!this.state.modal){
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
    handleChange_reg(name,e){
        let newState={};
        newState[name]=e.target.value
        this.setState(newState)
    }
    handleChange_login(name,e){
        let newState={};
        newState[name]=e.target.value;
        this.setState(newState)
    }
    handleClick_reg(){
        if(!this.state.reg_name&&!this.state.reg_username&&!this.state.reg_password){
            message.info('真实姓名，用户名，密码都为空！');
        }else if(!this.state.reg_name){
            message.info('真实姓名为空！');
        }else if(!this.state.reg_username){
            message.info('用户名为空！');
        }else if(!this.state.reg_password){
            message.info('密码为空！');
        }else{
            let params = new URLSearchParams();
            params.append('username',this.state.reg_username);  
            params.append('password',this.state.reg_password);
            params.append('name',this.state.reg_name);
            axios({
                url:'http://localhost:8088/reg',
                data:params,
                method: 'post'
            }).then(data=>{
                console.log(data)
                if(data.data.number=='-1'){
                    message.info(data.data.msg);
                    this.setState({
                        login_box:true,
                        reg_box:false  
                    }) 
                }else if(data.data.number=='0'){
                    message.success(data.data.msg);
                    this.setState({
                        login_box:true,
                        reg_box:false  
                    }) 
                }
            }).catch((res)=>{
                message.error('服务器错误！');
            })

        }
    }
    render(){
        return(
            <div className="login_banner">
                <h1 className="login_headline animated tada infinite">Strive</h1>
                <p className="login_describe">这是一个自己买服务器，配置，写前后台代码的网站。</p>
                <div className="login_modal_box" style={{display:this.state.login_box==true?'block':'none'}}>
                    <p><i>*</i><span>账号</span></p>
                    <Input placeholder="请输入账号" maxLength="11" className="login_input" onChange={this.handleChange_login.bind(this,'login_username')}/>
                    <p><i>*</i><span>密码</span></p>   
                    <Input placeholder="请输入密码" maxLength="18" type="password" className="login_input" onChange={this.handleChange_login.bind(this,'login_password')}/>
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
                    <Input placeholder="请输入姓名" maxLength="4" className="login_input" onChange={this.handleChange_reg.bind(this,'reg_name')}/>
                    <p><i>*</i><span>用户名</span></p>
                    <Input placeholder="请输入账号" maxLength="11" className="login_input" onChange={this.handleChange_reg.bind(this,'reg_username')}/>
                    <p><i>*</i><span>密码</span></p>
                    <Input placeholder="请输入密码" maxLength="18" type="password" className="login_input" onChange={this.handleChange_reg.bind(this,'reg_password')}/>
                    <Button type="primary" className="login_primary" onClick={this.handleClick_reg.bind(this)}>注册</Button>
                </div>
            </div>
        )
    }
}

// export default withRouter(Login);
export default Login;

