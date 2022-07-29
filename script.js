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
  
  $("#js-hamburger").click(function(){
    $(".header__nav").toggleClass("active");
    $(".hamburger.active").toggleClass("active");
  });

}); 

/*
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  console.log('ok!');
  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
*/


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

