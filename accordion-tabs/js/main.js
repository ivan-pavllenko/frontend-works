$(document).ready(function () {
  // Tabs on jQuery

  var tabsItem = $(".tabs__item");
  var contentItem = $(".content__item");

  tabsItem.on("click", function (event) {
    // console.log($(this).attr("data-target")); // обращение к элементу this через data - target
    // console.log($("#" + $(this).attr("data-target"))); // обращение к элементу # + this через data - target
    var activeContent = $(this).attr("data-target");
    contentItem.removeClass("content__item--active");
    tabsItem.removeClass("tabs__item--active");
    $("#" + activeContent).addClass("content__item--active");
    $(this).addClass("tabs__item--active");
  });

  // Accordion on js
  $('.block__title').click(function (event) {
    if ($('.block').hasClass('one')) {
      $('.block__title').not($(this)).removeClass('block__title--active');
      $('.block__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('block__title--active').next().slideToggle(300);

  });


});