/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'
import slick from 'slick-carousel'

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)
})

// アイテムメニュークリック
$(".l-header__searchTrriger").click(() => {
  $(".l-header__bottomSearchMenu").toggle(),
  $(".l-header__searchTrriger").toggleClass('rollover');
});

// 会員アイコンクリック
$(".l-header__bottomMember").click(() => {
$(".l-header__memberPopUp").toggle(),
$(".l-header__bottomMember").toggleClass('rollover');
});

// ハンバーガーメニュー開閉
$(".p-header__trigger").on('click',() => {
  if(!$(".p-header__spmenu").is(':animated')){
    $(".p-header__trigger").toggleClass('active');
    $('html').toggleClass('open');
    $('.back').toggleClass('open');
  }
  return false;
});

// ハンバーガーメニューの背景クリック時
$(".back").on('click', function(){
  if($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(".p-header__trigger").removeClass('active');
    $('html').removeClass('open');
  }
});

// ヘッダー固定
function FixedAnime() {
	var headerH = $('.l-header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH && window.matchMedia('(max-width: 699px)').matches) {
		$('.l-header').addClass('fixed');
	}else{
		$('.l-header').removeClass('fixed');
	}
}

$(window).scroll(() => {
	FixedAnime();
});

// 新作スライダー
$(() => {
  $(document).ready(() => {
    $(".p-new__slideItem").slick({
      slidesToShow: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 2000,
      infinite: true,
      arrows: true,
      prevArrow: '<div class="p-new__prev"><img src="./assets/images/prev.png"></div>',
      nextArrow: '<div class="p-new__next"><img src="./assets/images/next.png"></div>',
    });
  });
});

$(() => {
  $(document).ready(() => {
    $(".p-new__slideItemTAB").slick({
      slidesToShow: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 2000,
      infinite: true,
      arrows: true,
      prevArrow: '<div class="p-new__prev"><img src="./assets/images/prev.png"></div>',
      nextArrow: '<div class="p-new__next"><img src="./assets/images/next.png"></div>',
    });
  });
});


// 予約・再入荷スライダー
$(() => {
  $(document).ready(() => {
    $(".p-preorder__slider").slick({
      slidesToShow: 1,
      dots: false,
      autoplay: false,
      arrows: false,
    });
  });
});

// ピックアップスライダー
$(() => {
  $(document).ready(() => {
    $(".p-pickupTAB__slider").slick({
      slidesToShow: 4,
      dots: false,
      autoplay: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 844,
          settings: {
          slidesToShow: 3,
          },
        },
        {
          breakpoint: 499,
          settings: {
          slidesToShow: 2,
          },
        },
      ],
    });
  });
});

// 言の葉OPEN
function wordListOpen() {
	$(".p-play__wordList").children("li").removeClass("hide");
	$(".p-play__wordMore").addClass("hide");
}

$(".p-play__wordMore").on("click",() => {
  wordListOpen();
});

