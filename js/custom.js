(function($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    //Update Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var mainHeader = $('.main-header').height();
            var windowpos = $(window).scrollTop();
            if (windowpos >= mainHeader) {
                $('.bounce-in-header').addClass('now-visible');
                $('.scroll-to-top').fadeIn(300);
            } else {
                $('.bounce-in-header').removeClass('now-visible');
                $('.scroll-to-top').fadeOut(300);
            }
        }
    }

    headerStyle();


    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
    }



    //Revolution Slider Style One
    if ($('.main-slider.default-style .tp-banner').length) {

        jQuery('.main-slider.default-style .tp-banner').show().revolution({
            delay: 10000,
            startwidth: 1200,
            startheight: 600,
            hideThumbs: 600,
            thumbWidth: 80,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "0",
            navigationStyle: "preview3",

            touchenabled: "on",
            onHoverStop: "off",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

            keyboardNavigation: "off",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 40,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",

            spinner: "spinner4",

            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: "off",

            autoHeight: "off",
            forceFullWidth: "on",

            hideThumbsOnMobile: "on",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "on",
            hideArrowsOnMobile: "on",
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: "",
            fullScreenOffsetContainer: ""
        });

    }

    //Testimonials Two Column
    if ($('.testimonial-2').length) {
        $('.testimonial-2').owlCarousel({
            loop: true,
            margin: 50,
            nav: true,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-double-left"></span>', '<span class="fa fa-angle-double-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }


    //offer Three Column
    if ($('.offer-col').length) {
        $('.offer-col').owlCarousel({
            loop: true,
            margin: 50,
            nav: true,
            smartSpeed: 500,
            autoplay: 5000,

            navText: ['<span class="fa fa-angle-double-left"></span>', '<span class="fa fa-angle-double-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1024: {
                    items: 3
                },
                1199: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }


    //shop-col Four Column
    if ($('.shop-col').length) {
        $('.shop-col').owlCarousel({
            loop: true,
            margin: 50,
            nav: false,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-double-left"></span>', '<span class="fa fa-angle-double-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1199: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    /* ---------------------------------------------
     flex slider
     --------------------------------------------- */

    $(window).load(function() {
        $('.portfolio-slider').flexslider({
            animation: "slide",
            direction: "vertical",
            slideshowSpeed: 3000,
            start: function() {
                imagesLoaded($(".portfolio"), function() {
                    setTimeout(function() {
                        $('.portfolio-filter li:eq(0) a').trigger("click");
                    }, 500);
                });
            }
        });
    });

    $(window).load(function() {
        $('.portfolio-slider-alt').flexslider({
            animation: "slide",
            direction: "horizontal",
            slideshowSpeed: 4000,
            start: function() {
                imagesLoaded($(".portfolio"), function() {
                    setTimeout(function() {
                        $('.portfolio-filter li:eq(0) a').trigger("click");
                    }, 500);
                });
            }
        });
    });

    $(window).load(function() {
        $('.post-slider-thumb').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    });

    $(window).load(function() {
        $('.post-slider').flexslider({
            animation: "slide"
        });
    });

    $(window).load(function() {
        $('.news-slider').flexslider({
            animation: "slide",
            slideshowSpeed: 3000
        });
    });


    /* ---------------------------------------------
     portfolio filter set active class
     --------------------------------------------- */

    $('.portfolio-filter li').click(function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /* ---------------------------------------------
     isotope | init Isotope
     --------------------------------------------- */

    var $container = $(".portfolio:not(.portfolio-masonry)");
    if ($.fn.imagesLoaded && $container.length > 0) {
        imagesLoaded($container, function() {
            setTimeout(function() {
                $container.isotope({
                    itemSelector: '.portfolio-item',
                    layoutMode: 'fitRows',
                    filter: '*'
                });

                $(window).trigger("resize");
                // filter items on button click
            }, 500);

        });
    }

    /* ---------------------------------------------
     portfolio masonry
     --------------------------------------------- */

    $(window).load(function() {

        var $c = $('.portfolio-masonry');
        if (typeof imagesLoaded == 'function') {
            imagesLoaded($c, function() {

                setTimeout(function() {
                    $c.isotope({
                        itemSelector: '.portfolio-item',
                        resizesContainer: false,
                        layoutMode: 'masonry',
                        filter: "*"
                    });
                }, 500);

            });
        }

    });



    /* ---------------------------------------------
     portfolio gallery
     --------------------------------------------- */


    $('.portfolio-gallery').each(function() { // the containers for all your galleries
        $(this).find(".popup-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $(this).find(".popup-gallery2").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


    /* ---------------------------------------------
     portfolio filtering
     --------------------------------------------- */

    $('.portfolio-filter').on('click', 'a', function() {
        $('#filters button').removeClass('current');
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');
        $(this).parents(".portfolio-filter-item").next().isotope({
            filter: filterValue
        });
    });

    /* ---------------------------------------------
    popup link
    --------------------------------------------- */


    $('.popup-link').magnificPopup({
        type: 'image'
        // other options
    });

    /* ---------------------------------------------
    carousel
    --------------------------------------------- */
    if ($.fn.owlCarousel) {
        $("#owl-slider").owlCarousel({
            autoPlay: 4000, //Set AutoPlay to 3 seconds
            items: 1,
            navigation: true,
            //pagination : false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });


        $("#img-carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });

        $("#portfolio-carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            navigation: true,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

        });

        $("#portfolio-carousel-alt").owlCarousel({
            autoPlay: false, //Set AutoPlay to 3 seconds
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            navigation: true,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    }

    $(".portfolio-with-title").addClass("portfolio");


    /* ---------------------------------------------
    accordion
    ---------------------------------------------- */

    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("easeOutExpo");
    $(".accordion").each(function() {
        $(this).find("dt > a").first().addClass("active").parent().next().css({
            display: "block"
        });
    });

    $(".accordion > dt > a").click(function() {

        var current = $(this).parent().next("dd");
        $(this).parents(".accordion").find("dt > a").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");

        return false;

    });


    /* ---------------------------------------------------------------------------
     * Paralex Backgrounds
     * --------------------------------------------------------------------------- */

    var ua = navigator.userAgent,
        isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
    if (!isMobileWebkit && jQuery(window).width() >= 768) {
        $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }

    /* ---------------------------------------------------------------------------
     * Paralex Backgrounds
     * --------------------------------------------------------------------------- */

    if (typeof stellar !== 'undefined' && $.isFunction(stellar)) {
        var ua = navigator.userAgent,
            isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

        if (!isMobileWebkit && jQuery(window).width() >= 768) {

            if (window.wpt_parallax == 'stellar') {

                // Stellar
                jQuery.stellar({
                    horizontalScrolling: false,
                    responsive: true
                });

            } else {

                // Enllax
                jQuery(window).enllax();

            }

        } else {

            jQuery('.section[data-enllax-ratio], .section[data-stellar-ratio]').css('background-attachment', 'scroll');

        }
    }


    //LightBox / Fancybox start
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });
    }
    //LightBox / Fancybox end


    // filter-price
    if ($('#filter-price').length) {
        $("#filter-price").slider({
            ticks: [0, 100, 200, 300, 400],
            ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
            ticks_snap_bounds: 30
        });
    }



    // scroll to Top end
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    // scroll to Top end


    //  funfact / counter
    if ($('.count').length) {
        $('.count').each(function() {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).bind('scroll', function() {
            var speed = 3000;
            $('.count').each(function() {
                var $this = $(this);
                if (!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
                    $this.data('counted', true);
                    $this.animate({
                        dummy: 1
                    }, {
                        duration: speed,
                        step: function(now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                            if (0 < $this.parent('.value').length) {
                                $this.parent('.value').css('width', val + '%');
                            }
                        }
                    });
                }
            });
        }).triggerHandler('scroll');
    }

    //Progress Bar / Levels
    if ($('.progress-levels .progress-box .bar-fill').length) {
        $(".progress-box .bar-fill").each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width', progressWidth + '%');
            $(this).children('.percent').html(progressWidth + '%');
        });
    }

    /* ==========================================================================
    When document is Scrollig, do
    ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
    });

    /* ==========================================================================
    When document is loading, do
    ========================================================================== */

    $(window).load(function() {
        handlePreloader();
    });


})(window.jQuery);