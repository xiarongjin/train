1、什么是js?
    javascript,它是运行在浏览器端的一门脚本语言。

2、引入方式
    1)内部写`<script>`标签
    2)外部引入js文件`<script src="path">`

3、输出方式
    1)console.log 控制台输出
    2)document.write 写出到html文档中
    3)window.alert  弹出警告框

4、声明方式
    1)声明变量的方式
        var:不是块级作用域
        let:块级作用域

        声明变量如果不用var或者let,变量的作用域会提升。
        
    2)声明常量的方式
        const:块级作用域,并且值不可以修改

    3)命名规则
        首字母可以字母、下划线、$符号开头,后面可以是字母、数字、下划线、$
        不能用关键字、保留字命名
        驼峰命名

5、数据类型
    以下数据类型放在栈内存中(基本数据类型)
    1)数值类型(number)
        方法:toString   10进制转换为其他进制
             parseInt   其他进制转换为10进制
            浮点数值不能比较(浮点数计算时可能有问题)
        
        NaN(not a number)
            在数学计算错误时，结果会是NaN(如：0/0,'a'*9),NaN也是number类型

        声明数值的方式:1、var num=123;var num1=new Number(123);

    2)字符串类型(string)
        1、声明字符串的字面量,使用单引号或者双引号将值包起来。如果要在字符串中显示引号,则
        需要使用转义符(`\`) 

        2、拼接字符串使用`+`号

        3、模板字符串,用`符号包裹表达式,在表达式中,使用${variableName}来取到已经声明好的变量值

        声明字符串的方式:1、var str="hello";var str1=new String("hello");

    3)布尔类型(boolean)
        布尔值只有true和false两个值,并且都是小写。
        一般用来做比较结果
        在js比较中 `==`只需要两边的值一样就相等,`===`要求两边的值和数据类型都要一致;

        声明布尔值的方式:1、var bool=new Boolean();var bool1=true;

    4)undefined类型
        undefined类型只有一个值就是undefined,表示变量没有初始化值。

    5)null(object)
        null是object类型,是一种特殊的对象。存在栈内存中。

    以下数据类型放在堆内存中(引用类型)
    1)对象(object)
        对象是引用类型，放在堆内存中，内存地址放在栈内存中
        
        声明对象的方式:1、var obj=new Object();var obj1={};

        数值类型:Number()
        字符串类型:String()
        布尔类型:Boolean()
        对象类型:Object()
        数组类型:Array()
        
        构造函数都是首字母大写的。

        通过object.property或者object["property"]这两种方式去获取对象里面的属性

    1)数组(array)
    2)函数(function)

        函数也是对象,但是它的数据类型是function,函数是对象的实例,而对象是函数定义出来的。
        function abc(){}
        console.log(typeof abc)
        console.log(abc instanceof Object)


        构造函数:
            function Fun(){
                this.name="zhangsan";
                this.age=10;
            }

            function 人类 (humanName,humanAge){
                this.名字=humanName;
                this.age=humanAge;
            }
    
        普通函数
            function fun(){
                return 2020
            }

6、js中的运算符
    1)、算术运算符:+ - * / % ++ --
    2)、一元运算符:+ - ++ --
    3)、比较运算符:>,<,>=,<=,!=,!==,==,!==
    4)、逻辑运算符:与运算(and) &&,或运算(or)||, 非运算(not)!
    5)、赋值运算符:=,+=,-=,*=,/=,%=
    6)、三目运算符:表达式1?表达式2:表达式3

    隐式类型转换

    1)、字符串+数值------->把数值自动转换成字符串，然后进行字符串拼接操作
    2)、字符串(减、乘、除、%)数值时，会把字符串按Number方式自动转换成数值,这里的字符串必须是纯数字

    强制类型转换

    Number:纯数字字符串可转数字,true转成1,,false转成0,undefined转成NaN,null转成0
    Boolean:绝对值大于0的转成true,0转成false,字符串转成true,空字符串转false,undefined和null都转成false
    String:任何类型的值都可直接转成字符串
    


    