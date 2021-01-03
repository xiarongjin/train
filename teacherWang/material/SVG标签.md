# SVG标签

## svg简介

**可缩放矢量图形**（**Scalable Vector Graphics，SVG**），是一种用于描述二维的[矢量图形](https://zh.wikipedia.org/wiki/矢量图形)，基于 [XML](https://developer.mozilla.org/zh-CN/docs/XML_介绍) 的标记语言。作为一个基于文本的开放网络标准，SVG能够优雅而简洁地渲染不同大小的图形，并和[CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)，[DOM](https://developer.mozilla.org/zh-CN/docs/MDN/Doc_status/API/DOM)，[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)和[SMIL](https://developer.mozilla.org/zh-CN/docs/Web/SVG/SVG_animation_with_SMIL)等其他网络标准无缝衔接。本质上，SVG 相对于图像，就好比 [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 相对于文本。

SVG 图像及其相关行为被定义于 [XML](https://developer.mozilla.org/zh-CN/docs/XML_介绍) 文本文件之中，这意味着可以对它们进行搜索、索引、编写脚本以及压缩。此外，这也意味着可以使用任何文本编辑器和绘图软件来创建和编辑它们。

和传统的点阵图像模式，像[JPEG](https://developer.mozilla.org/zh-CN/docs/Glossary/jpeg)和[PNG](https://developer.mozilla.org/zh-CN/docs/Glossary/PNG)不同，SVG格式提供的是矢量图，这意味着它的图像能够被无限放大而不失真或降低质量，并且可以方便地修改内容。

SVG 是由[万维网联盟（W3C）](https://www.w3.org/)自 1999 年开始开发的开放标准。

Mozilla 开发者社区(*MDN*)上关于SVG的文档:https://developer.mozilla.org/zh-CN/docs/Web/SVG

## svg与canvas比较

svg划线:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <svg width="800" height="600">
      <line x1="100" y1="100" x2="300" y2="300" stroke="black"></line>
    </svg>
  </body>
</html>
```

canvas划线:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
    window.onload=function (){
      let oC=document.getElementById('c1');
      let gd=oC.getContext('2d');

      gd.beginPath();
      gd.moveTo(100,100);
      gd.lineTo(300,300);

      gd.stroke();
    };
    </script>
  </head>
  <body>
    <canvas id="c1" width="800" height="600"></canvas>
  </body>
</html>
```

此处我们用svg和canvas都画了一条线，但是在放大浏览器的情况下，svg的线依然平整光滑，而canvas的线以及出现了模糊毛边。所以svg是矢量图，canvas是位图。矢量图比位图要小的多。并且svg是有事件有属性的。但是有一点，同样的绘画效果下，性能不如canvas。

## 样式

案例1：

svg的内容也是由标签构成，然后设置标签的不同属性。标签属性可分两大类：1、形状属性；2、样式属性。

样式属性也可以用style属性描述。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <svg width="800" height="600">
      <line x1="100" y1="100" x2="300" y2="300" stroke="black" stroke-width="20"></line>
      <!--样式属性写在style中-->
      <line x1="200" y1="100" x2="400" y2="300" style="stroke:yellow;stroke-width:20"></line>
    </svg>
  </body>
</html>
```

案例2：

写在行内的属性stroke样式，其优先级是最低的，连通配符选择器都可以轻松修改它，所以一般不建议在svg标签上写样式。

**ps**:svg属性的值一般都是不带单位的。因为svg是矢量图，是可以缩放的，所以写单位的意义并不大。这里的值都是一个相对的概念。当

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
    * {stroke:red}
    </style>
  </head>
  <body>
    <svg width="800" height="600">
      <line x1="100" y1="100" x2="300" y2="300" stroke="black" stroke-width="20"></line>
    </svg>
  </body>
</html>
```

## 事件

案例1：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
    * {stroke:red}
    </style>
  </head>
  <body>
    <svg width="800" height="600">
      <!-- 给元素添加事件 -->
      <line x1="100" y1="100" x2="300" y2="300" style="stroke:red; stroke-width:20" onmouseover="this.style.stroke='green';" onmouseout="this.style.stroke='red';">
      </line>
    </svg>
  </body>
</html>
```

案例2：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
    * {stroke:red}
    </style>
    <script>
    window.onload=function (){
      let oL1=document.getElementById('l1');

      /* 也可以这样去添加 */
      /*oL1.onmouseover=function (){
        this.style.stroke='green';
      };
      oL1.onmouseout=function (){
        this.style.stroke='red';
      };*/
      
			/* 事件监听 */
      /*oL1.addEventListener('mouseover', function (){
        this.style.stroke='green';
      }, false);
      oL1.addEventListener('mouseout', function (){
        this.style.stroke='red';
      }, false);*/

      /* 事件委托 */
      document.body.onmouseover=function (ev){
        if(ev.srcElement==oL1){
          ev.srcElement.style.stroke='green';
        }
      };
      document.body.onmouseout=function (ev){
        if(ev.srcElement==oL1){
          ev.srcElement.style.stroke='red';
        }
      };
    };
    </script>
  </head>
  <body>
    <svg width="800" height="600">
      <line x1="100" y1="100" x2="300" y2="300" style="stroke:red; stroke-width:20" id="l1"></line>
    </svg>
  </body>
</html>
```

案例3：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
    * {stroke:red}
    </style>
    <script>
    window.onload=function (){
      let oL1=document.getElementById('l1');

      oL1.onclick=function (){
        //alert(oL1.x1);
        //oL1.x1='200';

        //svg中获取节点属性和设置属性要使用xml里的标准方法
        //alert(oL1.getAttribute('x1'));
        oL1.setAttribute('x1', '200');
      };
    };
    </script>
  </head>
  <body>
    <svg width="800" height="600">
      <line x1="100" y1="100" x2="300" y2="300" style="stroke:red; stroke-width:20" id="l1"></line>
    </svg>
  </body>
</html>
```

## 矩形

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
    body {background:pink}
    </style>
  </head>
  <body>
    <svg width="800" height="600">
      <!-- fill:none 就是不填充，矩形框内没有任何东西 -->
      <!-- 可以用rx,ry来设置圆角 -->
      <rect x="100" y="100" width="400" height="300" style="stroke:red;stroke-width:20;fill:rgba(0,0,0,0)" onclick="alert('a')"></rect>
    </svg>
  </body>
</html>
```

## 椭圆

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <svg width="800" height="600">
      <!--椭圆就是一个圆心两个半径-->
      <ellipse cx="400" cy="300" rx="100" ry="50"></ellipse>
    </svg>
  </body>
</html>
```

## 圆形

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <svg width="800" height="600">
      <circle cx="400" cy="300" r="200"></circle>
    </svg>
  </body>
</html>
```

## 路径

理论上来说，路径可以画出任何图形：

在路径参数中，有：

| 参数 | 英文名                          | 含义                                                         |
| ---- | ------------------------------- | ------------------------------------------------------------ |
| M    | moveTo                          | 移动到的点的x轴和y轴的坐标                                   |
| L    | lineTo                          | 需要两个参数，分别是一个点的x轴和y轴坐标，L命令将会在当前位置和新位置（L前面画笔所在的点）之间画一条线段。 |
| H    | horizontal lineto               | 绘制水平线                                                   |
| V    | vertical lineto                 | 绘制垂直线                                                   |
| C    | curveto                         | 三次贝塞曲线                                                 |
| S    | smooth curveto                  | 平滑曲线                                                     |
| Q    | quadratic Bézier curve          | 二次贝塞尔曲线                                               |
| T    | smooth quadratic Bézier curveto | 映射                                                         |
| A    | arc                             | 画弧                                                         |
| Z    | closepath                       | 闭合路径                                                     |

以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。



案例1：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <svg width="800" height="600">
      <path d="M 100 100 L 300 300 200 500 400 100" style="stroke:red; fill:none"></path>
    </svg>
  </body>
</html>
```

案例2：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <svg width="800" height="600">
      <path d="M 100 300 L 200 300 A 100 100 0 0 1 400 300 L 500 300" style="stroke:red; fill:none"></path>
    </svg>
  </body>
</html>
```

案例3：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
    function d2a(n){
      return n*Math.PI/180;
    }
    window.onload=function (){
      let oP=document.getElementById('p1');

      let cx=400,cy=300,r=200;
      let ang1=20,ang2=360;
      let arr=[];

      function getPoint(ang){
        return {
          x: cx+Math.sin(d2a(ang))*r,
          y: cy-Math.cos(d2a(ang))*r,
        }
      }

      //#1
      let {x: x1, y: y1}=getPoint(ang1);

      arr.push(`M ${cx} ${cy} L ${x1} ${y1}`);

      //#2
      let {x: x2, y: y2}=getPoint(ang2);
      //        A  rx   ry  x旋转 大弧 镜像 终点x    y
      //arr.push(`A ${r} ${r}   0    0    1   ${x2} ${y2}`);
      arr.push(`A ${r} ${r} 0 ${ang2-ang1>=180?1:0} 1 ${x2} ${y2}`);

      //#3
      arr.push('Z');

      console.log(arr.join(' '));

      oP.setAttribute('d', arr.join(' '));
    };
    </script>
  </head>
  <body>
    <svg width="800" height="600">
      <path id="p1" d="" style="stroke:red; fill:none"></path>
    </svg>
  </body>
</html>
```

案例4：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <svg width="800" height="600">
      <path d="M 100 300 Q 300 100 400 300" style="stroke:red; fill:none"></path>
    </svg>
  </body>
</html>
```

## js创建svg元素

案例1：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
    window.onload=function (){
      let oBtn=document.getElementById('btn1');
      let oSvg=document.getElementById('svg1');

      oBtn.onclick=function (){
        //let oL=document.createElement('line');
        let oL=document.createElementNS('http://www.w3.org/2000/svg', 'line');

        //alert(oL);
        //alert(oSvg.children[0]);

        oL.setAttribute('x1', 100);
        oL.setAttribute('y1', 100);
        oL.setAttribute('x2', 400);
        oL.setAttribute('y2', 300);

        oL.style.stroke='red';

        oSvg.appendChild(oL);
      };
    };
    </script>
  </head>
  <body>
    <input type="button" id="btn1" name="" value="按钮"><br>
    <svg id="svg1" width="800" height="600">
      <line x1="150" y1="100" x2="450" y2="300" style="stroke: yellow;"></line>
    </svg>
  </body>
</html>
```

案例2:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
    window.onload=function (){
      let oBtn=document.getElementById('btn1');
      let oSvg=document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      oSvg.setAttribute('width', 800);
      oSvg.setAttribute('height', 600);

      document.body.appendChild(oSvg);

      oBtn.onclick=function (){
        //let oL=document.createElement('line');
        let oL=document.createElementNS('http://www.w3.org/2000/svg', 'line');

        //alert(oL);
        //alert(oSvg.children[0]);

        oL.setAttribute('x1', 100);
        oL.setAttribute('y1', 100);
        oL.setAttribute('x2', 400);
        oL.setAttribute('y2', 300);

        oL.style.stroke='red';

        oSvg.appendChild(oL);
      };
    };
    </script>
  </head>
  <body>
    <input type="button" id="btn1" name="" value="按钮"><br>

  </body>
</html>
```

## 过滤器

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
      <filter id="blurMe">
        <!--设置高斯模糊,stdDeviation即模糊度-->
        <feGaussianBlur stdDeviation="5"/>
      </filter>
     
      <circle cx="60" cy="60" r="50" fill="green" />
     
      <circle cx="170" cy="60" r="50" fill="green"
               filter="url(#blurMe)" />
     </svg>
  </body>
</html>
```

