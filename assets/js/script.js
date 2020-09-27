$(document).ready(function () {

  // tombol branding
  $(".tombol-branding").click(function () {
    $(this).addClass("tombol-active").siblings().removeClass("tombol-active");
  });
  // hover faq
  $(".panel-heading").mouseenter(function () {
    $(this).children([".collapsed"]).css("font-weight", "bold");
  });
  // mouseleave faq
  $(".panel-heading").mouseleave(function () {
    $(this).children([".collapsed"]).css("font-weight", "normal");
  });

  // branding section

  $(".tombol-branding").click(function (e) {
    $(this).addClass("tombol-active").siblings().removeClass("tombol-active");

    if (e.target.dataset.target == " faq-all") {
      $(".faq-all")
        .addClass("faq-show")
        .siblings()
        .removeClass("faq-show");
    }
    if (e.target.dataset.target == "branding-mobil") {
      $(".faq-branding-mobil")
        .addClass("faq-show")
        .siblings()
        .removeClass("faq-show");
    }
    if (e.target.dataset.target == "branding-kantor") {
      $(".faq-branding-kantor")
        .addClass("faq-show")
        .siblings()
        .removeClass("faq-show");
    }
    if (e.target.dataset.target == "cetak-sticker") {
      $(".faq-cetak-sticker")
        .addClass("faq-show")
        .siblings()
        .removeClass("faq-show");
    }
    if (e.target.dataset.target == "cutting-sticker") {
      $(".faq-cutting-sticker")
        .addClass("faq-show")
        .siblings()
        .removeClass("faq-show");
    }
  });

  // kontak spiner
  $("#loadspin").hide();
  // trigger disable button
  $(".text-kontak").click(function () {
    $(".text-kirim").text("Mengirim");
    $("#loadspin").show();
    $(".tombol-kirim").attr("disabled", "0");
  });

  //====================================================================================================================================================================================================//
  // scroll in animation
  $(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    //under 200
    if (wScroll > 700) {
      // branding img
      $(".branding-img").each(function (i) {
        setTimeout(function () {
          $(".branding-img").eq(i).addClass("element-show");
        }, 200 * (i + 1));
      });
      // branding text home
      $(".text-branding").addClass("element-show");

      // halaman aboutme section 2
      $(".img-kanan-2").addClass("element-show");
      $(".text-kiri-2").addClass("element-show");
    }
    // under 350
    if (wScroll > 350) {
      // proses kerja title
      $(".proses-title").addClass("element-show");
    }

    // under 650
    if (wScroll > 650) {
      $(".proses-img").each(function (i) {
        setTimeout(function () {
          $(".proses-img").eq(i).addClass("element-show");
        }, 200 * (i + 1));
      });
      // tombol branding lanjut index
      $(".branding-lanjut").addClass("element-show");
      // halaman branding section 3
      $(".text-kanan-3").addClass("element-show");
      $(".img-kiri-3").addClass("element-show");
    }
    // under 950
    if (wScroll > 1250) {
      // judul last project
      $(".judul-last-project").addClass("element-show");
      //deskripsi
      $(".deskripsi-last-project").addClass("element-show");
    }
  });
  // halaman aboutme section 1
  $(window).on("load", function (e) {
    console.log(e.target.body)
    $(".img-kiri-1").addClass("element-show");
    $(".text-kanan-1").addClass("element-show");
    $(".judul-produk").addClass("element-show");
  });

  //==================================================================================================================================================================================================//
  // chat button
  const wwsWidget = {
    popup: jQuery(".wws-popup"),
    popupGradient: jQuery(".wws-gradient"),
    trigger: function () {
      if (this.popup.attr("data-wws-popup-status") === "0") {
        this.popup.slideDown();
        this.popup.attr("data-wws-popup-status", "1");
        this.popupGradient.show();
      } else {
        this.popup.slideUp();
        this.popup.attr("data-wws-popup-status", "0");
        this.popupGradient.hide();
      }
    },
    isPopupOpen: function () {
      return jQuery(this.popup).attr("data-wws-popup-status") === "1" ?
        true :
        false;
    },
    autoPopup: function (delayInSeconds) {
      if ("yes" !== sessionStorage.wwsAutoPopup) {
        if (false === this.isPopupOpen()) {
          setTimeout(function () {
            wwsWidget.trigger();
            sessionStorage.wwsAutoPopup = "yes";
          }, Number(delayInSeconds * 1000));
        }
      }
    },
    sendMessage: function (message = "", whatsappNumber = "") {
      if ("" === message || "" === whatsappNumber) {
        return false;
      }
      if (this.is_mobile.any()) {
        window.open(
          wwsObj.whatsapp_mobile_api +
          "/send?phone=" +
          whatsappNumber +
          "&text=" +
          message +
          ""
        );
      } else {
        window.open(
          wwsObj.whatsapp_desktop_api +
          "/send?phone=" +
          whatsappNumber +
          "&text=" +
          message +
          ""
        );
      }
      return true;
    },
    sendGroupInvitation: function (groupID) {
      window.open("https://chat.whatsapp.com/" + groupID);
    },
    is_mobile: {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          wwsWidget.is_mobile.Android() ||
          wwsWidget.is_mobile.BlackBerry() ||
          wwsWidget.is_mobile.iOS() ||
          wwsWidget.is_mobile.Opera() ||
          wwsWidget.is_mobile.Windows()
        );
      },
    },
    logAnalytics: function (message = "N/A", number = "N/A") {
      jQuery.ajax({
        url: wwsObj.admin_url,
        type: "post",
        data: {
          action: "wws_click_analytics",
          message: message,
          number: number,
        },
      });
    },
  };

  jQuery(".wws-popup__open-btn, .wws-popup__close-btn").on("click", function (
    event
  ) {
    event.preventDefault();
    wwsWidget.trigger();
  });


  // scroll navbar effect
  var position = $(window).scrollTop();

  // should start at 0

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
      $("nav").removeClass("nav-show");
      $("nav").addClass("nav-hide");
    } else {
      $("nav").removeClass("nav-hide");
      $("nav").addClass("nav-show");
    }
    position = scroll;
  });
});