var url=require('url');
//  console.log(url);
// var urlObj=url.parse('http://www.beian.gov.cn/apply/subject?token=8f21626e-c440-4e8e-8bd1-4ab62128d9b2')
// console.log(urlObj)
// console.log(url.format({
//     protocol: 'http:',
//     host:'127.0.0.1:80',
//     search:'name=zhangsan'
// }))

console.log(url.resolve(
    "http://www.baidu.com/",
    "/a/b?name=zhangsan"
))