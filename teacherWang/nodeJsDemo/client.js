var http=require('http');
var options={hostname:'www.webxrj.top',port:80,method:"get"}
var req=http.request(options,function (res) {
    res.on('data',function (chunk) {
        console.log(chunk.toString())
      })
  })
  req.end()