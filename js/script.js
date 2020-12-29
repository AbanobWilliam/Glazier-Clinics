$(document).ready(function () {
    if ($('body.dnnEditState').length == 0) {
        $('head link[href*="/Resources/Shared/stylesheets/dnndefault/7.0.0/default.css?cdv=248"]').remove();
        $('head link[href*="/Resources/Shared/stylesheets/dnndefault/7.0.0/default.css?cdv=248"]').remove();
    }
    $(".go-next-section").click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $("#clinic").offset().top - 90
        }, 1500);
    });
    $(".setDate").text(new Date().getFullYear());
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    var owl = $('.owl-carousel-partners');
    owl.owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    var speaker = $('.owl-carousel-speaker');
    speaker.owlCarousel({
        items: 3,
        loop: true,
        margin: 150,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('#remove-coach').click(function () {
        $('.removemodal').css({ display: 'block' });
    });
    $('#close-modal').click(function () {
        $('.removemodal').css({ display: 'none' });
    });
    $('#close-modal-buttom').click(function () {
        $('.removemodal').css({ display: 'none' });
    });
});