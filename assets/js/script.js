$(document).ready(function () {

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

  // pop up under construct
  $(document).ready(function () {
    $("#myModal").modal('show');
  });


  /* ---- particles.js config ---- */

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 6,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


  /* ---- stats.js config ---- */

  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
});