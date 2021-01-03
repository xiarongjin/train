window.onload=function () {
 var can=document.getElementById('can');//获取画布
 var gd=can.getContext('2d');//初始化画笔
//  gd.strokeRect(100,100,100,100);
// var l=100,r=l+200;
// // gd.strokeRect(l,l,200,200);
// can.onmousemove=function(e){
//             var   x=e.clientX-can.offsetLeft,y=e.clientY-can.offsetTop;
//             if (x>=l&&x<=r&&y>=l&&y<=r) {
//                 gd.clearRect(0,0,500,500)
//                 gd.strokeStyle="red";
//                 gd.strokeRect(l,l,200,200);
//             }  else{
//                 gd.clearRect(0,0,500,500)
//                 gd.strokeStyle="yellow";
//                 gd.strokeRect(l,l,200,200);
//             }                             
// }


// 画弧
function d2a(param) {
    return param*Math.PI/180;
  }

// var cx=200,cy=200,r=100
// gd.arc(cx,cy,r,d2a(0),d2a(360),true);//圆心坐标，半径，起始弧度，终点弧度
// gd.stroke();

// can.onmousemove=function (e) {
//       var x=e.clientX-can.offsetLeft,y=e.clientY-can.offsetTop;
//       var dis=Math.sqrt(Math.pow(cx-x,2)+Math.pow(cy-y,2));
//       if(dis<r){
//           gd.strokeStyle='red';
//       }else{
//         gd.strokeStyle='black';
//       }
//       gd.clearRect(0,0,can.width,can.height);
//       gd.beginPath();
//       gd.arc(cx,cy,r,d2a(0),d2a(360),true);//圆心坐标，半径，起始弧度，终点弧度
//       gd.stroke();
//   }


// 画图表
// var datas=[]



//旋转，位移，缩放
// gd.rotate(d2a(30));//旋转
// gd.translate(100,100)//平移
// gd.scale(1,2)//缩放


// gd.rect(100,100,200,200);
// gd.fillStyle='green';
// gd.fill();


//旋转矩形 
    //   let r=0;

    //   requestAnimationFrame(next);

    //   function next(){
    //     gd.clearRect(0,0,can.width,can.height);

    //     r++;

    //     gd.save();                      //保存：canvas的状态（图形并不保存）——颜色、translate、rotate
    //     gd.translate(300, 300);
    //     gd.rotate(r*Math.PI/180);

    //     gd.strokeRect(-100, -75, 200, 150);
    //     gd.restore();                   //恢复：恢复到上一次保存的状态

    //     requestAnimationFrame(next);
    //   }



//手写签名
can.onmousedown=function (e) {
    var x= e.clientX-can.offsetLeft;
        var y=e.clientY-can.offsetTop;
   
        gd.moveTo(x,y)
    can.onmousemove=function (e) {
        var x= e.clientX-can.offsetLeft;
        var y=e.clientY-can.offsetTop;
        // gd.moveTo(x,y)
        // gd.beginPath();
        // gd.moveTo(m,n)
        gd.lineTo(x,y);
        gd.stroke();
        gd.save(); 
        // gd.closePath();
      }
  }
  can.onmouseup=function () {
    gd.restore();  
    can.onmousemove=null
       
  }





















  }