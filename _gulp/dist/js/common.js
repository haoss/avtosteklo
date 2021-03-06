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

  mobileNavigation();
  tabMobile();

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

$(window).on('scroll', function() { });
$(window).on('resize', function() { });

function mobileNavigation() {
  var btn = $('.btn-menu');
  var body = $('body');
  var nav = $('.navigation');

  btn.on('click', function() {
    var _this = $(this);

    if (_this.hasClass('is-active')) {
      _this.removeClass('is-active');
      nav.removeClass('is-active');
      body.removeClass('is-fixed');
    } else {
      _this.addClass('is-active');
      nav.addClass('is-active');
      body.addClass('is-fixed');
    }
  });
}

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

function tabMobile() {
  var tab = $('.j-tab-mobile');
  var tabActive = $('.nav__wrapper-active span');
  tab.each(function(){
    var _this = $(this);
    var btn = _this.find('.nav__button button');
    var item = _this.find('.nav__item');

    btn.on('click', function(){
      if (_this.hasClass('is-show')) {
        _this.removeClass('is-show');
      } else {
        _this.addClass('is-show');
      }
    });
    item.on('click', function(){
      if (_this.hasClass('is-show')) {
        _this.removeClass('is-show');
      }
      var textItem = $(this).find('a').text();
      tabActive.text(textItem);
    });
  });
}

function filterBtnTest() {
  var block = $('.j-filter-btns');
  block.each(function(){
    var btn = $(this).find('button');
    btn.on('click', function(){
      btn.removeClass('active');
      $(this).addClass('active');
    });
  })
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