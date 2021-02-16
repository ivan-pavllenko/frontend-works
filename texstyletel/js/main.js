$(function () {
  // Плавная прокрутка
  $('.menu_go-about,.menu_go-work,.menu_go-price,.menu_go-review,.menu_go-communication,.footer_go-about,.footer_go-work,.footer_go-price,.footer_go-review,.footer_go-communication,.title__button,.company__button,.button__price,.button__move').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top
      }, 500); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });



  // // Параллакс
  // if($(window).width() > 960)
  // {
  //     $('body').parallax({
  //         'elements': [
  //             {
  //                 'selector': '.move',
  //                 'properties': {
  //                     'x': {
  //                         'right': {
  //                             'initial': 500,
  //                             'multiplier': 0.04,
  //                             'unit': 'px',
  //                             'invert': false
  //                         }
  //                     },
  //                     'y': {
  //                         'top': {
  //                             'initial': 100,
  //                             'multiplier': 0.1,
  //                             'unit': 'px',
  //                             'invert': true
  //                         }
  //                     }
  //                 }
  //             }
  //         ]
  //     });
  // } else {
  //     // change functionality for larger screens
  // }

  // Появление анимации при скролле animate.css

  $(window).scroll(function () {
    $(".company__text,.company__paragraf,.triggers_material,.triggers_mechanism,.contact__text,.contact__city").each(function () {
      var elPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elPos < topOfWindow + 700) {
        $(this).addClass("bounceInLeft");
      }
    });
  });
  $(window).scroll(function () {
    $(".company__title").each(function () {
      var elPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elPos < topOfWindow + 700) {
        $(this).addClass("bounceInDown");
      }
    });
  });
  $(window).scroll(function () {
    $(".manager__photo,.manager__text,.button__price,.comment__item_ivan,.comment__item_ludmila,.comment__item_marina,.comment__item_nina,.button__move").each(function () {
      var elPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elPos < topOfWindow + 700) {
        $(this).addClass("zoomIn");
      }
    });
  });
  $(window).scroll(function () {
    $(".company__button,.benefits__item_a,.benefits__item_b,.benefits__item_c,.socials__item_viber,.socials__item_telegram,.socials__item_instagram,.footer-text,.footer-menu").each(function () {
      var elPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elPos < topOfWindow + 700) {
        $(this).addClass("bounceInUp");
      }
    });
  });
  $(window).scroll(function () {
    $(".offer__end,.triggers_size,.triggers_style,.form,.text-form ").each(function () {
      var elPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elPos < topOfWindow + 700) {
        $(this).addClass("bounceInRight");
      }
    });
  });
  $(window).scroll(function () {
    $(".company__title,.section-heading,.coast__main,.gallery__item,.section-heading,.review-heading,.move__heading,.block_tip,.title-communication__heading").each(function () {
      var elPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elPos < topOfWindow + 700) {
        $(this).addClass("fadeInUp");
      }
    });
  });
  $(window).scroll(function () {
    $(".coast__text,.title-communication__text ").each(function () {
      var elPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elPos < topOfWindow + 700) {
        $(this).addClass("fadeInDown");
      }
    });
  });


  // Кнопка наверх

  $(window).scroll(function () {

    if ($(this).scrollTop() != 0) {

      $('.go-top').fadeIn();

    } else {

      $('.go-top').fadeOut();

    }

  });

  $('.go-top').click(function () {

    $('body,html').animate({
      scrollTop: 0
    }, 800);

  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },

    breakpoints: {
      890: {
        slidesPerView: 2,

      }
    }
  });

  var menuButton = document.querySelector('.menu-button');
  var menu = document.querySelector('.menu-items');
  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
  })





});