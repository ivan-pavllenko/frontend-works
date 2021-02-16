$(document).ready(function () {
  // СЕЛЕКТОРЫ
  // Базовые селекторы (#id, tagName, .class...)
  // $(".lead").css("border", "solid 3px red");
  // Селекторы взаимодействия (parent, child, + ~, body h2, h2+p, h2~p ...)
  // $("h2~p").css("border", "solid 3px red");
  // Простые фильтры (:first, :last, :even, :odd, eq, ...)
  // $("p:eq(3)").css("border", "solid 3px red");
  // Фильтры по модержимому (:has, :parent, :empty, h2:has(span)...)
  // $(".box:parent").css("border", "solid 3px red");
  // Фильтры по атрибутам ([name = ~ value]) 'a[href="https://www.google.com/"]', 'a[href^="https"]', 'a[href$=".ru"]'
  // $('a[href$=".ru"]').css("border", "solid 3px red");
});

$(document).ready(function () {
  // СОБЫТИЯ
  // Клики мышкой (click, dblclick)
  // $("h2").click(function () {
  // console.log("Click on title");
  //   $(this).toggleClass("blue");
  // });
  // Полёты над элементом (mouseenter, mouseleave)
  // $("h2").mouseleave(function () {
  //   $("h2").toggleClass("blue");
  // });
  // Формы (focus, change)
  // $("input").change(function () {
  //   $("#userName").text(", " + $(this).val());
  // });
  // Клавитатура (keypress, keydown, keyup)
  // $("input").keyup(function () {
  //   $("#userName").text(", " + $(this).val());
  // });
});

$(document).ready(function () {
  // Базовая анимация
  // $(".box:first").delay(1000).hide(3000).delay(1000).show(1000);
  // $(".box:first").animate({ width: "200px" }, 2000);
  // $(".box:first").slideUp(1000).slideDown(1000);

  // Взаимодействия с атрибутами
  // alert($("img").attr("src"));
  // $("img").click(function () {
  //   $(this).fadeOut(1000, function () {
  //     $(this).attr("src", "image-2.jpg").fadeIn(1000);
  //   });
  // });
  // $("p.lead").attr("data-target", "text");

  // Взаимодействия с классами
  $("p.lead").click(function () {
    // $("p.lead").addClass("blue");
    // $("p.lead").removeClass("lead");
    // $(this).toggleClass("blue");
    // $(this).toggleClass("lead blue");
  });
  // Клонирование, добавление, перемещение элементов
  $(".lead").click(function () {
    // $(this).text("It is my owner text");
    // $(this).html("It is my owner <em>text</em>");
    // $(this).append("Additional text at the end");
    // $(this).prepend("Additional text at first");
    // $(this).after("New paragraph");
    // $(this).wrap('<div class="container"></div>');
    // $(this).unwrap('<div class="container"></div>');
    // $(this).html("It is my owner text");
    // $(this).empty();
    // $(this).remove();
    $(this).append("<br />" + $(this).text());
  });
});
