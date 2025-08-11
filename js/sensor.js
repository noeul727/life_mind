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


  // 센서 - 더보기
  $(".more-menu").hide();

  $(".sensor-more").click(function(event){
    event.stopPropagation();
    $(".more-menu").fadeToggle();
  });

  $(document).click(function(){
    $(".more-menu").fadeOut();
  });

  $(".more-menu").click(function(event){
    event.stopPropagation();
  });


  // 센서 검색창
  $(".sensor-search-page").hide();

  $(".sensor-search-page-top a").click(function(){
    $(".sensor-search-page").fadeOut();
  });
  $(".sensor-search").click(function(){
    $(".sensor-search-page").fadeIn();
  });

  $(".sensor-search-keyboard").hide();
  $(".sensor-search-page-top input").click(function(){
    $(".sensor-search-keyboard").fadeIn(200);
  });

  // 키보드 닫힘 (키보드 눌려도 닫힘 주의)
  $(".sensor-search-page-top input").click(e => {
    e.stopPropagation();
  $(".sensor-search-keyboard").fadeIn(200);
  });

  $(document).click(() => {
    $(".sensor-search-keyboard").fadeOut(200);
  });


  // 장소 등록
  $(".sensor02-keyboard-place").hide();

  $(".cont-sensor-02 input").click(function(e){
    e.stopPropagation(); // 클릭 전파 방지
    $(".sensor02-keyboard-place").fadeIn(200);
    $(".btn-place-button").animate({ bottom: "300px" }, 200);
  });

  // 화면 아무데나 클릭 시
  $(document).click(function(){
    $(".sensor02-keyboard-place").fadeOut(200);
    $(".btn-place-button").animate({ bottom: "0" }, 200);
  });

  // keyboard나 버튼 클릭 시 닫히지 않게
  $(".sensor02-keyboard-place, .btn-place-button").click(function(e){
    e.stopPropagation();
  });


  $(".sensor-find").hide();
  $(".cont-sensor-03 .btn-big-01").click(function(){
    $(".sensor-find").fadeIn(200);
  });

  $(".cont-sensor-03 .btn-mid-02").click(function(){
    $(".sensor-find").fadeOut();
  });

  $(".sensor-wifi").hide();
  $(".sensor-chowifi").click(function() {
    $(".sensor-chowifi").removeClass("active");
    $(this).addClass("active");
  });

  $(".sensor-find .btn-mid-02").click(function(){
    $(".sensor-wifi").fadeIn();
     $(".sensor-find").hide();
  });

  $(".sensor-wifi-modal").hide();

  $(".sensor-wifi .btn-big-01").click(function(){
    $(".sensor-wifi-box").hide();
    $(".sensor-wifi-modal").fadeIn();
    $(".sensor-find").hide();
  });



  $(".sensor-place-modal").hide();
  $(".sensor-place-wrap").hide();
  $(".sensor-place-modal-btn01").click(function(){
    $(".sensor-place-modal").fadeIn();
    $(".sensor-place-wrap").fadeIn();
  });

  $(".sensor-place-modal-btn02").click(function(){
    $(".sensor-place-modal").fadeOut();
    $(".sensor-place-wrap").fadeOut();
  });
  


  

  
  

});//end