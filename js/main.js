$(function () {
   $('.slider').slick({
      fade: true,
      dots: true,
      arrows: false,
      autoplay: 3000,
      // dotsClass: 'header-dots'
   });

   $('.header-btn').on('click', function () {
      $('.menu').addClass('active');
   });

   $('.close-btn').on('click', function () {
      $('.menu').removeClass('active');
   });
});