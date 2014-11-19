(function () {
    $('.header__buy__about__list-link_backet').on('click', function() {
        $('.backet').toggleClass('active');
    });
    $('.header__nav__list-link').on('click', function () {
        var $this = $(this),
                span =    $this.find('.animated');

        $this.closest('.header__nav__list').find('.animated').removeClass('flipInY');
        span.addClass('flipInY');
    });
    $('.slider__controls-button').on('click', function() {
        var button = $(this),
                slider = $('.slider'),
                sliderList = slider.find('.slider__list'),
                currentCoord = parseInt(sliderList.css('left'));
                step = 75,
                slide = sliderList.find('.slider__list-items');
                firstSlide = slide.first();
                lastSlide = slide.last();

        if (button.hasClass('slider__controls-button_next')) {
            firstSlide.appendTo(sliderList);
            sliderList.css('left' , currentCoord+step+'px');
            sliderList.animate(
                ({
                    left : '5px',
                    marginRight: '10px'
                }), 300);
        }
        else {
            lastSlide.prependTo(sliderList);
            sliderList.css('left' , currentCoord-step+'px');
            sliderList.animate(
                ({
                    left : '5px',
                    marginRight: '10px'
        }), 300);
        }
    });

    $('.slider__list-items').on('click', function () {
        var display = $('.content__media__photos-pic'),
                $this = $(this),
                img = $this.find('.slider__list-pic'),
                imgPath = img.attr('src');

        display.attr('src' , imgPath);
    });

    $('.buttonUp').on('click', function() {
        var scroll = $('#scroll');
                destination = $(scroll).offset().top;

        $('body').animate({scrollTop: destination}, 500);


    });

})();