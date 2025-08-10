$(document).ready(function(){//start
  AOS.init();


  //modal-wrap 사라짐
//  $(".modal-wrap").hide();
  $(".content-mypage-sub-02 .field05 ul li.choice-year").click(function(){
    $(".modal-wrap").fadeIn();
  });
  $(".modal-wrap .modal-box .btn-close").click(function(){
    $(".modal-wrap").fadeOut();
  });
  
  
  /*생활 알림 */
  $(".routine .routine-content-list > li").hide();
      
      //첫번째 .routine-menu의 li의 active
      //첫번째 .img의 li만 나오게
      $(".routine .routine-menu li").eq(0).addClass("active");
      $(".routine .routine-content-list > li").eq(0).show();


      
      /*.menu li을 클릭하면 다음과 같은 일이 일어남
      1. 사용자가 선택한 .tab-btn li에 active 클래스를 추가하고 나머지는  active 클래스를 없앰
      2. 사용자가 선택한 .tab-btn li의 순서를 알아야함(순서를 가져오는 함수 index 함수)
      3. .tab-cont li의 순번과 동일한 애는 나오고 나머지는 숨김
      */
     $(".routine .routine-menu li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      let aa = $(this).index();
      $(".routine .routine-content-list > li").eq(aa).show().siblings().hide();
     });
});//end