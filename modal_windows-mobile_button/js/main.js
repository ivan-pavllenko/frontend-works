$(document).ready(function () {
  // При клике на кнопку "menu-button" появляется mobile menu
  // обращение на jQuery

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-navigation").toggleClass("navbar-navigation_visible");
    $(".menu-button").toggleClass("menu-button_active");
    $("body").toggleClass("lock");
  });


  var menuLink = $(".menu__link");
  menuLink.on("click", function () {
    $(".navbar-navigation").removeClass("navbar-navigation_visible");
    $(".menu-button").removeClass("menu-button_active");
  });

  // // При клике на кнопку "menu-button" появляется mobile menu
  // // обращение на js

  // var menuButton = document.querySelector(".menu-button");
  // menuButton.addEventListener("click", function () {
  //   console.log("Клик по кнопке меню");
  //   document
  //     .querySelector(".navbar-buttom")
  //     .classList.toggle("navbar-buttom_visible");
  // });

  // При клике на кнопку появляется modal windows #hero-modal

  var modalButton = $("[data-toggle=modal-hero]");
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

  // При клике на разные кнопки: data-href="#booking-modal" и data-href="#rating-modal"
  // открываются разные modal windows:id="booking-modal" и id="rating-modal"

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }

  // Обработка форм обратной связи (валидация)

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please specify your phone number",
        },
      },
    });
  });

  // Маска для номера телефона

  $(document).ready(function () {
    $("#hero-modal-phone").mask("+38 (999) 999-99-99");
  });
  $(document).ready(function () {
    $("#booking-modal-phone").mask("+38 (999) 999-99-99");
  });
  $(document).ready(function () {
    $("#rating-modal-phone").mask("+7 (999) 999-99-99");
  });
});