const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const expressStatic = require('express-static');


var server=express();

server.listen(8088,'localhost');

/*数据库连接池*/
var db=mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'strive'
});

/*body-parser*/
server.use(bodyParser.urlencoded({
    extended:false
}));


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
server.use(allowCrossDomain);


/*设置路由*/
var RouterUser=express.Router();
server.use('/',RouterUser);

/*登陆*/
RouterUser.post('/login',(req,res)=>{
    let json=req.body;
    console.log(json)
    if(!json.username){
        res.send({"number":"-1","msg":"用户名为空！"});
    }else if(!json.password){
        res.send({"number":"-1","msg":"密码名为空！"});
    }else{
        let param = [json.username];
        var statement = 'SELECT * FROM login WHERE username= ?';
        db.query(statement,param,(err,data)=>{
            if(err){
                res.status(500).send({number:"-1",msg:'注册失败！'});
            }else{
                if(!data.length){
                    res.send({number:"-1",msg:'没有此用户！'});
                }else{
                    let param2 = [json.username,json.password];
                    var statement2 = 'SELECT * FROM login WHERE username= ? AND password= ?';
                    db.query(statement2,param2,(err,data)=>{
                        if(err){
                            res.status(500).send({number:"-1",msg:'注册失败！'});
                        }else{
                            if(!data.length){
                                res.send({number:"-2",msg:'密码错误！'});
                            }else{
                                res.send({number:"0",msg:'登陆成功！'});
                            }
                        }
                    })
                }
            }
        })
    }
});

/*注册*/
RouterUser.post('/reg',(req,res)=>{
    let json=req.body;
    console.log(json)
    if(!json.username){
        res.send({"number":"-1","msg":"用户名为空！"});
    }else if(!json.password){
        res.send({"number":"-1","msg":"密码名为空！"});
    }else if(!json.name){
        res.send({"number":"-1","msg":"真实姓名为空！"});
    }else{
        let param = [json.username];
        var statement = 'SELECT * FROM login WHERE username= ?';
        db.query(statement,param,(err,data)=>{
            if(err){
                console.log(json.username)
                console.log(err)
                res.status(500).send({number:"-1",msg:'注册失败！'});
            }else{
                if(!data.length){
                    let param2=[json.username,json.password,json.name];
                    let statement2='INSERT INTO login (username,password,name) VALUES( ?, ?, ?)'
                    db.query(statement2,param2,(err,data)=>{
                        if(err){
                            res.status(500).send({number:"-1",msg:'注册失败！'});
                        }else{
                            console.log(data);
                            res.send({"number":"0","msg":"注册成功！"});
                        }
                    })
                }else{
                    res.send({number:"-1",msg:'此用户已注册！'});
                }
            }
        })
    }
});
