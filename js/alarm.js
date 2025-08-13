$(document).ready(function(){//start

  //탭메뉴
  $(".tab-con > ul > li").not(":first").hide();

  $(".tab-menu div").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let aa = $(this).index();
    $(".tab-con > ul > li").eq(aa).fadeIn().siblings().hide();
  });


  $(".alarm-history-drop").hide();

$(".alarm-drop-arrow").click(function (e) {
  e.stopPropagation(); 
  $(".alarm-history-drop").fadeIn();
});

$(document).click(function () {
  $(".alarm-history-drop").fadeOut();
});
$(".alarm-history-drop").click(function (e) {
  e.stopPropagation();
});


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
