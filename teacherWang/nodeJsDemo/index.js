//引入nodejs模块
const http=require('http');
// console.log(http)
const hostname ="127.0.0.1";
const port = 3000;

//创建http服务
var server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.write('hello nodejs');
    console.log(res.url);   
    res.end();
});


//启动服务并监听一个端口和ip
server.listen(port,hostname,()=>{
    console.log("服务器已启动！");
    console.log('hello')
});