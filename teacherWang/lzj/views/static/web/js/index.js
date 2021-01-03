$(function(){
    var btns=$('.obtain .row .btn');
    var heading=$('.course-detail .media .media-heading');
    btns.each(function(index){
        $(this).on("click",function(){
            switch (index){
                case 0:
                    heading.text("Java课程升级V9.0");
                    break;
                case 1:
                    heading.text("大数据V9.0");
                    break;
                case 2:
                    heading.text("Python课程升级V9.0");
                    break;
                case 3:
                    heading.text("人工智能课程升级V9.0");
                    break;
                case 4:
                    heading.text("更多");
                    break;
            }
            
        })
    })
})