$(document).ready(function(){//start

  $(".calendar-wrap").hide();

  $(".calendar-btn").click(function(){
    $(".calendar-wrap").show();
  });

  $(".calendar-wrap .calendar-modal .calendar-day > li p").removeClass("active");


  $(".calendar-wrap .calendar-modal .calendar-day > li p").click(function(){
    // 모든 <p> 요소에서 active 클래스 제거
    $(".calendar-wrap .calendar-modal .calendar-day > li p").removeClass("active");
    
    // 클릭한 <p>에만 active 클래스 추가
    $(this).addClass("active");
  });

   $(".calendar-select").click(function(){
     $(".calendar-wrap").hide();
   });

      $(".calendar-select").click(function(){
     $(".calendar-close").hide();
   });




  

  const food = new Swiper('.food', {
  slidesPerView: 3.5, // (기본 모바일)가로 한줄에 보이는 슬라이드 갯수
  spaceBetween: 16,
  
});

});//end

