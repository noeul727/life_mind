$(document).ready(function(){//start
  AOS.init();


  //modal-wrap 사라짐
  $(".modal-wrap").hide();
  $(".content-mypage-sub-02 .field05 ul li.choice-year").click(function(){
    $(".modal-wrap").fadeIn();
  });
  $(".modal-wrap .modal-box .btn-close").click(function(){
    $(".modal-wrap").fadeOut();
  });
});//end