$('.js-promo-slider__list').slick(
    {   autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.promo-slider__btn--prev'),
        nextArrow: $('.promo-slider__btn--next'),
        dots: true,
    }  
);

$('.js-featured-products-carousel').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.featured-products__arrow--left'),
    nextArrow: $('.featured-products__arrow--right'),
    responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]  
  });

$('.js-special-slider__list').slick(
  {   autoplay: false,
      autoplaySpeed: 3000,
      prevArrow: $('.special-slider__btn--left'),
      nextArrow: $('.special-slider__btn--right')
  }  
    
);

$('.js-news-block__slider-list').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.news-slider__btn--left'),
  nextArrow: $('.news-slider__btn--right'),
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]  
});

$('.js-partners__list').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $('.partners__slider-btn--left'),
  nextArrow: $('.partners__slider-btn--right'),
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]  
});


$('.js-testimonials__list').slick(
  {   autoplay: true,
      autoplaySpeed: 3000,  
      prevArrow: $('.testimoneals-slider__btn--left'),
      nextArrow: $('.testimoneals-slider__btn--right')
  }  
    
);


$('.js-product-gallery-slider__list').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.product-gallery-slider__btn--left'),
  nextArrow: $('.product-gallery-slider__btn--right'),
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]  
});

$('.js-related-products__list').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.related-products__btn--left'),
  nextArrow: $('.related-products__btn--right'),
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]  
}); 


