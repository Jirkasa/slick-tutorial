$(document).ready(function () {
    $('.part5-asNavFor-example__active-photo').slick({
        fade: true,
        arrows: false,
        accessibility: false,
        draggable: false
    });
    $('.part5-asNavFor-example__nav-slider').slick({
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        swipeToSlide: true,
        autoplay: true,
        prevArrow: '.part5-asNavFor-example__arrow--left',
        nextArrow: '.part5-asNavFor-example__arrow--right',
        asNavFor: '.part5-asNavFor-example__active-photo'
    });
});