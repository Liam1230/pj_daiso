jQuery(function ($) {
  $(".history-scroll__start-btn").click(function () {
    $(".history-top").toggleClass("panelactive", 2000);
    $(this).toggleClass("panelactive", 2000);
    $(".history-top__message").toggleClass("panelactive", 2000);
    $(".history-top .wind").hide();
  });

  const touchArea1 = document.getElementById("sp-swipe");
  touchArea1.addEventListener("touchend", () => {
    preventDefault();
    $(".history-top").toggleClass("panelactive");
    $(".history-top__message").toggleClass("d-none");
    $(".history-top .wind").hide();
  });
  $(window).on("scroll", function () {
    const doch = $(document).innerHeight();
    const winh = $(window).innerHeight();
    const bottom = doch - winh;
    const currentPos = window.pageYOffset;
    const windowWidth = $(window).width();
    if (bottom <= $(window).scrollTop()) {
      $(".history-section__coming").addClass("history-section__coming_anim");
      $(".history-section__year-text2").addClass("history-section__year-text_anim");
    }
    let paramarleft = (currentPos / 10) * (windowWidth / 1280) + "px";
    $(".paraarea").css("background-position-x", paramarleft);
  });
});
$(function() {
  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      const hScroll = $(".h-scroll"),
          hScrollContain = $(".h-scroll__container"),
          scrollPercent = 200;
      const fullWidth = $(".h-scroll").width();
      hScroll.css({
          position: "initial",
          overflowX: "scroll"
      });
      function checkWidth() {
        const windowHeight = $(window).height(),
          calc = scrollPercent * 100 + windowHeight - 2939;
        hScrollContain.css({
          height: windowHeight,
        });
        console.log("windowHeight",windowHeight);
      }
      checkWidth();
      $(window).resize(checkWidth);
      $("body").on("touchmove", function() {
          const scrollX = $(this).scrollLeft();
          const windowWidth = $(window).width();
          console.log("scrollXこしたら",scrollX);
          console.log("windowWidth対象",fullWidth - windowWidth);
          if (fullWidth - windowWidth <= scrollX) {
              console.log("超えたよーー");
              $(".history-section__coming").addClass("history-section__coming_anim");
              $(".history-section__year-text2").addClass("history-section__year-text_anim");
          };
          let paramarleft = scrollX / 6 + 'px';
          $(".paraarea").css("background-position-x", paramarleft);
      });
  } else {
      const hScroll = $(".h-scroll"),
          hScrollContain = $(".h-scroll__container"),
          scrollPercent = 200;
      function checkWidth() {
          const windowHeight = $(window).height(),
              calc = scrollPercent * 100 + windowHeight - 2939;
          hScrollContain.css({
              height: calc,
          });
      }
      checkWidth();
      $(window).resize(checkWidth);
      $(window).scroll(function() {
          const scroll = $(this).scrollTop();
          hScroll.css({
              transform: "translateX(-" + scroll / scrollPercent + "%)",
          });
      });
  }
});
$(function () {
  $(".js-modal-open").click(function () {
    $(".modal-window").fadeIn();
  });
  $(".js-modal-close").click(function () {
    $(".modal-window").fadeOut();
  });
  $(".js-modal-overray").click(function () {
    $(".modal-window").fadeOut();
  });

  $(".js-modal-open2").click(function () {
    $(".modal-window--2").fadeIn();
  });
  $(".js-modal-close").click(function () {
    $(".modal-window--2").fadeOut();
  });
  $(".js-modal-overray").click(function () {
    $(".modal-window--2").fadeOut();
  });
});
$(function () {
  const swipeupIcon = $(".swipeup-icon");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      swipeupIcon.fadeOut();
    }
  });
});
