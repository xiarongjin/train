ts是js的一个超集，拓展了js的语法
 TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。

 ts通过编译后的js文件可以在任何浏览器中运行

npm安装ts编译环境
 $ npm install -g typescript
使用命令编译ts文件 tsc filename.ts


在index.ts文件里面编写ts代码,通过tsc命令将其编译成js文件，并在index.html中引入。
通过浏览器打开index.html文件查看效果

注意:在html文件中引用的都是js文件，而js文件均由同名ts文件编译得来。
