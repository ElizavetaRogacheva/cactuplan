$('.main-nav__btn').click(() => {
    $('.main-nav').toggleClass('main-nav-close');
});

$('.search__btn').click(() => {
    $('.search-container').toggleClass('visible');
})

$('.account__btn').click(() => {
    $('.account-container').toggleClass('visible');
})

$('#contact').click(() => {
    $('.contacts__list').toggleClass('visible');
    $('#contact').toggleClass('rotate');
})

$('#info').click(() => {
    $('.footer-info__list').toggleClass('visible');
    $('#info').toggleClass('rotate');
})

$('.categories__title').click(() => {
    $('.categories__list').toggleClass('visible');
    $('.categories__title').toggleClass('rotate');
})

$('.filter-title').click(() => {
    $('.filter__list').toggleClass('visible');
    $('.filter-title').toggleClass('rotate');
})

$('.latest-products__title').click(() => {
    $('.latest-products__list').toggleClass('visible');
    $('.latest-products__title').toggleClass('rotate');
})


 
const btnTop = $('.scroll-top');

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




