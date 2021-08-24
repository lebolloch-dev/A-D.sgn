const about = document.getElementById("about");

const aboutMe = document.getElementById("aboutMe");

const cross = document.getElementById("crossIcon");

cross.addEventListener("click", function () {
  aboutMe.style.display = "none";
});

about.addEventListener("click", function (e) {
  e.preventDefault();

  window.top.scrollTo(0, 0);
  aboutMe.style.display = "flex";
});

(function ($) {
  $("#icone").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("with-sidebar");
  });

  $("#site-cache").click(function (e) {
    e.preventDefault();
    $("body").removeClass("with-sidebar");
  });

  $("a[href*='#']:not([href='#'])").click(function () {
    {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("body").removeClass("with-sidebar");
        $("html, body").animate({ scrollTop: anchor.offset().top }, 200);
      }
    }
  });
})(jQuery);
