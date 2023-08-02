(function ($) {
	
	"use strict";

	// $(window).scroll(function() {
	//   var scroll = $(window).scrollTop();
	//   var box = $('.slider-head').height();
	//   var header = $('nav').height();

	//   if (scroll >= box - header) {
	//     $("header").addClass("background-header");
	//   } else {
	//     $("header").removeClass("background-header");
	//   }
	// });

	$(".header-slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'linear',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	  });
})(window.jQuery);