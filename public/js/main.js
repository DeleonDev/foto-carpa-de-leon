(function ($) {
  "use strict";

  $("body").scrollspy({
    target: ".navbar-collapse",
    offset: 70
  });

  // Smooth scrolling using jQuery easing
  $('a.smooth-scroll').on("click", function (e) {
    var menu = $(this);
    $('html, body').stop().animate({
      scrollTop: $(menu.attr('href')).offset().top - 50
    }, 1000);
    e.preventDefault();
  });

  // Works
  $('.portfo-in').mixItUp();

  // Magnific Popup
  var magnifPopup = function () {
    $('.image-pop').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',

        opener: function (openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };

  magnifPopup();

  // Carousel
  $('.carousel').carousel({
    // Change every 3 seconds
    interval: 3000
  });
})(jQuery);
