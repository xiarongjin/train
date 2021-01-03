window.onload=function(){
//     var btn=document.querySelector('button');
//     btn.onclick=function(){
//         // open('https://douyu.com');//打开链接
//         // window.close();//关闭窗口
//         //window.event//
//         // window.moveTo("100","100")
//     };
// console.log(window)
// console.log(window.location)
// console.log(window.screen)
// console.log(window.contentMenu)
// var contentMenu=window.contentMenu//获取id为contentMenu的元素
// document.oncontextmenu=function (e) {//右键点击
//     e.preventDefault();//告知浏览器取消事件的默认动作
//     // console.log(e.preventDefault())
//     contentMenu.style.display='block';
//     contentMenu.style.left=e.clientX+'px';
//     contentMenu.style.top=e.clientY+'px';
// }
// document.onclick=function () {
//     contentMenu.style.display='none';
// }
// contentMenu.onclick=function (e) {
//     switch(e.target.innerHTML){
//         case "返回":
//             alert('ok');
//             break;
//         case "翻译":
//             window.open("http://www.baidu.fanyi.com");
//             break;
//         case "搜索":
//             var res=prompt("请输入关键字");
//             window.open('http://www.baidu.com/s?wd='+res);
//             break;    
//     }

// 放大镜效果
//     var box =document.querySelector('.box');
//     var fdj =document.querySelector('.fdj');
//     var show =document.querySelector('.show');
//     var img=document.querySelector('img');
//     box.onmouseover=function () {
//         fdj.style.display='block';
//         show.style.display='block';
//     }
//     box.onmouseout=function () {
//         fdj.style.display='none';
//         show.style.display='none';
//     }
//     box.onmousemove=function(e){
//         fdj.style.left=e.clientX-box.offsetLeft-fdj.clientWidth/2+'px';
//         fdj.style.top=e.clientY-box.offsetTop-fdj.clientHeight/2+'px';
//         if(fdj.offsetLeft<=0){
//             fdj.style.left=0;
//         }
//         if(fdj.offsetLeft>=box.clientWidth-fdj.clientWidth){
//             fdj.style.left=box.clientWidth-fdj.clientWidth+'px';
//         }
//         if(fdj.offsetTop<=0){
//             fdj.style.top=0;
//         }
//         if(fdj.offsetTop>=box.clientHeight-fdj.clientHeight){
//             fdj.style.top=box.clientHeight-fdj.clientHeight +'px';
//         }
//         img.style.left=-fdj.offsetLeft*show.clientWidth/fdj.clientWidth+'px';
//         img.style.top=-fdj.offsetTop*show.clientHeight/fdj.clientHeight+'px';
//     }

// 计时器
// function settime(){
// var now =new Date();
// window.timer.innerHTML=`当前时间是：${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
// };
// settime();
// setInterval(settime,1000);

//进度条
// var sliderbar =window.sliderbar;
// var timer;
// timer=setInterval(function(){
//     if(parseInt(sliderbar.style.width)>=100){
//         clearInterval(timer);
//     }else{
//         // console.log(parseInt('2%'))
//     sliderbar.style.width=parseInt(sliderbar.style.width)+1+'%';
//     sliderbar.innerHTML=sliderbar.style.width;
// }},100);

// 有提示的拖动条
// var range=document.querySelector("input");
// var box=document.querySelector(".box");
// range.onmousedown=function (e) {
//     box.style.display='block';
    
//   }
//   range.onmousemove=function (e) {
//       box.innerHTML=range.value;
//       box.style.left=e.clientX-box.offsetWidth/2+'px';
//     }
//  range.onmouseup=function (e) {
//     box.style.display='none';
//    }
// localStorage.setItem('user',JSON.stringify({username:'张三'}));
// sessionStorage.setItem('user2',JSON.stringify({username:'小夏'}))


// var res =localStorage.getItem("user")
// var res2 =sessionStorage.getItem("user2")
// console.log(JSON.parse(res))
// console.log(JSON.parse(res2))


// 字符串解析
// var str='?name=小夏&age=22';
// var str2=str.slice(1);
// console.log(str2);
// var arr=str2.split("&");
// console.log(arr);
// var obj={};
// arr.forEach(element => {
//     // console.log(element.split('='))
//     obj[element.split('=')[0]]=element.split('=')[1]
   
// });
// console.log(obj.name)

//表单验证是否为空
var formDate=document.querySelectorAll('[name]');
// console.log(formDate)
console.log(formDate[0].value)
  window.loginForm.onsubmit=sub(submitE);
  
  function sub(fn){//节流函数
    var validate=false;
      return function(){
      if(validate){
          return;
      }
      validate=true;//配合if语句瘫痪函数
      setTimeout(function(){
            fn.apply(this);执行操作
            validate =false;//配合定时器1秒后恢复函数
          },1000)
   }
 }
  function submitE() { 
    var validate=true;
    // console.log(formDate)
    formDate.forEach(item => {
        if(item.value==''){
            validate=false;
            // break;
            return false;
        }
    });
     return validate;
   };


//节流


// var button=document.querySelector("button");
// function pr(fn){
//     var validate =false;
//     return function(){
//         if(validate){
//             return;
//         };
//         validate=true;//结束事件
//         setTimeout(function(){
//             // fn();如果执行对象不一样那么这种不可取
//             fn.apply(this);//因为fn的原型函数work与setTimeout执行的对象都是window所以两种执行都可
//             validate =false;//释放恢复事件
//         },3000);
//     }
// }
// button.onclick=pr(work);
// function work(){
//     alert('三秒只执行一下点击按钮');
// }




















































































































































}



































