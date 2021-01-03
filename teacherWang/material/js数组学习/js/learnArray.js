// 数组的两种声明方式

// var arr1=["zhangsan",123,true,{name:"lisi"}]
// console.log(arr);

// var arr2=new Array("zhangsan",123,true,{name:"lisi"})
// console.log(arr);

// console.log(typeof arr1,typeof arr2)

// var arr=new Array();
// var arr=[];
// console.log(arr)
// arr[0]=true;
// arr[3]={}
// console.log(arr)

// var arr=[];
// // 数组增加数据
// arr[0]=null;
// arr[1]=123;
// console.log(arr)
// // 数组删除数据
// delete arr[0];
// console.log(arr)
// // 数组修改数据
// console.log(arr[0])
// arr[0]="lezijie"
// console.log(arr[0])
// // 数组数据查看
// console.log(arr)

// var person=[true,123,{name:"zhangsan"}];
// person["name"]="lisi";
// person["age"]=20;

// console.log(person[2].name)
// console.log(person.name)

// console.log(person.length)


// function Abc(...params){
//     this.arr=[...params]
//     this.length=this.arr.length
// }

// var haha=new Abc(1,true,{name:"zhangsan"},1,2,3,4,5,6);
// haha.name="lisi";

// console.log(haha.length)

// 值传递
// var num1=18;
// var num2=num1;
// num2=19;
// console.log(num1)

// 引用传递
// var arr1=["red","green","blue"];
// console.log(arr1);
// var arr2=arr1;
// arr2[0]="pink"
// console.log(arr1)

// for...of遍历数组
// var arr=["red","green","blue",,,,,];

// for(var i in arr){
//     console.log(i,arr[i])
// }

// for(var i of arr){
//     console.log(i)
// }
// arr.length=1;
// console.log(arr);
// arr.length=3;
// console.log(arr);
// console.log(arr.length)


// 数组concat方法用于拼接多个数组,生成一个新数组,而原数组保持不变
// var fruits=["apple","banana","orange"];
// var fruits2=["potato","watermeloon","lemon"];
// var newFruits=fruits.concat(fruits2,["caomei","ganzhe"]);
// console.log(fruits)
// console.log(fruits2)
// console.log(newFruits)

// 数组push方法会往原数组的尾部添加元素
// fruits.push("cherry","pear");
// console.log(fruits)
// 数组pop方法会将原数组的尾部元素删除
// fruits.pop();
// fruits.pop();
// console.log(fruits)

// 数组shift方法会将原数组的头部元素删除
// fruits.shift();
// console.log(fruits)
// 数组unshift方法会往原数组的头部添加元素
// fruits.unshift("lemon","watermeloon")
// console.log(fruits)

// 数组的join方法是把数组里的元素拼接为字符串,并且可以指定拼接的分隔符
// console.log(fruits.join("-"))

// 数组的reverse方法是把原数组里的元素反转顺序
// console.log(fruits.reverse())

// 数组的slice方法是从原数组里截取一段元素生成新的数组,不包含end指定的元素,不会改变原数组
// console.log(fruits.slice(1,3))

// 数组的splice是从原数组中将指定的位置和长度的元素剪切出来生成一个新数组,而原数组的这部分内容
// 会被剪切掉,第三个参数是往原数组剪切的位置添加新内容
// console.log(fruits)
// var newArr=fruits.splice(1,3);
// console.log(newArr)
// console.log(fruits)

// var newArr=fruits.splice(1,3,{name:"zhangsan"});
// console.log(newArr)
// console.log(fruits)

// var newArr=fruits.splice(1,0,{name:"zhangsan"});

// fruits.push("cherry2")
// console.log(fruits)

// console.log(fruits.sort())


// var arr=[3,5,11,22,70,59];
// console.log(arr);
// console.log(arr.sort());
// arr.sort(function(a,b){
//     if(a>b){
//         return 1;
//     }else if(a<b){
//         return -1;
//     }else{
//         return 0;
//     }
// })
// console.log(arr);

// var arr=[{name:"zhangsan",age:20},{name:"lisi",age:19},{name:"wangermazi",age:22}]
// console.log(arr);
// console.log(arr.sort(function(a,b){
//     if(a.age>b.age){
//         return 2;
//     }else if(a.age<b.age){
//         return -2;
//     }else{
//         return 0;
//     }
// }))

// 反转字符串
// console.log("abcd".split("").reverse().join(""))


// var fruits=["apple","banana","orange"];

// var res=fruits.forEach(function(item,index,arr){
//     // console.log(item);
//     // item+=1;
//     // console.log(item,index,arr)
// });
// console.log(res)

