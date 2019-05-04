$(function(){
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:2000,
    fade:true,
    speed:3000
  });
  $('.return-top').click(function() {
    $('body,html').animate({scrollTop:0},300,'linear');
  });
  $('.faq').click(function() {
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideDown();
      $(this).find('.modal-button').text('-');
    }else {
      $answer.addClass('open');
      $answer.slideUp();
      $(this).find('.modal-button').text('+');
    }
  });
  $('.title').fadeIn(2000);
  $('.sub-title').fadeIn(3000);

  $('.imformation').hover(function() {
    $('.faq').fadeIn(1500);
  })

});
