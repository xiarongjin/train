var express=require('express');
var router=express.Router();
var bodyParser=require('body-parser');
router.get('/',function(req,res){
    res.render('web/index.html',{
        user:{
            name:'aui',
            tags:['art','template','nodejs']
        }
    })
});

module.exports=router;
// router.post('/register', function (req, res) {
//     console.log(req.body)
//     var user = req.body
//     console.log(user.password)
//     getPass(`${user.password}`).then(res => {
//         return res; // console.log(user.password)
//     }).then(res => {
//         console.log(res)
//         connection = mysql.createConnection(connection.config);
//         connection.connect();
//         var sql = `INSERT INTO t_user(username,password,telnum) VALUES ('${user.name}','${res}','${user.telnum}')`;
//         console.log(sql)
//         connectMysql(sql, function (err, data) {
//             res.send({
//                 msg: '注册成功',
//                 code: 1
//                 // name:req.body.name

//             })

//             connection.end();
//         })
//     })
// })
    