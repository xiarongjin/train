// console.log(window)
// console.log(document.doctype)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)
// console.log(document.documentURI)
// console.log(document.URL)
// console.log(document.domain)
// console.log(document.lastModified)
// console.log(location)
// location.href="http://www.baidu.com"
// console.log(document.title)
// console.log(document.readyState)
// setTimeout(function(){
//     // location.href="http://www.aigei.com/view/61463.html"
//     console.log(document.readyState)
// },1000)
// console.log(document.anchors)
// console.log(document.images)
// console.log(document.forms)

// 通过id获取dom元素
// var p1=document.getElementById("p1");

// 通过标签名称获取元素
// var imgs=document.getElementsByTagName("img")
// console.log(imgs)

// 通过属性name的值获取元素
// var logins=document.getElementsByName("login")
// console.log(logins)

// 通过class名称获取元素
// var classP=document.getElementsByClassName("classP")
// console.log(classP)

// querySelector是用css写法查找元素的方法
// var p1=document.querySelector("#p1")
// console.log(p1)

// var anchor=document.querySelector("#section1 .menu .menu-item a")
// console.log(anchor)

// querySelector找到元素即返回，不往后面继续找
// var p=document.querySelector("p")
// console.log(p)

// querySelectorAll查找页面所有符合条件的元素
// var p=document.querySelectorAll("p")
// console.log(p)

// var section1=document.getElementById("section1");
// var ul=section1.getElementsByClassName("menu");
// var item=ul[0].getElementsByClassName("menu-item")[0]
// var a=item.getElementsByTagName("a")[0]
// console.log(a)

// var ul=document.getElementsByTagName("ul")[0];
// // var lis=ul.querySelectorAll("li")
// var lis=ul.getElementsByTagName("li")

// for (let i = 0; i < lis.length; i++) {
//     // const element = array[i];
//     ul.appendChild(document.createElement("li"))
// }

// var div1=document.getElementById("div1");

// div1.onclick=function(){
    // this.innerHTML="nihao,lezijie";
    // this.innerText="nihao,lezijie";
    // this.innerHTML="<h1>我是h1标题</h1>";
//     this.innerText="<h1>我是h1标题</h1>";
// }

// var arr=[];
// for (var i = 0; i < 9; i++) {
//     arr[i]=function(){
//         console.log(i)
//     }
// }

// 使用let声明i变量,可以避免全局变量的问题
// for (let i = 0; i < 9; i++) {
//     arr[i]=function(){
//         console.log(i)
//     }
// }
// arr[0]()

// 选项卡的实现
// var btns=document.querySelectorAll("button");
// var divs=document.querySelectorAll("div");

// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick=function(){      
//         // 将所有的button的class清空  
//         for (let j = 0; j < btns.length; j++) {
//             btns[j].className="";
//         }
//         // 将点击到的那个button的class改成active
//         this.className="active";

//         // 将所有的div的display改成none
//         for (let j = 0; j < divs.length; j++) {
//             divs[j].style.display="none";
//         }
//         // 将对应的那个div的display改为block
//         divs[i].style.display="block"
//     }
// }

// var list=document.getElementById("list")
// console.log(list.childNodes)

// var div1=document.createElement("div");
// var txt=document.createTextNode("哈喽，乐字节");
// var style=document.createAttribute("style");
// style.value="color:red;backgroud:blue;font-weight:bold;font-style:italic";
// div1.setAttributeNode(style);
// div1.appendChild(txt);

// document.body.appendChild(div1);

// var arr=["首页","百度","华为","京东","淘宝"]

// var menu=document.createElement("ul");
// var ulStyle=document.createAttribute("style");
// ulStyle.value="list-style:none;";
// menu.setAttributeNode(ulStyle);

// for (let i = 0; i < arr.length; i++) {
//     // 创建li元素
//     var li=document.createElement("li");
//     // 设置li元素里的内容
//     li.innerHTML=arr[i];
//     // 设置li元素的style
//     li.style.cssText="text-align:center;float:left;color:snow;width:100px;height:40px;line-height:40px;background:#fc0"
//     // 将li放到ul里去
//     menu.appendChild(li);
// }

// document.body.appendChild(menu)
// var div=document.querySelector("div");

// 设置元素的属性
// div.setAttribute("id","div1");
// div.setAttribute("name","div1");


