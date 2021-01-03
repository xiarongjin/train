var express=require('express');
var connect = require('../utils/connect')
var router=express.Router();
function connectMysql(sql, callback) {
    connect.query(sql, function (error, data, fields) {
      if (error) {
       console.log(error);
      }
      callback(data);
    });
  }



router.get('/',function(req,res){
    res.render('system/login',{
        user:{
            name:'aui',
            tags:['art','template','nodejs']
        }
    })
});

router.get('/index',function(req,res){
  res.render('system/index',{
      
  })
});

//查询课程
router.get('/doc',function(req,res){
    // console.log(req.query)
    var currentPage=req.query.currentPage;
    // var currentPage = req.query.currentPage;
    // if(req.query.currentPage>0&&){
    //     currentPage=req.query.currentPage
    // }else{
    //     currentPage=1;
    // }
    // console.log(currentPage)
    var pageNum=10;
    // console.log((currentPage-1)*pageNum)
    
    let sql1=`select count(1) as record from t_lesson`;
    
    connectMysql(sql1,data1=>{
      let  pageCount= Math.ceil(data1[0].record/10)
        if (currentPage>0&&currentPage<pageCount) {
            currentPage=currentPage;
        }else if(currentPage<=0){
            currentPage=1;
        }else{
                currentPage=pageCount;
        }
        var startRow=(currentPage-1)*pageNum;
        let sql2=`select * from t_lesson limit ${startRow},${pageNum}`;
        // console.log(data1)
        connectMysql(sql2,data2=>{
            // console.log(sql2)
          
            res.render('system/pages_doc',{
                target:"doc",
                lesson:data2,
                pageCount:pageCount,
                currentPage:currentPage
            })
        })
    })
    console.log("查询成功")
    
});
// 添加课程
router.post('/lesson',function (req,res) {
    var {title,name,teacher,students,status}=req.body;
    connectMysql(`insert into t_lesson(title,name,teacher,students,status)
    values('${title}',"${name}",'${teacher}','${students}','${status}')`,function (data) {
        res.redirect('/system/doc')
    }) 
    console.log("添加成功") 
})
//修改课程
// 获取要修改课程的id
router.get('/modify',function (req,res) {
    var lesson_id=req.query.lesson_id;
    let sql=`select * from t_lesson where id='${lesson_id}'`
    connectMysql(sql,data=>{
        console.log(1,data[0])
        res.render('system/pages_add_doc',{
            // target:"add_doc",
            user2:data[0],
            modify:'modify'
        })
    })
})

//根据Id修改课程信息
router.post('/modify',function (req,res) {
    console.log(req.body)
    var {lesson_id,title,name,teacher,students,status}=req.body;
    let sql=`UPDATE t_lesson set title='${title}',name="${name}",teacher='${teacher}',students='${students}',status='${status}' WHERE id=${lesson_id}`
    connectMysql(sql,data=>{
        // res.sendy(data)
        res.redirect('/system/doc');
    })
    console.log('修改成功');
})
//删除课程
router.delete('/del_lesson',function (req,res) {
   console.log(req.query)
   let sql =`delete from t_lesson where id=${req.query.lesson_id}`;
   connectMysql(sql,data=>{
    //    console.log(sql)
       res.sendy(data)
   })
   console.log("删除成功")
})




router.get('/config',function(req,res){
    res.render('system/pages_config',{
        target:"config"
    })
});
router.get('/rabc',function(req,res){
    res.render('system/pages_rabc',{
        target:"rabc"
    })
});
router.get('/add_doc',function(req,res){
  res.render('system/pages_add_doc',{
        target:"add_doc",
        modify:'false'
    })
});
router.get('/guide',function(req,res){
    res.render('system/pages_guide',{
        target:"guide"
    })
});
router.get('/login',function(req,res){
    res.render('system/pages_login',{})
});
router.get('/pages_error',function(req,res){
    res.render('system/pages_error',{})
});

// 登录接口
router.post('/login',function (req,res) {
  var {username,password}=req.body;
  let sql =`select * from t_user where username= '${username}' and password='${password}'`;
//   console.log(sql)
  connectMysql(sql,(data)=>{
        // console.log(data) 
    if(data.length > 0){
          req.session.user =data[0];
          req.app.locals.user=data[0];
        //   console.log(req.session.user)
        //   res.render('system/index',{
        //     //   user:data[0]
        //   })
        console.log('登录成功！')
        res.redirect('/system/index')
      }else{
          res.redirect('/system/login')
      }
  })
  

})

// 退出登录接口
router.get('/loginout',function (req,res) {
    req.session.user =null;
          req.app.locals.user=null;
    res.redirect('/system/login')
})


module.exports=router;