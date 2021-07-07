(function ($) {
  $("#icone").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("with-sidebar");
  });

  $("#site-cache").click(function (e) {
    e.preventDefault();
    $("body").removeClass("with-sidebar");
  });
})(jQuery);
