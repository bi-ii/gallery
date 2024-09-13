/* 변수선언하기 let/속성가져오는 메소드 attr */

$(".btn>li").click(function(){
 $(this).addClass("on")
 $(this).siblings().removeClass("on")

 let a= $(this).attr('data-filter');
 //$(this).attr('속성명','속성값'); 속성을 변경할때 사용
 //a=$(this).attr('속성명'); 속성값 호출할때 사용 속성값이 a안에 들어감(변수안에 넣어줌)
 $(".content").isotope({filter:a});

})

$(".content").isotope();

$(".fancybox").fancybox();