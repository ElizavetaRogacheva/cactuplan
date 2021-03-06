$('.js-main-nav__btn').click(() => {
    $('.js-main-nav').toggleClass('main-nav-close');
});

$('.js-search__btn').click(() => {
    $('.js-search-container').toggleClass('visible');
});

$('.js-account__btn').click(() => {
    $('.js-account-container').toggleClass('visible');
});

$('#contact').click(() => {
    $('.js-contacts__list').toggleClass('visible');
    $('#contact').toggleClass('rotate');
});

$('#info').click(() => {
    $('.js-footer-info__list').toggleClass('visible');
    $('#info').toggleClass('rotate');
});

$('.js-categories__title').click(() => {
    $('.js-categories__list').toggleClass('visible');
    $('.js-categories__title').toggleClass('rotate');
});

$('.js-filter-title').click(() => {
    $('.js-filter__list').toggleClass('visible');
    $('.js-filter-title').toggleClass('rotate');
});

$('.js-latest-products__title').click(() => {
    $('.js-latest-products__list').toggleClass('visible');
    $('.js-latest-products__title').toggleClass('rotate');
});


 
const btnTop = $('.js-scroll-top');

$(window).scroll(() => {
if ($(window).scrollTop() > 300) {
    btnTop.addClass('show-scroll');
} else {
    btnTop.removeClass('show-scroll');
}
});

btnTop.on('click', (evt) => {
evt.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});




