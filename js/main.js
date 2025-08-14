$(document).ready(function(){//start
  AOS.init();


  // 탭 메뉴
  $(".tab-list > li").click(function () {

    $(".tab-list > li").removeClass("active");
    $(this).addClass("active");

    if ($(this).is(":nth-child(1)")) {
      $(".report").show();
      $(".sensor").hide();
    } else if ($(this).is(":nth-child(2)")) {
      $(".sensor").show();
      $(".report").hide();
    }
  });

  $(".tab-list > li:nth-child(1)").addClass("active");
  $(".report").show();
  $(".sensor").hide();


  //$(".call-wrap").hide();
  $(".home .graph-box .graph ul li:nth-child(5)").click(function () {
    $(".home .graph-box .graphimg1, .home .graph-box .graphimg2").css("display","block");
  
  });
  // 긴급전화 버튼 클릭 시
  $(".alarm-more-btn").click(function () {
    $(".call-wrap").css("display","block");
    $("body").css("overflow", "hidden"); // 스크롤 비활성화
  });

  // 취소 클릭 시
  $(".call-cont > li:nth-child(2)").click(function () {
    $(".call-wrap").hide();
    $("body").css("overflow", ""); 
  });

});//end