$(document).ready(function(){//start
  AOS.init();


  // 탭 클릭 이벤트
  $(".tab-list > li").click(function () {
    // 1. 클릭한 li만 active, 나머지는 제거
    $(".tab-list > li").removeClass("active");
    $(this).addClass("active");

    // 2. 탭별 콘텐츠 표시
    if ($(this).is(":nth-child(1)")) {
      $(".report").show();
      $(".sensor").hide();
    } else if ($(this).is(":nth-child(2)")) {
      $(".sensor").show();
      $(".report").hide();
    }
  });

  // 초기 상태: 첫 번째 탭 활성화 & 첫 번째 콘텐츠 표시
  $(".tab-list > li:nth-child(1)").addClass("active");
  $(".report").show();
  $(".sensor").hide();

});//end