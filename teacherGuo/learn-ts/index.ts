// alert('hello world in TypeScript!');
// 类型批注（可选的、编译时会报警告提示但可以被忽略）
// function area(shape: string, width: number, height: number) {
//     var area = width * height;
//     return "这是一个 " + shape + " 面积为 " + area + "平方厘米";
// }
 
// document.body.innerHTML = area("长方形", 30, 15);

// 接口
interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}
 
function area(shape : Shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
 
console.log( area( {name: "rectangle", width: 30, height: 15} ) );
console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );
//属性后面接问号表示非必须没有不会报错，但其他的比如name缺失则会警告
// console.log( area( { width: 30, height: 15} ) );
//ps:我所使用的vscode环境会直接编译报错所以不好演示

// 箭头函数表达式相当于js中的函数，自动将函数中的this指向附加到上下文中
//例中定时器函数中的this已经有了报错提示，因为其是一个空值。同样在控制台中也是没法看到他的值
var shape = {
    name: "rectangle",
    popup: function() {
 
        console.log('This inside popup(): ' + this.name);
 
        setTimeout(function() {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
        // 使用箭头函数替换一下
        //编译之后我们可以看到js文件中将此处的this换成了_this，_this指向的就是上下文中的this
        setTimeout(()=> {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
 
    }
};
shape.popup();
