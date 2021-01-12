$(document).ready(function () {
  "use strict";
  $("a[href*=#]").bind("click", function (e) {
    let anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 50,
        },
        1000
      );
    e.preventDefault();
  });

  return false;
});
