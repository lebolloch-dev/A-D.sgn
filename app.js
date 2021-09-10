(function ($) {
  $("#icone").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("with-sidebar");
  });

  $("#site-cache").click(function (e) {
    e.preventDefault();
    $("body").removeClass("with-sidebar");
  });

  $("#Project").click(function (e) {
    $("body").removeClass("with-sidebar");
  });

  $("#Realisation").click(function (e) {
    $("body").removeClass("with-sidebar");
  });

  $("#Graphism").click(function (e) {
    $("body").removeClass("with-sidebar");
  });

  $("#about").click(function (e) {
    $("body").removeClass("with-sidebar");
    $(".site-pusher").toggleClass("cache-about");
    $("#page").css({ "z-index": "auto" });
    $("#aboutMe").css({ display: "flex" });
    $("#aboutMe").animate(
      {
        opacity: 1,
        top: 0,
      },
      1000,
      function () {}
    );
  });

  $("#site-x").click((e) => {
    e.preventDefault();
    $(".site-pusher").removeClass("cache-about");
    $("#aboutMe").css({ display: "none" });
    $("#page").css({ "z-index": "-1" });
    $("#aboutMe").animate(
      {
        opacity: 0,
        top: -923,
      },
      1000,
      function () {}
    );
  });

  $("#Book").click(function (e) {
    $("body").removeClass("with-sidebar");
    $(".site-pusher").toggleClass("cache-about");
    $("#page").css({ "z-index": "auto" });
    $("#book").css({ display: "flex" });

    $("#book").animate(
      {
        opacity: 1,
        top: 0,
      },
      1000,
      function () {}
    );
    $("html").css({ overflow: "hidden" });
  });

  $("#site-x").click((e) => {
    e.preventDefault();
    $(".site-pusher").removeClass("cache-about");
    $("#book").css({ display: "none" });
    $("#page").css({ "z-index": "-1" });
    $("#book").animate(
      {
        opacity: 0,
        top: -923,
      },
      1000,
      function () {}
    );
    $("html").css({ overflow: "auto" });
  });

  $("#magazine").turn({ gradients: true, acceleration: true });
})(jQuery);
