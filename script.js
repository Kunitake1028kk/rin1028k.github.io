$(function(){

  $('.header__left__a').click(function(){

    $('html,body').animate({
      'scrollTop':0
    },300);
  });

  $('.header__right__menu a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html,body').animate({

      'scrollTop':position

    },300);
  });

});
