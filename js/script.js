jQuery(function ($) {

  //ドロワーメニュー
  $(".js-drawer-btn").click(function () {
    $(".drawer-btn").toggleClass("active");
    $(".drawer-menu").toggleClass("panelactive");
    $(".body").toggleClass("panelactive");
  });
  $(".drawer-menu a").click(function () {
    $(".drawer-btn").removeClass("active");
    $(".drawer-menu").removeClass("panelactive");
  });

  //言語メニュー
  $(".js-language-btn").click(function () {
    $(".drawer-btn").hide();
    $(".language-menu").toggleClass("panelactive");
    $(".body").toggleClass("panelactive");
  });
  $(".language-menu a , .language-menu__back").click(function () {
    $(".drawer-btn").fadeIn();
    $(".language-menu").removeClass("panelactive");
    $(".body").removeClass("panelactive");
  });
  $(".js-language-overlay").click(function () {
    $(".drawer-btn").fadeIn();
    $(".language-menu").removeClass("panelactive");
    $(".body").removeClass("panelactive");
  });
});


// スクロールアニメーション
$(function () {
  $(window).scroll(function () {
    $('.slide-left').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass('active');
      }
    });
  });
});


// トップに戻るボタン
var topBtn = $(".top-scroll");
topBtn.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 70) {
    topBtn.fadeIn();
  } else {
    topBtn.fadeOut();
  }
});
topBtn.click(function () {
  $("body,html").animate({
      scrollTop: 0,},300,"swing"
  );
  return false;
});


// スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
$(document).on("click", 'a[href*="#"]', function () {
  let time = 400;
  let header = $("header").innerHeight();
  let target = $(this.hash);
  if (!target.length) return;
  let targetY = target.offset().top - header;
  $("html,body").animate({ scrollTop: targetY }, time, "swing");
  return false;
});


// 追従ヘッダー
jQuery(window).on('scroll', function () {
  if (jQuery('.main-visual').height() + 200 < jQuery(this).scrollTop()) {
    jQuery('.move-header').addClass('fixed');
  } else {
    jQuery('.move-header').removeClass('fixed');
  }
});


$(function () {
  /* animation
  ------------------------------*/
  // scroll effects
  $.fn.acs = function (options) {

    const elements = this;
    const defaults = {
      screenPos: 0.8,
      className: 'is-animated'
    };
    const setting = $.extend(defaults, options);

    $(window).on('load scroll', function () {
      add_class_in_scrolling();
    });

    function add_class_in_scrolling() {
      const winScroll = $(window).scrollTop();
      const winHeight = $(window).height();
      const scrollPos = winScroll + (winHeight * setting.screenPos);

      if (elements.offset().top < scrollPos) {
        elements.addClass(setting.className);
      }
    }
  }
  $('.anm, [class*="anm-"], .anm-list > *').each(function () {
    $(this).acs();
  });

  // list animation delay
  $.fn.anmDelay = function (options) {
    const elements = this;
    const defaults = {
      delay: 0.2,
      property: 'animation-delay'
    };
    const setting = $.extend(defaults, options);
    const index = elements.index();
    const time = index * setting.delay;
    elements.css(setting.property, time + 's');
  }
  $('.anm-list > *').each(function () {
    $(this).anmDelay();
  });
})


$(function () {
  // INFOページタブ遷移
  //ハッシュタグ読み込み
  var hash = location.hash;
  if (hash.length) {
    //ハッシュがあるとき
    if (hash.match(/#tab/)) {
      //ハッシュタグが「#tab◯」となってたら
      //メニューに付いてる「class="active"」を削除
      $('.tab-box__panel').removeClass('active');
      $('.tab-box__btn').removeClass('active');
      //「#tab◯」を「◯」だけにする
      var tabname = hash.slice(4.1);
      //「n番目を表示する」をしたい。
      //順番は0から始まるので「#tab1」は「0」、「#tab2」は「1」になる
      //なのでそのままだと1つ多くなってしまうので1を引く
      tabname = tabname - 1;
      //n番目のメニューに「class="active"」を付与
      $('.tab-box__panel').eq(tabname).addClass('active');
      $('.tab-box__btn').eq(tabname).addClass('active');
    } else {
      //ハッシュタグが「#tab◯」ではなかったら
      //1番目のメニューに「class="active"」を付与
      $('.tab-box__panel').eq(0).addClass('active');
      $('.tab-box__btn').eq(0).addClass('active');
    }
  } else {
    //ハッシュがなかったら（普通にページ開いたときなど）
    //1番目のメニューに「class="active"」を付与
    $('.tab-box__panel').eq(0).addClass('active');
    $('.tab-box__btn').eq(0).addClass('active');
  }
})


