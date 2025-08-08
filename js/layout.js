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
  });
  
});//end