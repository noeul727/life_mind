$(document).ready(function(){//start

  // 모든 month의 before, after 숨기기
  $(".figures .figures-box > li .month").addClass("hide-marker");

  // month 클릭 시 해당 li만 before, after 보이게
  $(".figures .figures-box > li .month").click(function () {
    // 다른 모든 li의 표시 숨기기
    $(".figures .figures-box > li .month").addClass("hide-marker");

    // 현재 클릭한 것만 표시
    $(this).removeClass("hide-marker");
  });


// 모든 .figures-graph-clik 숨기기
$(".figures .figures-box .figures-graph .figures-graph-clik").hide();

// month 클릭 시 해당 li 안의 .figures-graph만 변경
$(".figures .figures-box > li .month").click(function() {
  var $li = $(this).closest("li");

  // 해당 li의 .figures-graph 처리
  $li.find(".figures-graph .figures-graph-clik").show();
  $li.find(".figures-graph .figures-graph-nonclik").hide();
});




});//end