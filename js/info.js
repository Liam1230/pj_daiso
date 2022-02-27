$(function(){
 // info一覧タブ切り替え
  $('.tab-box__btn').click(function() {
    var index = $('.tab-box__btn').index(this);
    $('.tab-box__panel').removeClass('active');
    $('.tab-box__btn').removeClass('active');
    $(this).addClass('active');
    $('.tab-box__panel').eq(index).addClass('active');
  });

});