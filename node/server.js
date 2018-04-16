const express = require('express');
var server=express();
var RouterUser=express.Router();
server.listen(8088);

server.use('/',RouterUser);
/*登陆*/
RouterUser.get('/login',(req,res)=>{
    res.send('aaa');
});

/*注册*/
RouterUser.get('/reg',(req,res)=>{
    res.send('bbb');
});