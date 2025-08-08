$(document).ready(function(){//start


  
  //탭메뉴
  //첫번째 탭 빼고 숨기기
  $(".tab-con ul li").not(":first").hide();
 

  //#brand .tab-con ul li 클릭하면
  $(".tab-menu div").click(function(){
    //1.선택한 li만 active가 붙고 나머지는 active지워져야함
    $(this).addClass("active").siblings().removeClass("active");
    //2.선택한 li의 순번을 담을 변수 생성
    let aa = $(this).index();
    //3.#brand .tab-con ul li중 순번과 동일한 요소만 보여주고 나머지는 숨겨야함
    $(".tab-con ul li").eq(aa).fadeIn().siblings().hide();

  });



});//end