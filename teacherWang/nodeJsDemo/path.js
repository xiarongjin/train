const { normalize } = require('path');
var path=require('path');
// console.log(path)

// normalize格式化路径
// const str=path.normalize('abc/bar//baz/asdf/quesx/..')
// console.log(str)

// join路径拼接 
// const str=path.join("///foo",'bar','//baz/asfdafs')
// console.log(str)

//路径巡航
// const str =path.resolve('abc/bar','/sadasd/hkj/..','a/abc/yiyiuy','..')
// console.log(str)

//路径分割
// console.log(path.posix.sep)
// console.log(path.sep)
// console.log("baz/asfdafs/abc".split(path.sep))
// console.log("baz/asfdafs/abc".split(path.posix.sep))

// const str=path.dirname('foo/bar/baz/asdf/qweqw')
// console.log(str);

// const str=path.basename('foo/bar/baz/asdf/qweqw.html')
// const too=path.basename('foo/bar/baz/asdf/qweqw.html','.html')
// console.log(str,too)

// console.log(__dirname)
// console.log(__filename)