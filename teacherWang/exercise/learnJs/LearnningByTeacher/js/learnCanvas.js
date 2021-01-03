// window.onload=function(){
//     var c1=document.getElementById("c1");
//     var gd=c1.getContext("2d");
    
    // 路径操作
    // gd.beginPath();
    // gd.moveTo(10,10);
    // gd.lineTo(100,100);
    // gd.strokeStyle="red";
    // gd.stroke();

    // gd.beginPath();
    // gd.moveTo(50,20);
    // gd.lineTo(150,120);
    // gd.strokeStyle="green";
    // gd.stroke();
    // gd.lineTo(10,200);
    // gd.stroke();
    
    // gd.closePath();
    // gd.stroke();
    // 填充
    // gd.fillStyle="yellow"
    // gd.fill();


    // gd.rect(50,50,200,100);
    // gd.strokeStyle="red";
    // gd.stroke();
    // gd.fillStyle="yellow";
    // gd.fill();
    // gd.strokeRect(50,50,200,100);
    // gd.fillRect(50,50,200,100);
    // gd.clearRect(0,0,c1.width,c1.height);
    // c1.onclick=function(){
    //     alert(1)
    // }

    // 动画
    // var left=100;
    // setInterval(function(){        
    //     gd.clearRect(0,0,c1.clientWidth,c1.height);
    //     left+=10;
    //     gd.strokeRect(left,100,100,100);
    // }, 16);

    // requestAnimationFrame(next)
    // function next(){
    //     gd.clearRect(0,0,c1.width,c1.height);
    //     left+=10;
    //     gd.strokeRect(left,100,100,100);
    //     if(left>=400){
    //         left=100;
    //     }
    //     requestAnimationFrame(next);
    // }

    // 事件
    // var l=100,t=100,r=l+200,b=t+200;
    // gd.strokeRect(l,t,200,200);
    // c1.onmousemove=function(e){
    //     var x=e.clientX-c1.offsetLeft,y=e.clientY-c1.offsetTop;
    //     if(x>=l&&x<=r&&y>=t&&y<=b){
    //         gd.strokeStyle="red";
    //     }else{
    //         gd.strokeStyle="black";
    //     }
    //     gd.clearRect(0,0,c1.width,c1.height);
    //     gd.strokeRect(l,t,200,200);  
    // }

    // 画弧
    // function d2a(n){
    //     return n*Math.PI/180;
    // }

    // var cx=200,cy=200,r=100;
    // gd.arc(cx,cy,r,d2a(0),d2a(360));
    // gd.stroke();

    // c1.onmousemove=function(e){
    //     var x=e.clientX-c1.offsetLeft,y=e.clientY-c1.offsetTop;
    //     var dis=Math.sqrt(Math.pow(cx-x,2)+Math.pow(cy-y,2));
    //     if(dis<r){
    //         gd.strokeStyle="red";            
    //     }else{
    //         gd.strokeStyle="black";
    //     }
    //     gd.clearRect(0,0,c1.width,c1.height);
    //     gd.beginPath();
    //     gd.arc(cx,cy,r,d2a(0),d2a(360));
    //     gd.stroke();
        
    // }

    // var datas=[
    //     {gender:"male",num:200,color:"blue"},
    //     {gender:"female",num:300,color:"red"},
    //     {gender:"sb",num:20,color:"pink"},
    // ]

    // // 求总数
    // var sum=0;
    // datas.forEach(function(item){
    //     sum+=item.num
    // })
    
    // var cx=200,cy=200,deg=0,r=100;
    // // 角度转弧度
    // function d2a(n){
    //     return n*Math.PI/180;
    // }
    // var x=cx+Math.cos(d2a(deg))*r;
    // var y=cy+Math.sin(d2a(deg))*r;

    // gd.moveTo(cx,cy);
    // gd.lineTo(x,y);
    // gd.stroke();

    
    // datas.forEach(function(item){
    //     // 计算开始角度和结束角度,并画弧
    //     drawCake(deg,deg+360/sum*item.num,item.color,item.gender);
    //     deg+=360/sum*item.num;
        
    // })
    // gd.font="normal 16px 微软雅黑";
    

    // function drawCake(startDeg,endDeg,color,text){
    //     gd.beginPath();
    //     gd.moveTo(cx,cy);        
    //     gd.arc(cx,cy,r,d2a(startDeg),d2a(endDeg));
    //     gd.fillStyle=color;
    //     gd.fill();
    //     // gd.stroke();
    //     var x=cx+Math.cos(d2a(startDeg+(endDeg-startDeg)/2))*r/2;
    //     var y=cy+Math.sin(d2a(startDeg+(endDeg-startDeg)/2))*r/2;
    //     gd.fillStyle="white"
    //     // 四舍五入取占比,并渲染到图像中
    //     gd.fillText(text+" "+Math.round((endDeg-startDeg)/360*100)+"%",x,y);
    // }
 
    // gd.rotate(d2a(30));

    // gd.translate(100,100);

    // gd.scale(1.5,1.5);
    // gd.fillStyle="green";
    
    // gd.rect(100,100,200,200);
    // gd.fill();
    // gd.stroke();

    // canvas图片展现和下载
    // var res=c1.toDataURL();
    // window.csImg.src=res;
    // window.downImg.href=res;
    
// }

// 手写签名
window.onload=function(){
    var c1=document.getElementById("c1");
    var gd=c1.getContext("2d");
    c1.onmousedown=function(e){
        gd.moveTo(e.clientX-c1.offsetLeft,e.clientY-c1.offsetTop);
        c1.onmousemove=function(e){
            gd.lineTo(e.clientX-c1.offsetLeft,e.clientY-c1.offsetTop);
            gd.stroke();
        }
    }

    c1.onmouseup=function(){
        c1.onmousemove=null;
    }
}