// div.setAttribute("class","haha");
// div.className="haha"


// 获取属性名称
// var divClass=div.getAttribute("class");
// console.log(divClass);

// 移除属性名称
// div.removeAttribute("class");

// 设置style的样式
// div.style.fontSize="100px";
// div.style.color="red";
// div.style.cssText+="font-size:100px;color:red;";

// 对style属性里面的样式进行操作
// div.style.setProperty("font-style","italic")
// console.log(div.style.getPropertyValue("color"))
// div.style.removeProperty("font-style")

// var haha=document.createAttribute("haha");
// console.log(haha.childNodes);
// haha.value="123"
// div.setAttributeNode(haha)

// div.setAttribute("hehe","456")

// var img=document.createElement("img");
// img.src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1993309311,1816583273&fm=26&gp=0.jpg"
// img.style.width="100px";
// img.style.height="100px";
// document.body.appendChild(img)


// var div=document.querySelector("div");
// // 获取节点名称
// console.log(div.nodeName);
// // 获取节点类型
// console.log(div.nodeType);
// console.log(document.nodeType)

// var haha=document.createAttribute("haha");
// console.log(haha.nodeType)
// console.log(div.childNodes[0].nodeType);

// console.log(document.doctype.nodeType)
// console.log(div.ownerDocument)
// console.log(div.childNodes[0].ownerDocument)
// console.log(document.body.childNodes[1].ownerDocument)
// console.log(div.nextSibling)
// console.log(div.nextElementSibling)
// console.log(div.previousSibling)
// console.log(div.previousElementSibling)
// console.log(div.parentNode)
// console.log(div.parentElement)

// console.log(div.textContent)
// console.log(div.childNodes[1].nodeValue)

// console.log(div.firstChild)
// console.log(div.firstElementChild)

// console.log(div.lastChild)
// console.log(div.lastElementChild)
// console.log(div.children)


//点击隐藏元素
// var anchors=document.querySelectorAll("a");

// for (let i = 0; i < anchors.length; i++) {
//     anchors[i].onclick=function(){
//         anchors[i].parentNode.style.display="none";
//     }
// }

// 全选、全不选
// var ckbs=document.querySelectorAll("input")
// var btns=document.querySelectorAll("button")

// btns[0].onclick=function(){
//     ckbs.forEach(function(item){
//         item.checked=true;
//     })
// }


// btns[1].onclick=function(){
//     ckbs.forEach(function(item){
//         item.checked=false;
//     })
// }

// 拷贝节点
// var cloneDiv=document.getElementsByClassName("clone")[0];
// var cloneBtn=document.getElementById("cloneBtn");

// cloneBtn.onclick=function(){
    // console.log(cloneDiv.firstElementChild)
    // cloneDiv.appendChild(cloneDiv.firstElementChild.cloneNode(true));
    // cloneDiv.insertBefore(cloneDiv.firstElementChild.cloneNode(true),cloneDiv.lastElementChild)
    // cloneDiv.removeChild(cloneDiv.firstElementChild)

//     var span=document.createElement("span");
//     span.innerText="我是一个span标签";

//     cloneDiv.replaceChild(span,cloneDiv.lastElementChild);
// }


// 字符串替换操作
// var str="hello,lezijie";
// console.log(str.replace("l",0))
// console.log(str.replaceAll("l",0))

// 判断一个元素是否包含子节点
// console.log(cloneBtn.hasChildNodes())
// 判断一个元素是否属于指定元素的子节点
// console.log(cloneDiv.contains(cloneBtn))

// var clone2Div=document.getElementsByClassName("clone")[1]

// console.log(cloneDiv.isEqualNode(clone2Div))
// 留言板
// var nickName=document.getElementById("nickName");
// var message=document.getElementsByName("message")[0];
// var btn=document.getElementsByClassName("submit")[0];

// var msgList=document.querySelector("ul");

// btn.onclick=function(){
//     // console.log(nickName.value)
//     // console.log(message.value)
//     var msgLi=document.createElement("li");
//     var title=document.createElement("h2");
//     var content=document.createElement("p")
//     title.innerHTML=nickName.value;
//     content.innerHTML=message.value;

//     msgLi.appendChild(title)
//     msgLi.appendChild(content)

//     // msgList.appendChild(msgLi);
//     msgList.insertBefore(msgLi,msgList.firstElementChild)
// }

