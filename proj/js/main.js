(function () {

    app = {
        initializate : function () {
            app.setUpListeners();
            app.showPlaceholder();
        },
        setUpListeners : function () {
            $('.header__buy__about__list-link_backet').on('click', app.togClass);
            $('.header__nav__list-link').on('click', app.animateNav);
            $('.slider__controls-button').on('click', app.jqueryCarousel);
            $('.slider__list-items').on('click', app.slideshow);
            $('.buttonUp').on('click', app.scrollUp);
            $(window).scroll(app.scroll);
        },

        DURATION: 300,
        DESTINATION: 100,

        togClass : function (e) {
            e.preventDefault();
            $('.backet').slideToggle(app.DURATION);
            //$('.backet').toggleClass('active');
        },
        animateNav : function () {
            var $this = $(this),
                span =    $this.find('.animated');

            $this.closest('.header__nav__list').find('.animated').removeClass('flipInY');
            span.addClass('flipInY');
        },
        jqueryCarousel : function () {
            var button = $(this),
                slider = $('.slider'),
                sliderList = slider.find('.slider__list'),
                currentCoord = parseInt(sliderList.css('left')),
                step = 75,
                slide = sliderList.find('.slider__list-items'),
                step2 = slide.offsetHeight(),
                firstSlide = slide.first(),
                lastSlide = slide.last();

            console.log(step2);

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
                    }), app.DURATION);
            }
        },
        slideshow : function () {
            var display = $('.content__media__photos-pic'),
                $this = $(this),
                img = $this.find('.slider__list-pic'),
                imgPath = img.attr('src');

            display.attr('src' , imgPath);
        },
        scrollUp : function (e) {
            e.preventDefault();

            var scroll = $('#scroll');
            destination = scroll.offset().top;


            $('body').animate({
                scrollTop: destination
                }, app.DURATION);
        },
        showPlaceholder : function () {
            $('input, textarea').placeholder();
        },

        scroll: function () {
            var btnUp = $('.buttonUp');

            var str = navigator.userAgent,
                    ie8 = 'MSIE 8'
            if (!(str.indexOf(ie8) + 1)) {
                if (this.scrollY > app.DESTINATION) {
                    btnUp.css('display' , 'block')
                        .animate({
                            opacity: '1'
                        }, app.DURATION)
                } else {
                    btnUp.css('display' , 'none')
                        .animate({
                            opacity: '0'
                        }, app.DURATION)
                }
            }


        }


    }

    app.initializate();

})();