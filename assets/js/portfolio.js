!(function ($) {
  "use strict";
  // toggle class branding button
  $(".tombol-branding").click(function () {
    $(this).addClass("tombol-active").siblings().removeClass("tombol-active");
  });
  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");
      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });

    $(".portfolio-item").each(function (i) {
      setTimeout(function () {
        $(".portfolio-item").eq(i).addClass("element-show");
      }, 200 * (i + 1));
    });
    // Initiate venobox (lightbox feature used in portofilo)

  });
  // fancybox
  $('[data-fancybox="images"]').fancybox({
    afterLoad: function (instance, current) {
      var pixelRatio = window.devicePixelRatio || 1;

      if (pixelRatio > 1.5) {
        current.width = current.width / pixelRatio;
        current.height = current.height / pixelRatio;
      }
    }
  });
})(jQuery);

// animasi

// $(".tombol-branding").click(function (e) {
//   $(this).addClass("tombol-active").siblings().removeClass("tombol-active");

//   if (e.target.dataset.target == "portfolio-branding-mobil") {
//     $(".portfolio-branding-mobil")
//       .addClass("portfolio-show")
//       .siblings()
//       .removeClass("portfolio-show");
//   }
//   if (e.target.dataset.target == "portfolio-branding-kantor") {
//     $(".portfolio-branding-kantor")
//       .addClass("portfolio-show")
//       .siblings()
//       .removeClass("portfolio-show");
//   }
//   if (e.target.dataset.target == " portfolio-digital-printing") {
//     $(".portfolio-digital-printing")
//       .addClass("portfolio-show")
//       .siblings()
//       .removeClass("portfolio-show");
//   }
//   if (e.target.dataset.target == " portfolio-cutting-sticker") {
//     $(".portfolio-cutting-sticker")
//       .addClass("portfolio-show")
//       .siblings()
//       .removeClass("portfolio-show");
//   }
//   if (e.target.dataset.target == " portfolio-stock-sticker") {
//     $(".portfolio-stock-sticker")
//       .addClass("portfolio-show")
//       .siblings()
//       .removeClass("portfolio-show");
//   }
// });

// $(window).on("load", function () {
//   // portfolio
//   $(".portfolio-img").each(function (i) {
//     setTimeout(function () {
//       $(".portfolio-img").eq(i).addClass("element-show");
//     }, 200 * (i + 1));
//   });
// });