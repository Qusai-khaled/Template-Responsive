$(function () {
    'use strict';
    var winh   = $(window).height(),
        upperh = $('.upper-bar').innerHeight(),
        navh   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winh - (upperh + navh));
});

//.Featured Work shuffle

$('.Featured-Work ul li').on('click', function () {
    'use strict';
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
        $('.shuffle-images .col-md').css('opacity', 1);
    } else {
         $('.shuffle-images .col-md').css('opacity', '.09');
        $($(this).data('class')).parent().css('opacity', 1);
    }
});



  
  

