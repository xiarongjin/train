//盒子运动
// var myA=document.getElementsByTagName('div')[0];
// console.log(myA.offsetParent);
// console.log(myA.offsetLeft);
// var btn=document.getElementsByTagName('button')[0];
// btn.onclick=function(){
// setInterval(function(){
//     // var myAoffsetLeft=myA.offsetLeft;
//     if(myA.offsetLeft>800){
//         myA.style.left=0;
//     }
//     myA.style.left=myA.offsetLeft+10+'px';
// },90);
// }


//图片滚动
var ulList= document.getElementsByTagName('ul')[0];
console.log(ulList);
ulList.innerHTML+=ulList.innerHTML;
var removeWidth=ulList.firstElementChild.offsetWidth;
ulList.style.width="1600px";
setInterval(function name(params) {
    if(ulList.offsetLeft<-removeWidth*4){
        ulList.style.left=0;
    }
    ulList.style.left=ulList.offsetLeft-removeWidth/100+"px";
},20);
function moveLeft() {
    setInterval(function name(params) {
        if(ulList.offsetLeft<-removeWidth*4){
            ulList.style.left=0;
        }
        ulList.style.left=ulList.offsetLeft-removeWidth/100+"px";
    },20);
}
function moveRight() {
    setInterval(function name(params) {
        if(ulList.offsetleft<-removeWidth*4){
            ulList.style.left=0;
        }
        ulList.style.left=ulList.offsetLeft+removeWidth/100+"px";
    },20);
}
var leftArrow=document.getElementsByTagName('div')[0];
var rightArrow=document.getElementsByTagName('div')[2];
console.log(leftArrow,rightArrow);
leftArrow.onclick=function () {
    console.log("点了左边按钮");
    moveLeft();
}
rightArrow.onclick=function () {
    console.log("点了右边按钮");
    moveRight();
}



// 尝试点击获取图片
// var choose= document.getElementsByTagName('div')[1];
// console.log(ulList.children);
// var arr= ulList.children;//得到的是Html集合，不是数组是对象
// // choose.appendChild(ulList.firstElementChild.firstElementChild)
// console.log(arr);
// var arr =[1,2,3,4,5]
// console.log(arr)
// arr.forEach(function (item) {//foreach只能遍历数组
//     if (item === 3) {
//         return;
//     }
//     console.log(item);
// });


//日历的制作
// var table =document.getElementById('table');
// var selectYear =document.getElementById('year');
// var selectMonth =document.getElementById('mounth');
//  console.log(selectYear.value,selectMonth.value);
// function abc(){
//     // console.log(this.value);
//     table.innerHTML='';
//     changeTable(selectYear.value,selectMonth.value);

// }
// //获取年份
// selectYear.onclick=abc;
// selectMonth.onclick=abc;


// function changeTable(year,mounth){
// //计算该月份的天数;
// var date=new Date(year,mounth,0);
// var days=date.getDate();
// console.log(`${year}年${mounth}月有${days}天`);
// //计算该月1号是周几
// var week=new Date(year,mounth-1,1);
// var weekone=week.getDay();
// weekone=weekone==0?weekone=7:weekone;
// console.log(`${year}年${mounth}月1日是星期${weekone}`);
// //将日期输出到页面的table里面
// var num=1;
// for(let j=0;j<Math.ceil((days+weekone-1)/7);j++){

// var tr= document.createElement('tr');

// for(let i=0;i<7;i++){
//     var td=document.createElement("td");
//     num++;
//     if(num>weekone&&num<=days+weekone){
//         td.innerHTML=num-weekone;
//     }
//     tr.appendChild(td);
// }
// table.appendChild(tr);
// }
// }