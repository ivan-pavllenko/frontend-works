$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button__next",
      prevEl: ".hotel-slider__button__prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 2000,
    },
  });

  // При клике на кнопку "menu-button" появляется mobile menu
  // обращение на jQuery

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-navigation").toggleClass("navbar-navigation_visible");
    $(".menu-button").toggleClass("menu-button_active");
  });

  var menuLink = $(".menu__link");
  menuLink.on("click", function () {
    $(".navbar-navigation").removeClass("navbar-navigation_visible");
    $(".menu-button").removeClass("menu-button_active");
  });

  // // При клике на кнопку появляется modal windows

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }

  // Маска для номера телефона

  $(document).ready(function () {
    $("#footer-phone").mask("+7 (999) 999-99-99");
  });
  $(document).ready(function () {
    $("#booking-modal-phone").mask("+7 (999) 999-99-99");
  });
});
