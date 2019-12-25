$(window).scroll(function() {
    var st = $(this).scrollTop();
    if (st > 20) {
        $('.header').addClass('header-shrink');
    } else {
        $('.header').removeClass('header-shrink');
    }

}) 