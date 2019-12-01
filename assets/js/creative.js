// jQuery for page scrolling feature - requires jQuery Easing plugin
$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 250, 'easeOutSine');
    event.preventDefault();
});