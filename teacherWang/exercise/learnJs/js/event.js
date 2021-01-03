window.onload=function(){
// document.body.onclick=function(){
//     alert(1);
// }
// document.body.setAttribute('onclick',null)//消除事件
// var father=document.querySelector('.father');
// var son=document.querySelector('.son');
//事件冒泡(一层层往外冒泡)
//  son.onclick=function (event) {
//     alert('点击了son');
//     //阻止事件流
//     event.stopPropagation();
//   }
//   father.onclick=function () {
//     alert('点击了father');
//   }
//   document.body.onclick=function () {
//     alert('点击了body');
//   }
//事件流全部设置true默认是false（事件捕获）从外到内,加了true的先捕获
//addEventListener是一个方法,有三个参数("事件",函数,false/true)默认false,事件名前面不加on
//   son.addEventListener("click",function(){
//     alert('点击了son');
//   },true)
//   father.addEventListener('click',function(){
//     alert('点击了father');
//   },true)
//   document.body.addEventListener('click',function(event){
//     alert('点击了body');
//      //阻止事件流
//     event.stopPropagation();
//   },true)
// //IE浏览器绑定事件;事件名前面要加on
// son.attachEvent("onclick",function(e){
//         alert('点击了son');
// IE浏览器阻止事件流
//         e.cancelBubble=true;
//       })

//阻止页面默认行为
// event.preventDefault();
// event.returnValue=false;


// 单选框选颜色
// var btn=document.querySelector('button');
// var radio=document.querySelectorAll('[type=radio]');
// btn.addEventListener('click',fn);
// function fn() {
//     for(let i=0;i<radio.length;i++){
//         if(radio[i].checked){
//             alert('选择的颜色是'+radio[i].value)
//         }
//     }
//   }

//多选框选颜色
// var btn=document.querySelector('button');
// var checkbox=document.querySelectorAll('[type=checkbox]');
// btn.addEventListener('click',fn);
// var show=document.querySelector('[type=text]');
// function fn() {
//     var res='';
//     for(let i=0;i<checkbox.length;i++){
//         if(checkbox[i].checked){
//             // alert('选择的颜色是'+checkbox[i].value)
//             res+=checkbox[i].value+',';
//         }
//     }
//     // alert('选择的颜色是'+res)
//     // console.log(show)
//     show.value='选择的颜色是'+res.slice(0,res.length-1)+";";
//   }


//树形菜单的显示和隐藏
// var title= document.querySelector('.title');
// var menu =document.querySelector('.menu');
// title.addEventListener('click',controlMenu);
// function controlMenu(e) {
//     var control=window.getComputedStyle(menu).display;
//     //getComputedStyle获取样式可读不可写
//     if(control=='none'){
//         menu.style.display='block';
//     }else{
//       menu.style.display='none';
//     }
//     e.stopPropagation();
//   };
// function hideMenu() { 
//   menu.style.display='none';
//  }
//   document.body.addEventListener('click',hideMenu);


//事件的绑定与移除（非IE浏览器）
//同一事件绑定多个函数时会顺序执行，先绑定先执行
// window.sub.addEventListener('click',fn);
// window.sub.addEventListener('click',function () {alert(2)  });
// window.sub.addEventListener('click',function () {alert(3)  });
// function fn() {alert(1)  }
// //DOM2级绑定事件的移除、匿名函数绑定的事件不能移除
// window.sub.removeEventListener('click',fn);


// var button=document.querySelectorAll('button')
// var input=document.querySelectorAll("input")
// var div =document.querySelector("div")
// button[0].onclick=function(){
//     input[0].value--;
// }
// button[1].onclick=function(){
//     input[0].value++;
// }
// button[2].onclick=function(){
//     input[1].value--;
// }
// button[3].onclick=function(){
//     input[1].value++;
// }
// button[4].onclick=function(){
//     input[2].value--;
// }
// button[5].onclick=function(){
//     input[2].value++;
// }
// button[6].onclick=function(){
//     div.style.backgroundColor=`rgb(${input[0].value},${input[1].value},${input[2].value})`
// }



// var ipt=window.ipt
// // //获取焦点
// // ipt.onfocus=function () {console.log(1)  }
// // //失去焦点
// // ipt.onblur=function (param) {console.log(2)  }
// // //输入内容触发，不需要失去焦点
// // ipt.addEventListener('input',function (param) {console.log(3) })
// // //元素改变触发，需要失去焦点
// // ipt.addEventListener('change',function (param) {console.log(4);  })

// //键盘按下触发事件
// ipt.addEventListener('keydown',function (param) {console.log('键盘被按下去了');  })
// ipt.addEventListener('keyup',function (param) {console.log('键盘被松开了');  })
// ipt.addEventListener('keypress',function (e) {console.log(e.keyCode,e.key);  })


//滚动条滚动事件
// window.onscroll=function (param) {
//     // alert(1)
//     console.log(document.documentElement.scrollTop);
// }
// window.btn.addEventListener("click",function () { 
//     //页面到顶部的距离document.documentElement.scrollTop
//     document.documentElement.scrollTop=0;//顶部
//  })
// var son=document.querySelector('.son')
// son.ontouchstart=function (param) {
//     alert('你摸了一下！');
//   }
//   son.ontouchend=function (param) {
//     alert('你摸了一下2！');
//   }
  // son.ontouchmove=function (param) {
  //   alert('你摸了一下2！');
  // }


//表单验证
// var username=document.getElementsByName('username')[0];
// var tip=document.querySelector(".usertrue");
// function show(){
//   tip.className='usertrue';
//   tip.innerHTML='请输入5-15个字符';
// }
// function ver() {
//   if(username.value.length<5||username.value.length>20){
//     tip.className='userfalse';
//     tip.innerHTML='错误！请输入5-15个字符';
//   }else{
//     tip.innerHTML='';
//   }
//   }
//   username.addEventListener('focus',show);
//   username.addEventListener('blur',ver);


//自定义滚动条
// var slidebar=document.querySelector('.box .bar .slidebar');
// var bar=document.querySelector('.box .bar');
// var content=document.querySelector('.box .content');
// function mouseDown() {
//   bar.addEventListener('mousemove',slidebarMove);
//   slidebar.style.top=e.clientY+'px';
//   };
// function slidebarMove(e) {  
//     slidebar.style.top=e.clientY+'px';
//     content.style.top=-e.clientY*3/2+'px';

//   }
// function mouseUp() {
//   bar.removeEventListener('mousemove',slidebarMove);
// }
// bar.addEventListener('mousedown',mouseDown); 
// bar.addEventListener('mouseup',mouseUp);


//事件委托利用冒泡事件
// window.list.onclick=function (e) {
//   //target指向触发函数的元素
//   //currentTarget指向执行函数的元素
//   console.log(e.currentTarget)
//   e.target.innerHTML='很好'
//  }


























}