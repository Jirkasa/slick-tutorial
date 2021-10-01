$(document).ready(function () {
    $('.part1-introduction-slider__container').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        zIndex: 5,
        prevArrow: '.part1-introduction-slider__arrow--left',
        nextArrow: '.part1-introduction-slider__arrow--right',
        waitForAnimate: false
    });
});