'use strict';

// Document ready
$(document).on('ready', function(){

  // Magnific popup gallery
  $('.j-gallery').each(function() {
    $(this).magnificPopup({
      delegate: '.j-gallery-item',
      type: 'image',
      gallery:{
        enabled: true,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });

  // Magnific popup one image
  $('.j-image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });

  // Magnific popup video
  $('.j-popup-youtube, .j-popup-vimeo, .j-popup-gmaps').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.j-open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    showCloseBtn: false
  });
  $('.modal__close').on('click', function(){
    $.magnificPopup.close();
  });

  $('select.selectize').selectize();
  $('select.--sorting').selectize({
    onInitialize: function() {
      this.$control_input.attr('readonly', true);
    }
  });

  $('.j-product-gallery').slick({
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrow: true
  });

  // headerScroll();

  // тестовые функции
  cartCountTest();
  filterBtnTest();
  favouritesTest();

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };
});

$(window).on('load', function() {
  
});

$(window).on('scroll', function() {
  // headerScroll();
});
$(window).on('resize', function() { });

function cartCountTest() {
  var block = $('.j-cart-count');

  block.each(function(){
    var _this = $(this);
    var plus = _this.find('.cart-count__plus');
    var minus = _this.find('.cart-count__minus');
    var input = _this.find('.cart-count__input');
    var value = input.val();

    plus.on('click', function(){
      value = parseFloat(value) + 1;
      input.val(value);
    });
  
    minus.on('click', function(){
      if (value <= 1) return;
      value = parseFloat(value) - 1;
      input.val(value);
    });
  })
}

function filterBtnTest() {
  var block = $('.j-filter-btns');
  var btn = block.find('button');
  btn.on('click', function(){
    btn.removeClass('active');
    $(this).addClass('active');
  });
}

function favouritesTest() {
  var btn = $('.j-favourites');
  btn.on('click', function(){
    var _this = $(this);
    if (_this.hasClass('is-favourites')) {
      _this.removeClass('is-favourites');
    } else {
      _this.addClass('is-favourites');
    }
  });
}

function headerScroll() {
  var header = $('.header');
  var width = $(window).width();

  if ($(window).scrollTop() > header.height() + 200) {
    header.addClass('is-scroll');
  } else {
    header.removeClass('is-scroll');
  }
}