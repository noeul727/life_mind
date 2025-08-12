$(document).ready(function(){//start
  AOS.init();


  //modal-wrap 사라짐
  $(".modal-wrap").hide();
  

  //로그아웃 모달
  $(".content-mypage-main .my-logout").click(function(){
    $(".btn-logout").fadeIn();
  });
  $(".modal-wrap .modal-box .btn-close, .modal-wrap .undo, .modal-wrap .modal-box .btn-cancel").click(function(){
    $(".modal-wrap").fadeOut();
  });


  //대상자 수정 모달(1940년)
  $(".content-mypage-sub-02 .field05-left").click(function(){
    $(".btn-birth").fadeIn();
  });
  //구독권 등록 모달
  $(".subscription-plus").click(function(){
    $(".modal-subscription01").fadeIn();
  });
  $(".modal-wrap .modal-box .btn-close").click(function(){
    $(".modal-subscription01").fadeOut();
  });
   $(".modal-wrap .subscription-btn").click(function(){
    $(".modal-subscription01").fadeOut();
    $(".modal-subscription02").fadeIn();
  });

  //일정등록 모달
 $(".registration .field05-left").click(function(){
    $(".btn-year").fadeIn();
  });
  $(".modal-wrap .modal-box .btn-close, .modal-wrap .undo").click(function(){
    $(".modal-wrap").fadeOut();
  });


 $(".btn-registration").click(function(){
    $(".registration01").fadeIn();
  });
  $(".modal-wrap .modal-box .btn-close, .modal-wrap .undo").click(function(){
    $(".modal-wrap").fadeOut();
  });

  //방핵금지모드 모달
 $(".dororok").click(function(){
    $(".modal-start").fadeIn();
  });
  $(".dororok01").click(function(){
    $(".modal-start").fadeOut();
    $(".modal-finish").fadeIn();
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




/*일정 등록 */
     $(".registration .registration-content-list > li").hide();
      
      //첫번째 .routine-menu의 li의 active
      //첫번째 .img의 li만 나오게
      $(".registration .registration-menu li").eq(0).addClass("active");
      $(".registration .registration-content-list > li").eq(0).show();


      
      /*.menu li을 클릭하면 다음과 같은 일이 일어남
      1. 사용자가 선택한 .tab-btn li에 active 클래스를 추가하고 나머지는  active 클래스를 없앰
      2. 사용자가 선택한 .tab-btn li의 순서를 알아야함(순서를 가져오는 함수 index 함수)
      3. .tab-cont li의 순번과 동일한 애는 나오고 나머지는 숨김
      */
     $(".registration .registration-menu li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      let aa = $(this).index();
      $(".registration .registration-content-list > li").eq(aa).show().siblings().hide();
     });


 // 알람 추가

    $(".alert02").hide();
    $(".plus-btn").click(function(){
      $(".alert02").show();
    });
    $(".alert02 .delete").click(function(){
      $(".alert02").hide();
    });


     //토글 버튼 방해 금지 모드
     $(".toggle-left p, .toggle-left h4").hide();
     $(".toggle-right .switch input").change(function(){
      if($(this).is(":checked")){
        $(".toggle-left p, .toggle-left h4").show();
      }else{
        $(".toggle-left p, .toggle-left h4").hide();
      }
     });

     


});//end