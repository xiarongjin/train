var fs=require("fs")
// console.log(fs)

// fs.readFile('d:\\fstest.txt',function (err,data) {
//     console.log(data.toString())
//   })


// fs.unlink('d:\\fstest.txtFGCCHVB1425',function (err) {
//     if(err){
//         console.log('删除文件失败')
//     }else{
//         console.log('删除文件成功')
//     }
//   })

fs.writeFile("d:\\fstest.txt",'test 测试',function (err) {
    if(err){
                console.log('文件写入失败')
            }else{
                console.log('文件写入成功')
                fs.readFile('d:\\fstest.txt','utf-8',function (err,data) {
                        console.log(data)
                      })
            }
  })