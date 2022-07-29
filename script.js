$(function(){
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });

  $("#top-btn").click(function(){
    $("html,body").animate({
      "scrollTop":0
    },500);
  });
  
}); 


window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};

/* スライドショー */
for(let i=1;i<10000;i++){
  function 1to2(){
    $(".1").removeClass("active");
    $(".2").addClass("active");
  }
  setTimeout(1to2, 3000);
  
  function 2to3(){
    $(".2").removeClass("active");
    $(".3").addClass("active");
  }
  setTimeout(2to3, 3000);
  
  function 3to4(){
    $(".3").removeClass("active");
    $(".4").addClass("active");
  }
  setTimeout(3to4, 3000);
  
  function 4to1(){
    $(".4").removeClass("active");
    $(".1").addClass("active");
  }
  setTimeout(4to1, 3000);

}


