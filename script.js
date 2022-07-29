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

const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  console.log('ok!');
  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
