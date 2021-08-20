$(document).ready(function () {


  $("#accordion").resize(function () {
    /* не адекватно работает ! */
  });

  $(window).resize(function () {
    is_accordion();

    // hasScroll
    elementOverflow();

    // пока не заморачиваться с пересчетом max_height_content и т.д.... - так как обычно никто не ресайзит окна...

    // если колонки не помещаются и м.б. только РА
    if ($("#accordion").hasClass("only_accordion")) {


      // изначально все вкладки закрываем // а при раскрытии раскрываются тоже все... Ещё / Скрыть ещё  меняются тоже у всех вкладок при режиме only РА
      $("#accordion").find(".column-accord").each(function (i, e) {
        if (!$(e).hasClass("hasScroll")) {
          $(e).removeClass("is_more");
        }
      });

      $("#accordion").find(".column-accord").removeClass('to_table');
    } else { // если в РА, но из него можно выйти в Табличный режим
      $("#accordion").find(".column-accord").addClass('to_table');
    }

  });

  /************************/

  /* если колонки не помещаются в определенное расширение экрана - то переходим в режим аккардиона */
  function is_accordion() {

    var n_columns = $("#accordion .flex-container").children(".column-accord").length;
    var width_window = $(window).width();
    var width_table = n_columns * accordion_min_width_column;
    var is_accordion = width_table >= width_window;

    if (is_accordion) {
      $("#accordion").addClass("is_accordion");
      $("#accordion").addClass("only_accordion");

      $("#accordion").find(".column-accord").each(function (i, e) {
        $(e).addClass("is_accord");
      });
    } else {
      $("#accordion").removeClass("is_accordion");
      $("#accordion").removeClass("only_accordion");

      $("#accordion").find(".column-accord").each(function (i, e) {
        $(e).removeClass("is_accord");
      });
    }

    return is_accordion;
  }

  // кнопка ещё - показать/скрыть
  function elementOverflow() {
    //console.log("!!! max_height_content ", max_height_content);

    $("#accordion").find(".column-accord ").each(function (i, e) {
      var $e = $(e);
      // допустимая высота контента во вкладке
      var height_content = $e.find(".flex-container").outerHeight() - $e.find(".title").outerHeight();
      // высота всех тегов в данной вкладке
      var height_tags = $e.find(".tags").outerHeight();

      console.log("max_height_content ", max_height_content);
      console.log("height_content ", height_content);
      console.log("height_tags ", height_tags);

      console.log("----------------");

      if (height_tags >= height_content || height_tags > max_height_content) {
        $e.addClass('hasScroll');
      } else {
        //if( ! $e.hasClass("is_more")){
        $e.removeClass('hasScroll');
        //}
      }
    });
    console.log("/////////////////////////////");
  }

  // на тачпад устройствах - проводим пальцем вправо
  $("#accordion").on('swiperight', '.column-accord.is_accord', function (e) {
    e.preventDefault();

    console.log("You swiped right!");

    if ($(this).hasClass("active")) {
      console.log($(this).prev(".column-accord").find(".title").text());
      //elementOverflow();
      var prevElem = $(this).prev(".column-accord");

      if (prevElem.length) {
        $(this).removeClass('active').show(400);

        prevElem.addClass('active').show(400);
        changeIsMore(prevElem);
        elementOverflow();
      } else {
        console.log("нет предидущего элемента!");
        return;
      }
      elementOverflow();
    } else {
      $("#accordion").find(".column-accord.active").removeClass('active').show(400);
      $(this).addClass('active').show(400);
      changeIsMore($(this));
      elementOverflow();
    }
  });

  // на тачпад устройствах - проводим пальцем вправо

  $("#accordion").on('swipeleft', '.column-accord.is_accord', function (e) {
    e.preventDefault();

    console.log("You swiped left!");

    if ($(this).hasClass("active")) {
      //elementOverflow();

      var nextElem = $(this).next(".column-accord");
      if (nextElem.length) {
        $(this).removeClass('active');

        nextElem.addClass('active');
        changeIsMore(nextElem);
        elementOverflow();
      } else {
        console.log("нет следующего элемента!");
        return;
      }
      elementOverflow();
    } else {
      $("#accordion").find(".column-accord.active").removeClass('active');
      $(this).addClass('active');
      changeIsMore($(this));
      elementOverflow();
    }
  });

  // у текущей активной вкладки узнаем максимально допустимую высоту контента для всех вкладок (по ней будем ориентироваться чтобы скрыть или показать кнопку СКРЫТЬ ЕЩЁ
  // если не в раскрытом режиме вкладки - то пересчитываем максимальную допустимую высоту контента для тегов - чтою знать показывать ли Скрыть ещё или нет кнопки ( в раскрытом режиме)
  function changeIsMore($this) {
    if (!$("#accordion").hasClass("isMore")) {
      var tmp = $this.find(".content").outerHeight();
      if (tmp > max_height_content)
        max_height_content = tmp;
    } else { // если есть класс isMore - значит должны быть все вкладки раскрыты, которые не помещались
      var height_tags = $this.find(".tags").outerHeight();

      if (height_tags > max_height_content) {
        $this.addClass("is_more");
        $this.find(".show").css("display", "none"); // Ещё
        $this.find(".hide").css("display", "inline"); // Скрыть ещё
        elementOverflow();
      }
    }
  }


  // кликаем по телу вкладки - доступно только в РА
  //$(".column-accord").on('click', function(e) {
  $("#accordion").on('click', ".column-accord.is_accord:not(.active)", function (e) {
    e.preventDefault();

    // если кликаем по Неактивной вкладке - меняем активную вкладку
    $("#accordion").find(".column-accord.active").removeClass('active').show(400);
    $(this).addClass('active');

    // у текущей активной вкладки узнаем максимально допустимую высоту контента для всех вкладок (по ней будем ориентироваться чтобы скрыть или показать кнопку СКРЫТЬ ЕЩЁ
    // если не в раскрытом режиме вкладки - то пересчитываем максимальную допустимую высоту контента для тегов - чтою знать показывать ли Скрыть ещё или нет кнопки ( в раскрытом режиме)
    changeIsMore($(this));


    // если в РА, но из него можно выйти в Табличный режим
    if (!$("#accordion").hasClass("only_accordion")) {
      $(this).addClass('to_table');
    } else {
      $(this).removeClass('to_table');
    }

    elementOverflow();
  });



  // Ещё / Скрыть ещё
  //$('a.more').on('click', function (e) {
  $('.more a').on('click', function (e) {
    e.preventDefault();
    var $this = $(this).parents('.column-accord');

    // если колонки не помещаются и м.б. только РА
    if ($("#accordion").hasClass("only_accordion")) {

      // в РА  ограничение по высоте снимается у всех - и все кнопки становятся Скрыть ещё... и наоборот
      // если вкладки раскрыти - то они схлопываем // и наоборот

      // если вкладка раскрыта - схлопываем её ... и наоборот
      if ($this.hasClass("is_more")) {
        $("#accordion").removeClass("isMore");

        // закрываем всё
        $("#accordion").find(".column-accord ").each(function (i, e) {
          $(e).removeClass("is_more");
          $(e).find(".show").css("display", "inline"); // Ещё
          $(e).find(".hide").css("display", "none"); // Скрыть ещё
        });
        elementOverflow();
      } else {
        $("#accordion").addClass("isMore");
        $this.addClass("is_more");
        $this.find(".show").css("display", "none"); // Ещё
        $this.find(".hide").css("display", "inline"); // Скрыть ещё
      }

    } else { // если в РА, но из него можно выйти в Табличный режим

      if ($("#accordion").hasClass("is_accordion")) {

        $("#accordion").removeClass("is_accordion"); // выходим с режима гармошки
        $("#accordion").find(".column-accord ").each(function (i, e) {
          $(e).removeClass("is_accord");
        });

        $("#accordion").removeClass("isMore");
        $this.removeClass('to_table'); // кнопка Скрыть ещё - для выхода из РА в табл.режим
        // Проверка показывать ли кнопку ЕЩЁ - в зависимости от длины контента с тегами
        elementOverflow();
      } else {
        if ($("#accordion").width() <= accordion_on_min_width) {
          $("#accordion").addClass("is_accordion"); // включаем режим гармошки
        } else {
          $("#accordion").addClass("show_global_hide_more");
        }
        $("#accordion").find(".column-accord ").each(function (i, e) {
          $(e).addClass("is_accord");
        });

        // включается активность у кликнутой вкладки
        $("#accordion").find(".column-accord.active").removeClass('active');
        $this.addClass('active');
        $("#accordion").addClass("isMore");
        $this.addClass('to_table');

        // Проверка показывать ли кнопку ЕЩЁ - в зависимости от длины контента с тегами
        elementOverflow();
      }

    }
  });

  $('.global_hide').on('click', tags_also_more_hideall_btn);

  function tags_also_more_hideall_btn() {
    $("#accordion").find(".column-accord ").each(function (i, e) {
      $(e).removeClass("is_accord");
    });
    $("#accordion").removeClass("show_global_hide_more");
    $("#accordion").removeClass("isMore");
    $("#accordion").removeClass('to_table'); // кнопка Скрыть ещё - для выхода из РА в табл.режим
    // Проверка показывать ли кнопку ЕЩЁ - в зависимости от длины контента с тегами
    elementOverflow();
  }

  //////////////////////////////////////////////////

  // ПРИ ЗАГРУЗКЕ станицы

  // при первоначальной загрузке - первый эл-т по умолчанию активный
  $("#accordion .flex-container .column-accord:first-child").addClass("active");

  // помещаются ли все колонки - если нет, то в РА
  is_accordion();

  // Проверка показывать ли кнопку ЕЩЁ - в зависимости от длины контента с тегами
  elementOverflow();

  // если в режиме аккордиона, из кот.-го не можем выйти на данном расширении
  if ($("#accordion").hasClass("only_accordion")) {
    max_height_content = $(this).find(".content").outerHeight();
    console.log("! max_height_content ", max_height_content);
  }


});