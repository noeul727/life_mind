$(document).ready(function(){//start

  //탭메뉴
  //첫번째 탭 빼고 숨기기
  $(".tab-con > ul > li").not(":first").hide();

  $(".tab-menu div").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let aa = $(this).index();
    $(".tab-con > ul > li").eq(aa).fadeIn().siblings().hide();
  });


  $(".alarm-history-drop").hide();

$(".alarm-drop-arrow").click(function (e) {
  e.stopPropagation(); // 클릭 이벤트 전파 방지
  $(".alarm-history-drop").fadeIn();
});

$(document).click(function () {
  $(".alarm-history-drop").fadeOut();
});

// 드롭다운 클릭 시 닫히지 않게
$(".alarm-history-drop").click(function (e) {
  e.stopPropagation();
});






// 추가: 페이지 로딩 시 URL 해시 체크 후 해당 탭 활성화
let hash = window.location.hash;
if(hash) {
  let targetTab = $(".tab-menu .tab" + hash);
  if(targetTab.length) {
    targetTab.addClass("active").siblings().removeClass("active");
    let index = targetTab.index();
    $(".tab-con > ul > li").eq(index).fadeIn().siblings().hide();
  }
}

});//end
