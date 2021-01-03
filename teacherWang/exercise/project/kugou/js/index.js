var timer;
window.onload=function(){
    var imgs;
    var toTop;
    // toTop=document.querySelector('.toTop')
    toTop=$('.toTop')
    // imgs=document.querySelectorAll('img') 
    imgs=$('img')
    lazyLoad(imgs);
    window.onscroll=function () {
        lazyLoad(imgs);
        // console.log(scrollY)
        if(scrollY>=10){
            toTop[0].style.display='block';
            toTop[0].style.opacity='1';
        }else{
            // toTop.style.display='none';
            toTop[0].style.opacity='0';
        } 
    }
    // var carouselImgs=document.querySelectorAll(".carousel .carousel-bg li img")
    var  carouselImgs = $(".carousel .carousel-bg li img")
    // var ulDot=document.querySelector('.dot')
    // var dots=ulDot.querySelectorAll(' .dot li a')
    var dots=$(' .dot li a')
    // var leftArrow=document.querySelector(".left-arrow")
   
    // var rightArrow=document.querySelector(".right-arrow")
 
    // var svgImg=document.querySelector('svg image')
    var svgImg=$('svg image')
    var index=0;
    // console.log(carouselImgs[index].src)
    // console.log(carouselImgs,dots)
     
    //触摸事件委托target
    $('.dot').on("mouseover",function (e) {
        // for (const i in dots) {
        //    if(dots[i]==e.target){
        //        index=i;
        //        carousel(carouselImgs,dots,index);
        //        break;
        //    }
        // }
        dots.each((i,item)=>{
            if(item==e.target){
                index=i;
                carousel(carouselImgs,dots,index);
            }
        })
      })


    //改变图片和控件样式函数
    function carousel(carouselImgs,dots,index){
        dots.each((i,item)=>{
            item.style.backgroundPosition='0 -22px'
        })
        carouselImgs.each((i,item)=>{
            item.style.opacity=0;
        })
        dots[index].style.backgroundPosition='0 -37px'
        carouselImgs[index].style.opacity=1;
       svgImg.attr('href',carouselImgs[index].src)

    }
      //轮播图效果
    timer= setInterval(() => {
        index++;
        if(index>=carouselImgs.length){
            index=0;
        }
        carousel(carouselImgs,dots,index);
       
    },2000);
    function  restart(carouselImgs,dots,index) { 
        timer= setInterval(() => {
            carousel(carouselImgs,dots,index);
            index++;
            if(index>=carouselImgs.length){
                index=0;
            }
        },2000);
    }


    //点击翻页效果
    $(".left-arrow").on("click",function () {
        clearInterval(timer)
        index--;
        if (index<0) {
            index=carouselImgs.length-1;
        }
        carousel(carouselImgs,dots,index);
        restart(carouselImgs,dots,index)
      })
      $(".right-arrow").on("click",function () {
        clearInterval(timer)
        index++;
        if (index>carouselImgs.length-1) {
            index=0;
        }
        carousel(carouselImgs,dots,index)
        restart(carouselImgs,dots,index)
      })
     
}


function lazyLoad(imgs){
    imgs.each((index,img) => {
   
        if(img.y-100<document.documentElement.clientHeight&&img.getAttribute("class")!='carouselImg'){
                let srcData= img.getAttribute('srcData');
                img.setAttribute('src',srcData);
                img.style.opacity=1;
        }
    });
};