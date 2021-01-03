//TypeScript支持集成了可选的类型批注支持的ECMAScript 6的类。
//类
class Shape {
 
    area: number;
   private color: string;
 
    constructor ( public name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };
 
    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}
 
var square = new Shape("square", 30, 30);
 
console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );
console.log( 'Name of Shape: ' + square.name );
console.log( 'Color of Shape: ' + square.color );
console.log( 'Width of Shape: ' + square.width );
console.log( 'Height of Shape: ' + square.height );

// 以上 Shape 类中有两个属性 area 和 color，一个构造器 (constructor()), 一个方法是 shoutout() 。

// 构造器中参数(name, width 和 height) 的作用域是局部变量，所以在shoutout中调用的时候是undefined

// public 和 private 访问修饰符。Public 成员可以在任何地方访问， private 成员只允许在类中访问。


//继承

// 继承一个已存在的类并创建一个派生类，继承使用关键字 extends。
// Shape3D 继承了 Shape 类, 也继承了 Shape 类的 color 属性。
// 构造函数中，super 方法调用了基类 Shape 的构造函数 Shape，传递了参数 name, width, 和 height 值。 继承允许我们复用 Shape 类的代码，所以我们可以通过继承 area 属性来计算 this.volume。
// Shape3D 的 shoutout() 方法重写基类的实现。superShout() 方法通过使用 super 关键字直接返回了基类的 shoutout() 方法。
// 其他的代码我们可以通过自己的需求来完成自己想要的功能。
class Shape3D extends Shape {
 
    volume: number;
 
    constructor ( public name: string, width: number, height: number, length: number ) {
        super( name, width, height );
        this.volume = length * this.area;
    };
 
    shoutout() {
        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
    }
 
    superShout() {
        return super.shoutout();
    }
}
 
var cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );