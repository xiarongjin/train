// var obj1={"1p":"zhangsan"};
// var obj2=new Object();
// var obj3=Object.create(null);
// console.log( obj1, obj2, obj3)

// obj1.name="张三丰";
// obj1["age"]=20;

// obj1.fly=function(){
//     console.log("起飞！")
// }
// function eat(){
//     // console.log("吃饭");
//     return "rice"
// }

// var haha="hehe";
// // 属性
// obj1.haveLunch=eat();
// // 方法
// obj1.haveDinner=function(){
//     return "beef"
// };
// console.log(obj1.haveLunch);
// console.log(obj1.haveDinner());
// 用[]把一个变量值作为对象的属性名是可以的
// var haha="hehe";
// obj1[haha]="123";
// console.log(obj1.hehe)

// 用.把一个变量值作为对象的属性名是不可以的
// obj1.haha="123"
// console.log(obj1.haha)
// obj1[555]=123;
// console.log(obj1[555]);

// 把关键字作为对象的属性名
// obj1.var="hello"
// console.log(obj1.var)

// js中对象的keys
// var keys=Object.keys(obj1);
// console.log(keys)

// js中对象的values
// var values=Object.values(obj1);
// console.log(values[2]())

// var entries=Object.entries(obj1);
// console.log(entries)

// delete obj1.haveLunch
// console.log(obj1)

// 判断对象是否包含某属性
// console.log("haveDinner" in obj1)
// 对象的遍历
// for(var i in obj1){
//     console.log(obj1[i]);
// }
// window.onclick=function(){}
// for(var i in window){
//     console.log(i,window[i]);
// }
// var...of方法遍历对象时,不能直接遍历对象,要遍历对象里面的keys或者values或者entries
// for(var i of Object.entries(obj1)){
//     console.log(i)
// }

// var arr=[
//     {name:"小米",age:25,salary:9000},
//     {name:"小明",age:21,salary:8000},
//     {name:"小王",age:20,salary:6000},
//     {name:"小丽",age:22,salary:15000},
//     {name:"小小",age:22,salary:17000}
// ];

// 对象排序
// arr.sort(function(a,b){
//     // if(a.age>b.age){
//     //     return 1;
//     // }else if(a.age<b.age){
//     //     return -1
//     // }else{
//     //     if(a.salary>b.salary){
//     //         return 1;
//     //     }
//     // }

//     if(a.age==b.age){
//         return -(a.salary-b.salary)
//     }
//     return a.age-b.age;
// });
// console.log(arr)

// var maxSalay=0;
// arr.forEach(function(item){
//     // if(maxSalay<item.salary){
//     //     maxSalay=item.salary;
//     // }
//     maxSalay=maxSalay<item.salary?item.salary:maxSalay;
// })
// console.log(maxSalay);

// Math对象

// console.log(Math.round(4.5));
// console.log(Math.pow(5,3));
// console.log(Math.max(12,43,64,45,67));
// console.log(Math.min(12,43,64,45,67));
// console.log(Math.abs(-78));
// 求平方根
// console.log(Math.sqrt(9));
// 求立方根
// console.log(Math.cbrt(125));
// function getNum(){
//     return parseInt(Math.random()*10);
// }


// var btn=document.getElementById("btn");
// var div1=document.getElementById("div1");
// btn.onclick=function(){
//     div1.innerHTML=""+getNum()+getNum()+getNum()+getNum();
// }

// console.log(Date(),typeof Date(),typeof Date);
// console.log(typeof new Date())
// console.log(new Date("2013-2-15 14:35:50"))

// console.log(new Date("2013/2/15"))
// console.log(new Date("2013-JAN-15"))
// console.log(new Date("Feberuary, 15, 2013"))
// console.log(new Date("Feberuary 15, 2013"))
// console.log(new Date("15, Feberuary, 2013"))

// var now=new Date();
// console.log(now.getTime())//获取毫秒数
// console.log(now.getYear());
// console.log(now.getFullYear())
// console.log(now.getMonth()+1)
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.toLocaleString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())

// console.log(now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds())

// var minutes=1000*60;
// var hours=minutes*60;
// var day=hours*24;
// var years=day*365;
// var res=now-new Date("1949/10/01");
// document.write("It's been "+res/years +" years since 1970-10-01")

// var timestamp=new Date("2020/10/24")-now;
// var secondes=Math.round(timestamp/1000);
// var div1=document.getElementById("div1");
// var timer=setInterval(function(){
//     div1.innerHTML="还有"+secondes+"秒就到期了!";
//     secondes--;
// },1000);


// if(secondes==0){
//     clearInterval(timer)
// }

// eval("alert('haha')");
// console.log(escape("abc中华人民共和国"))
var books=[];

var bookName=document.getElementById("bookName");
var author=document.querySelector("#author");
var price=document.querySelector("#price");
var count=document.querySelector("#count");
var booksTable=document.querySelector("#booksTable");

var add=document.querySelector("#add");
var query=document.querySelector("#query");

add.onclick=function(){
    books.push({
        bookName:bookName.value,
        author:author.value,
        price:price.value,
        count:count.value
    })
    bookName.value="";
    author.value="";
    price.value="";
    count.value="";
    alert("添加成功")
}

var tableCode=""
query.onclick=function(){
    tableCode='<table border="1" cellspacing="0" align="center"> \
        <tr> \
            <td>书名</td> \
            <td>作者</td> \
            <td>价格</td> \
            <td>数量</td>  \
        </tr>' ;

    books.forEach(element => {
        tableCode+=` <tr> \
            <td>${element.bookName}</td> \
            <td>${element.author}</td> \
            <td>${element.price}</td> \
            <td>${element.count}</td> \
        </tr>`
    });


    tableCode+='</table>';
    booksTable.innerHTML=tableCode;
}