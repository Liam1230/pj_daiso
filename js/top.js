$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      $(".video-area").addClass('is-active');
    } else {
      sessionStorage.setItem('access', 'true');
      setTimeout(function () {
        $(".video-area").fadeOut();
      }, 11000);
    }
  }
  webStorage();
});
$(function () {
  $('#btn_skip').click(function () {
    $('#video-area').fadeOut();
    $('#js-body').css({ 'position': 'relative', });
  });
});
$(function () {
  const date = document.querySelector(".count-down__date");
  function countDown() {
    const now = new Date();
    const end = new Date("2022/4/15 00:00");
    const diff = end - now;
    const diffSec = Math.floor(diff / 1000);
    const dateSec = 60 * 60 * 24;
    const Days = Math.floor(diffSec / dateSec);
    date.innerHTML = Days;
    setTimeout(countDown, 1000);
  }
  countDown();
});
$(function () {
  $(".js-top-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrow: false,
    variableWidth: true,
    prevArrow:
      '<span class="main-visual__prev"></span>',
    nextArrow:
      '<span class="main-visual__next"></span>',
  });
});