// 节点的offsetParent表示节点参考祖先元素中定位的那个,如果祖先元素都没定位、
// 那就是body
// var myA=document.querySelector("a");
// console.log(myA.offsetParent);
// console.log(myA.offsetTop)
// console.log(myA.offsetLeft)

// var box=document.querySelector(".box");
// 获取元素的宽高,计算公式为:内容区域+内边距+边框
// console.log(box.offsetWidth)
// console.log(box.offsetHeight)

// 获取元素的宽高,计算公式为:内容区域+内边距
// console.log(box.clientWidth)
// console.log(box.clientHeight)

// 盒子运动
// var box=document.querySelector(".box");
// var btn=document.getElementById("btn");
// btn.onclick=function(){
//     setInterval(function(){
        
//         if(box.offsetLeft>800){
//             box.style.left=0;
//         }

//         box.style.left=box.offsetLeft+10+"px";

//     }, 90);
// }
// var scrollPic=document.querySelector(".scrollPic");
// var imgs=document.querySelectorAll("img");
// var leftArrow=imgs[0];
// var rightArrow=imgs[5];

// console.log(leftArrow,rightArrow)
// // 根据图片的大小,设置外部div的尺寸
// scrollPic.style.width="400px";
// scrollPic.style.height="100px";
// // 让复制出来的图片溢出隐藏
// scrollPic.style.overflow="hidden";

// var picUl=scrollPic.firstElementChild;

// // 将ul里面的元素翻倍
// picUl.innerHTML+=picUl.innerHTML;

// // 设置ul的宽度,让里面的元素不换行
// picUl.style.width="800px";

// var speed=0;
// var timer=null;


// leftArrow.onmouseover=function(){
//     clearInterval(timer)
//     speed=-picUl.offsetWidth/80;
//     gd();
// }
// rightArrow.onmouseover=function(){
//     clearInterval(timer)
//     picUl.style.left="-400px";
//     speed=picUl.offsetWidth/80;
//     gd();
// }


// function gd(){
//     timer=setInterval(function(){    
//         if(speed<0){
//             // 判断ul往左偏移一半宽度后,里面ul的left还原到起始位置
//             if(picUl.offsetLeft<-(picUl.clientWidth/2)){
//                 picUl.style.left=0;
//             }
//         }
//         if(speed>0){
//             // 判断ul往右偏移一半宽度后,里面ul的left还原到-400px位置
//             if(picUl.offsetLeft>=0){
//                 picUl.style.left="-400px";
//             }
//         }
        
//         // 每200毫秒移动ul宽度的1/80
//         picUl.style.left=picUl.offsetLeft+speed+"px"
//     }, 200);
// }



// var selectYear=document.getElementById("year");
// var selectMonth=document.getElementById("month");

// selectYear.onchange=function(){
//     changeCalendar(selectYear.value,selectMonth.value);
// }

// selectMonth.onchange=function(){
//     changeCalendar(selectYear.value,selectMonth.value);
// }


// function changeCalendar(year,month){
//     var calender=document.getElementById("calender");
//     var firstRow=calender.firstElementChild;
//     calender.innerHTML="";

//     // 计算某月有多少天
//     var days=new Date(year,month,0).getDate();
//     // 计算每月1号是周几
//     var now=new Date(year,month,1);
//     var weekOne=new Date(now.getFullYear(),now.getMonth()-1,now.getDate()).getDay();
//     weekOne=weekOne==0?7:weekOne;//处理周日显示为0的问题

//     var num=0;
//     var numTr=Math.ceil((days+weekOne-1)/7);// 计算要显示多少行

//     for (let j = 0; j < numTr; j++) {
//         // 创建一行
//         var tr=document.createElement("tr");
//         // 创建7个单元格
//         for (let i = 0; i < 7; i++) {
//             var td=document.createElement("td") ; 
//             num++;
//             // 计算从哪个单元格开始写日期
//             if(num>(weekOne-1)){
//                 td.innerHTML=num-weekOne+1;
//             }
//             // 计算日期写到哪个单元格结束
//             if((num-(weekOne-1))>days){
//                 td.innerHTML="";
//             }
//             tr.appendChild(td)//将单元格添加到行中
//         }
//         calender.appendChild(tr);//将行添加到表格中
//     }
//     calender.insertBefore(firstRow,calender.firstElementChild)
// }