'use strict';

(function () {
    // initialization
    var app = {
        initializate : function () {
            app.setUpListeners();
            app.showPlaceholder();
        },
        // Events
        setUpListeners : function () {
            $('.header__buy__about__list-link_backet').on('click', app.togClass);
            $('.header__nav__list-link').on('click', app.animateNav);
            $('.slider__controls-button').on('click', app.jqueryCarousel);
            $('.slider__list-items').on('click', app.slideshow);
            $('.buttonUp').on('click', app.scrollUp);
            $(window).scroll(app.scroll);
        },
        // animation time
        DURATION: 300,
        // The distance from the beginning of the page
        DESTINATION: 100,

        // Checking for browser IE8
        isIE8 : function () {
            var str = navigator.userAgent,
                    ie8 = 'MSIE 8',
                    result = false;
            if (str.indexOf(ie8) + 1) {
                result  = true;
            }
            return result;
        },
        // Changing the state of the basket
        togClass : function (e) {
            e.preventDefault();
            $('.backet').slideToggle(app.DURATION);
        },
        // animation navigation
        animateNav : function () {
            var $this = $(this),
                span =    $this.find('.animated');

            $this.closest('.header__nav__list').find('.animated').removeClass('flipInY');
            span.addClass('flipInY');
        },
        // Slider
        jqueryCarousel : function () {
            var button = $(this),
                slider = $('.slider'),
                sliderList = slider.find('.slider__list'),
                slide = sliderList.find('.slider__list-items'),
                step = slide.outerWidth(),
                firstSlide = slide.first(),
                lastSlide = slide.last();

            // Show the next slide
            if (button.hasClass('slider__controls-button_next')) {
                firstSlide.appendTo(sliderList);
                sliderList.css('left' , step+'px');
                sliderList.animate(
                    ({
                        left : '5px',
                        marginRight: '10px'
                    }), 300);
            }
            // Show previous slide
            else {
                lastSlide.prependTo(sliderList);
                sliderList.css('left' , -step+'px');
                sliderList.animate(
                    {
                        left : '5px',
                        marginRight: '10px'
                    }, app.DURATION);
            }
        },
        // Slideshow
        slideshow : function () {
            var display = $('.content__media__photos-item'),
                firstPhoto = display.first(),
                $this = $(this),
                img = $this.find('.slider__list-pic'),
                wrap = display.closest('.content__media__photos_wrapper'),
                step = display.outerWidth();

            // Copy and paste a picture of the pressed-to-end display
            img
                .clone()
                .removeClass('slider__list-pic')
                .addClass('content__media__photos-pic')
                .appendTo(wrap)
                 .wrap($('<li/>').addClass('content__media__photos-item'));

            // Remove the first element
            firstPhoto.remove();

            // shift wrapper
            wrap
                .css('left' , step + 'px')
                .animate({
                    left: '0px'
                },  app.DURATION)
        },

        // When you click to scroll up
        scrollUp : function (e) {
            if (!(app.isIE8())) {
                e.preventDefault();
            }

            var scroll = $('#scroll'),
                    destination = scroll.offset().top;


            $('body').animate({
                scrollTop: destination
                }, app.DURATION);
        },

        showPlaceholder : function () {
            $('input, textarea').placeholder();
        },

        // Show button while scrolling
        scroll: function () {
            var btnUp = $('.buttonUp');

            if (!(app.isIE8())) {
                if (this.scrollY > app.DESTINATION) {
                    btnUp.fadeIn(app.DURATION);
                } else {
                    btnUp.fadeOut(app.DURATION);
                }
            }
        }
    }

    app.initializate();

})();