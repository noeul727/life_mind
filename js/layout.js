$(document).ready(function(){//start
  AOS.init();


   // 모든 .input-icon span에 대해 클릭 이벤트 연결
  document.querySelectorAll('.field02 .input-icon span').forEach(function(clearBtn) {
    clearBtn.addEventListener('click', function () {
      // span의 부모 .input-icon 안에 있는 input[type="text"] 찾기
      const input = this.closest('.input-icon').querySelector('input[type="text"]');
      if (input) {
        input.value = '';
        input.focus();
      }
    });
    //modal-wrap 사라짐

    $(".gnb .gnb-list ul").click(function(){
       $(".gnb .gnb-list ul").removeClass("active"); // 전체 제거
       $(this).addClass("active");                    // 클릭한 요소만 추가
      
    });
  });

  var selSwiperCol1 = new Swiper(".sel .swiper-container", {
          loop: false,
          direction: 'vertical',
          slidesPerView: 5,
          initialSlide: 6,
          centeredSlides: true,
      });
  
  var selSwiperCol2 = new Swiper(".sel01 .swiper-container", {
      loop: false,
      direction: 'vertical',
      slidesPerView: 5,
      initialSlide: 0,
      centeredSlides: true,
  });
    var selSwiperCol3 = new Swiper(".sel02 .swiper-container", {
      loop: true,
      direction: 'vertical',
      slidesPerView: 5,
      initialSlide: 0,
      centeredSlides: true,
  });
    var selSwiperCol4 = new Swiper(".sel03 .swiper-container", {
      loop: true,
      direction: 'vertical',
      slidesPerView: 5,
      initialSlide: 0,
      centeredSlides: true,
  });
});//end