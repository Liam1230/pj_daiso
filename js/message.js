// 追従ヘッダー
jQuery(window).on('scroll', function () {
  if (jQuery('.message-visual').height() - 60 < jQuery(this).scrollTop()) {
    jQuery('.sub-header').addClass('fixed');
  } else {
    jQuery('.sub-header').removeClass('fixed');
  }
});