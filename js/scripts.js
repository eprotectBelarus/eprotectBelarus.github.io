$(document).ready(function () {
  $('.cta__slider').slick({
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false
        }
      },
      {
        breakpoint: 756,
        settings: {
          arrows: false,
          dots: false,
        }
      }
    ]
  });
$('.feedback__slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 756,
      settings: {
        arrows: false,
        dots: false,
      }
    }
  ]
})
$('.burger').on('click', function () {
  console.log('click');
  $('.header').toggleClass('mobile')

});
$('.nav__item').on('click',function(){
  console.log('click');
  $('.header').removeClass('mobile')
});

});
