 /*jshint esversion: 6 */
 //  console.log("hello javascript");

 //  function click1() {
 //      // var abc = 1;
 //      const abc = 2; /*const定义一个常量不能被改变*/
 //      //  abc = 3;
 //      alert(abc);
 //  }
 //  alert(abc)
 // 作用域
 // 先使用再用var声明----undefined不会报错
 //  console.log(num);
 //  var num = 10;
 //  let num = 10;

 //  栈内存 长度固定，存放简单数据类型和存放复杂类型（对象、）的地址；
 // 堆内存 存放复杂数据类型；cpu先读栈内存里存的地址再找到堆内存

 //  var abc;
 //  abc = null;
 //  console.log(typeof abc);
 //  js数据类型:
 //栈内存 基本数据类型:  num:数值|字符串:string|布尔:boolean|未定义:undefined;声明变量没赋值就是undefined|unll特殊的对象,不是空对象;
 //堆内存(可变的) 引用类型:obj--> array|function
 //  对象
 //  var obj = { name: '张山', age: '10' };
 //  console.log(typeof obj);
 //  console.log(obj);
 //  数组
 //  var arr = [1, 2, 3];
 //  console.log(typeof arr);
 //  console.log(arr);
 //  函数
 //  function alert1() {
 //      alert("1");
 //  }
 //  console.log(typeof alert1);
 //  console.log(obj);wqqqqA3WSYHOKPL][;'activea0]
 //  date(日期)是object类型
 //  var now = new Date();
 //  console.log(now);
 //  console.log(typeof now);
 //  var username = "熊大",
 //      age = 3,
 //      from = "上海";
 //  //  模板字符串
 //  console.log(`${username}同学，年龄是${age}岁，来自${from}`);
 //  var obj = { name: "夏荣金" };
 //  console.log(obj.name);
 //  console.log(obj["name"]);

 //  js函数
 //  function abc() {
 //      return 123;
 //  }
 //  console.log(abc instanceof Object);
 //  var res = abc();
 //  console.log(res);

 //  function abc() {
 //      var a = 977;
 //  }
 //  console.log(b);
 //  console.log(c);
 //  var b = 1;
 //  c = 2;
 //  var score = parseInt(prompt("请输入学生成绩：", 90));  prompt是一个bom对象
 //  if (score < 0 || score > 100 || isNaN(score)) {
 //      alert("你输入的分数不对！");

 //  } else {
 //      if (score >= 90) {
 //          console.log("优！");
 //      } else if (score >= 80 && score < 90) {
 //          console.log("良！");
 //      } else if (score >= 70 && score < 80) {
 //          console.log("中！");
 //      }
 //  }
 //  var res = prompt("请输入学生成绩");
 //  switch (res) {
 //      case '123':
 //          alert("你输入了数字：" + res);
 //          break;
 //      case 'abc':
 //          alert(`你输入了字符串：${res}`);
 //          break;
 //  }


 //  var inp = document.querySelector('input');
 //  var but = document.querySelector("button");
 //  but.onclick = function() {
 //      var num = inp.value;
 //      if (num % 2 == 0) {
 //          alert(`${inp}是一个偶数`);

 //      } else {
 //          alert(`${inp}是一个奇数`);
 //      }
 //  };
 //  var score = prompt("请输入一个分数");
 //  if (isNaN(parseInt(score)) || parseInt(score) < 0) {
 //      alert("请输入一个合理的数字！");
 //  } else {
 //      switch (true) {
 //          case score >= 90:
 //              console.log("优");
 //              break;
 //          case score >= 80:
 //              console.log("良");
 //              break;
 //          case score >= 70:
 //              console.log("中");
 //              break;
 //      }
 //  }
 //  var i = 1;
 //  //  先判断再执行，如果初始判断条件不成立则一次也不执行.
 //  while (i <= 10) {
 //      console.log(`${i}.你好！`);
 //      i++;
 //  }
 //  for (var i = 1; i < 100; i += 2) {
 //      console.log(i);
 //  }
 //   var obj = {
 //       name: "lisi",
 //       age: 20,
 //       sat: function(stuName) {
 //           alert(`hello${stuName}`);
 //       }
 //   };
 //   for (var i in obj) {
 //       console.log(`${i},${obj[i]}`);
 //       if (typeof obj[i] == "function") {
 //           obj[i]("张三");
 //       }
 //   }
 //  买可乐问题：
 //  var mon = 24,
 //      eachCola = 3,
 //      emptyBottle = 0,
 //      count = 0;
 //  while (mon > eachCola) {
 //      emptyBottle = parseInt(mon / eachCola);
 //      mon = mon - 2 * emptyBottle;
 //      count = emptyBottle + count;
 //  }
 //  console.log(count);
 // 求1-100质数问题；
 //  for (var i = 2; i <= 100; i++) {
 //      var flag = true;
 //      var count = 0;
 //      for (var j = 2; j < i; j++) {
 //          if (i % j == 0) {
 //              flag = false;
 //          }
 //      }
 //      if (flag) {
 //          console.log(i);
 //      }
 //  }
 //  for (var i = 1; i <= 6; i++) {
 //      if (i == 1) {
 //          document.write(`${i}</br>`);
 //      } else {
 //          document.write(1);
 //          for (var j = 1; j < i; j++) {
 //              document.write(i);
 //          }
 //          document.write(1 + `</br>`);
 //      }
 //  }
 //  console.log(String.fromCharCode(65));
 // var str = 'ab\
 // c';
 //  console.log(str);
 //  console.log(str.length);
 //  console.log(str.charAt(2));
 // console.log(str.charCodeAt(0));
 //  console.log(str.concat('你好啊', 'def'));
 //  console.log(str.substring(0, 2));
 //  var count1 = 0;
 //  for (var i = 0; i < 3; i++) {
 //      if (i < 3) {
 //          console.log("你好！");
 //          count1++;
 //      }
 //  }
 //  console.log(count1);
 // var str = "ababcdeeeffhhljlkom";
 // for (let i = 65; i <= 122; i++) {
 //     var count = 0;
 //     for (let j = 0; j <= str.length; j++) {
 //         if (i == str.charCodeAt(j)) {
 //             count++;
 //         }
 //     }
 //     if (count) {
 //         console.log(String.fromCharCode(i), count);
 //     }
 // }
 // var obj = {};
 // for (var i = 0; i < str.length; i++) {
 //     if (obj[str[i]] == undefined) {
 //         obj[str[i]] = 1;
 //     } else {
 //         obj[str[i]]++;
 //     }

 // }
 // console.log(obj);
 // setInterval();定时器；
 // var num = 0;
 // var sid = setInterval(function() {
 //     console.log(++num);
 // }, 1000);
 // clearInterval(sid); //清除定时器；
 // var div1, str = "hello world!",
 //     n = 0;
 // div1 = document.querySelector("#div1");
 // setInterval(function() {
 //     div1.innerHTML = str.substring(0, n);
 //     n++;
 //     if (n > str.length) {
 //         n = 0;
 //     }
 // }, 500);
 //  var min = 0,
 //      max = 100,
 //      lucky = 88,
 //      num = 0;
 //  while (true) {
 //      num = prompt("请输入一个数字！");
 //      if (num > lucky) {
 //          alert("大了");
 //          max = num;
 //      } else if (num < lucky) {
 //          alert("小了");
 //          min = num;
 //      } else {
 //          alert("找到了");
 //          break;
 //      }
 //  }
 //  var person = [true, 123, { name: "zhangshan" }];
 //  person.name = "lisi";
 //  console.log(person);
 //  var num = 18;
 //  var num1 = num;
 //  num1 = 19;
 //  console.log(num);
 //  var arr = ["red", 'green', 'blue'];
 //  var arr1 = arr;
 //  arr1[0] = 'pink';
 //  console.log(arr);
 //  var count = 0;
 //  for (var i of arr) {
 //  console.log(count, i);
 //  count++;
 //  }
 //  var fruits = ['banana', 'apple', 'orange'];
 //  fruits.push('lemon', 'pear');
 //  console.log(fruits);
 //  fruits.pop();
 //  console.log(fruits);
 //  fruits.shift();
 //  console.log(fruits);
 //  fruits.unshift('juice');
 //  console.log(fruits);
 //  var newArr = fruits.splice(1, 0, 'banner'); //功能最为强大，splice剪切插入，第一个值为剪切插入位置，第二个为剪切长度，后面的为插入的元素
 //  console.log(fruits);
 // 数组反转方法：reverse()；
 //  切割字符串方法：split("分割符")；
 // 数组元素拼接成字符串方法：join("拼接符")；
 //  排序输出
 //  var arr = [1, 2, 4, 3, 5];
 //  console.log(arr.sort());
 //  //  自定义排序规则；
 //  console.log(arr.sort(function(a, b) {
 //      if (a > b) {
 //          return -1; //return值为正数时调换位置，为负数时不换
 //          //  } else
 //          //  if (a < b) {
 //          //      return 1;
 //      } else {
 //          return 0;
 //      }
 //  }));
 //  var arr = ['a', 2, 3, 4, 5];
 //  map遍历数组有返回值，forEach没有返回值
 //  var res = arr.map(function(items) {
 //      return items;
 //  });
 //  console.log(res);
 //  找到符合条件的所有元素
 //  var res = arr.filter(function(a, b, c) {
 //      return a > 3;
 //  });
 //  console.log(res);
 //  找到符合条件的第一个元素
 //  var res = arr.find(function(a, b, c) {
 //      return a > 3;
 //  });
 //  console.log(res);
 //  找到符合条件的第一个元素的下标
 //  var res = arr.findIndex(function(a, b, c) {
 //      return a > 3;
 //  });
 //  console.log(arr[res]);
 //  some()只要有一个符合条件就返回true；
 //  var res = arr.some(function(a, b, c) {
 //      return a > 3;
 //  });
 //  console.log(res);

 // every()只要有一个不符合条件的就返回false；
 //  var res = arr.every(function(a, b, c) {
 //      return a > 3;
 //  });
 //  console.log(res);

 //  reduce():数组元素的操作（从左到右）；
 // reduceRight():数组元素的操作（从右到左）；
 // indexOf()：返回指定数组元素的首次出现的下标
 // lastIndexOf()：返回指定数组元素的最后一次出现的下标
 // keys()：返回由所有数组元素的下标组成的特殊对象
 // values()：返回由所有数组元素的值组成的特殊对象
 // entries()：返回所有数组元素的键名和键值共同组成的特殊对象
 //  for ---of遍历数组元素：
 //  var arr = [1, 2, 3, 4, 5];
 //  for (var i of arr) {
 //      console.log(i);
 //  }
 //  for----in遍历数组下标：
 //  var arr = [1, 2, 3, 4, 5];
 //  for (var i in arr) {
 //      console.log(i);
 //  }
