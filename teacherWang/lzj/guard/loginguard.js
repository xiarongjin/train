module.exports=function (req,res,next) {
    if(req.url!=='/login'&&!req.session.user){
        res.render('system/pages_login.html')
    }else{
        next()
    }
}