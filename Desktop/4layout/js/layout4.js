$(document).ready(function(){
    $('.slider1').slick({
      autoplay: true,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 500,
      fade: true,
      dots: true,
      arrows: false,
      });
  });
  $(document).ready(function(){
    $('.slider2').slick({
      autoplay: true,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 500,
      fade: true,
      dots: true,
      arrows: false,
      });
  });
  $(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
  });
  $(document).ready(function(){
    $('.slider3').slick({
      autoplay: false,
      autoplaySpeed: 0,
      infinite: true,
      speed: 0,
      fade: false,
      dots: false,
      arrows: false,
      slidesToShow: 3,
      responsive: [
        {
        breakpoint: 850,
         settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          autoplaySpeed: 0,
          infinite: true,
          arrows: false
         }
      },
      {
        breakpoint: 610,
         settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          autoplaySpeed: 0,
          infinite: true,
          arrows: false
         }
      }
    ]
      });
  });