// 对数组中的每个元素进行映射操作并返回,得到一个操作后的结果数组
// var res=fruits.map(function(item){
//     return item+=1;
// })
// console.log(fruits)
// console.log(res);

// var arr=[85,22,89,37,100];
// 按条件过滤数组中的元素,返回一个新的数组
// var res=arr.filter(function(item,index,arr){
//     return item>85;
// })
// console.log(res)
// 按条件查找数组中的元素,找到即返回
// var res1=arr.find(function(item,index,arr){
//     return item>85;
// })
// console.log(res1)

// 查找满足条件的元素的下标并返回
// var res2=arr.findIndex(function(item,index,arr){
//     return item>85;
// })
// console.log(res2)

// 查找数组中是否有满足条件的元素,有就返回true,没有就返回false
// var res3=arr.some(function(item,index,arr){
//     return item>85;
// })
// console.log(res3)

// 要求数组中所有元素都要满足条件,都满足返回true,否则返回false
// var res4=arr.every(function(item,index,arr){
//     return item>85;
// })
// console.log(res4)

// 判断数组中是否包含有指定元素,包含则返回true,否则返回false
// var res5=arr.includes(100);
// console.log(res5)

// var arr=[85,22,89,37,89,100];

// var res=arr.reduce(function(val1,val2){
//     return val1-val2;
// })
// var res=arr.reduceRight(function(val1,val2){
//     return val1-val2;
// })
// console.log(res)
// console.log(arr.indexOf(89))
// console.log(arr.lastIndexOf(89))
// var keys=arr.keys();

// for(var i of keys){
//     console.log(arr[i])
// }

// var values=arr.values();

// for(var i of values){
//     console.log(i)
// }

// var entrys=arr.entries();

// for(var i of entrys){
//     console.log(i)
// }


// mapReduce
// var arr=["a","b","c","a","c"];

// var mapRes=arr.map(function(item){
//     return [item,1];
// })

// var shuffle={};

// mapRes.map(function(item){
//     if(shuffle[item[0]]==undefined){
//         shuffle[item[0]]=[item[1]]
//     }else{
//         shuffle[item[0]].push(item[1])
//     }
// })

// for(var i in shuffle){
//     // console.log(shuffle[i])
//     var res=shuffle[i].reduce(function(val1,val2){
//         return val1+val2;
//     })
//     console.log(i+"->"+res)
// }


// 二维数组

// var person=[
//     ["郭嘉","贾诩","程昱","荀彧","许攸"],
//     ["关羽","张飞","赵云","黄忠","马超"],
//     ["孙权","孙策","孙坚","周瑜","鲁肃"]
// ];

// console.log(person[2][2],person[1][4]);

// person.forEach(function(item){
//     item.forEach(function(subItem){
//         console.log(subItem)
//     })
// })

// var arr=[100,90,98,70,85,60,87];

// 选择排序
// 外层循环,控制总的排序次数
// var num=0;
// for(var j=0;j<arr.length-1;j++){
//     // 内层循环,每次拿数组的下一个元素,和后面所有的元素做比较
//     for(var i=j;i<arr.length;i++){        
//         if(arr[j]>arr[i+1]){
//             num=arr[j];
//             arr[j]=arr[i+1];
//             arr[i+1]=num;
//         }
//     }
//     console.log(arr)
// }


// var arr=[100,90,98,70,85,60,87];
// 冒泡排序
// var num=0;
// 外层循环,控制总的排序次数
// for(var j=0;j<arr.length-1;j++){
//     // 内层循环,每次拿数组的下一个元素,和它相邻的元素做比较,如果前面比后面大,就互换位置
//     for(var i=0;i<arr.length-j;i++){
//         if(arr[i]>arr[i+1]){
//             num=arr[i];
//             arr[i]=arr[i+1];
//             arr[i+1]=num;
//         }
//     }
//     console.log(arr);
// }

// 模拟数组原生sort函数
// function sortArr(arr){
//     for(var j=0;j<arr.length-1;j++){
//         for(var i=0;i<arr.length-j;i++){        
//             var res=sortRule(arr[i],arr[i+1]);
//             if(res>0){
//                 num=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=num;
//             }else if(res<0){

//             }else{

//             }
//         }
//         console.log(arr);
//     }
// }

// function sortRule(a,b){
//     if(a>b){
//         return 1;
//     }else if(a<b){
//         return -1;
//     }else{
//         return 0;
//     }
// }

// sortArr(arr)

// 90-100的随机数
console.log(90 + Math.floor((Math.random() * 11)));