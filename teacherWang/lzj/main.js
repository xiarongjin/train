var express=require('express');
var app=express();
var path=require("path");
var session = require('express-session')
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 's3Cur3',
  name: 'sessionId'
}))
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
//静态路径
var static=express.static('views/static')
app.use(static)
//art-template模板引擎
app.engine('html',require('express-art-template'));
//前面的views是默认文件名称不能更改，后面的是自己的文件名称
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');

//路由
// app.all("*",function(req,res,next){
//    //设置允许跨域的域名，*代表允许任意域名跨域
//    res.header("Access-Control-Allow-Origin","*");
//    //允许的header类型
//    res.header("Access-Control-Allow-Headers","content-type");
//    //跨域允许的请求方式 
//    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
//    if (req.method.toLowerCase() == 'options')
//        res.send(200);  //让options尝试请求快速结束
//    else
//        next();
// })
app.use('/system',require('./guard/loginguard'))
app.use('/system',require('./router/system'))
app.use('/web',require('./router/web'))

app.listen(80,function(){
    console.log("服务器启动")
})