
(function($) {
    var $window = $(window),
        $carouselItem = $('.carousel-item');

    function resize() {
        var windowWidth = $window.width();

        if ( windowWidth < 992 ) {

            var height = windowWidth/1.5;
            $('.carousel-item').css('height', height);
            $carouselItem.removeClass('item');

        } else if ($window.width() >= 992) {

            var wrapperHeight = windowWidth/1.5;
            $('.carousel-item').css('height', '100%');
            $('.site-wrapper').css({'height':wrapperHeight, 'max-height': '800px'})
            $('#jd-carousel-hero').carousel({
                interval: 3000,
                pause: "false"
            });
            return $carouselItem.addClass('item');
            //return $carouselItem.removeClass('item');
        }
        $carouselItem.removeClass('item');
    }
    
    $window
        .resize(resize)
        .trigger('resize');

})(jQuery);
