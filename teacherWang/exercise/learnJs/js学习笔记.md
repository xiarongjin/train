# js笔记

1.什么是js？
    Javascript是运行在浏览器端的一门脚本语言。
2.引入方式
    1）内部写入`<script>`标签
    2）外部引入js文件`<script src="path">`
3.输出方式
    1）console.log控制台输出
    2）document.write 写到html文档中
    3）window。alert弹出警示框
4.声明方式
    1）变量声明的方式
        var：不是块级作用域
        let、const块级作用域
        const值不可修改
5.数据类型
    以下数据类型放在栈内存中
    1）数值类型（number）
      方法 toString  十进制转化为其他进制
           parseInt  其他进制转化为十进制
        浮点数值不能比较（浮点数计算时可能有问题）
        NaN(not a number)
            在数学计算错误时，结果会是NaN（如0/0，“a”*9）
    2）字符串类型（string）
        1、声明字符串：加单引号或者是双引号
        2、字符串连接：使用的是+；
        3、模板字符串： console.log(`${username}同学，年龄是${age}岁，来自${from}`);
    3）布尔类型（boolean）
        布尔值只有两个值，并且都是小写的。
        一般用来做比较结果
    4）undefined
    5）null（object）
        null和undefined的区别
            1、类型不相等
            2、强制类型转换值不一样
    6）堆内存的地址
    以下数据类型存放在堆内存中(引用类型)
    1）对象（object）
        对象是引用类型，放在堆内存中，内存地址放在栈内存里。
        通过object.property或object['property']来获取属性值
    1）数组（object）
    2）函数（function）
