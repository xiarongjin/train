var express =require("express")
var router=require('./route/index')
// console.log(express)
var app=express();
var bodyParser = require('body-parser')
var static = express.static('static');

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(static)
app.use(router)


app.listen(3000,function () { 
     console.log('服务器已启动')
})