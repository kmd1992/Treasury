(function ($) {
    "use strict";

    // :: Variables Active Code
    var admetro_window = $(window);
    var dd = $("dd");

    // :: Preloader Active Code
    admetro_window.on("load", function () {
        $("#preloader").fadeOut("1000", function () {
            $(this).remove();
        });
    });

    // :: Slimscroll Active Code
    if ($.fn.slimscroll) {
        $('#admetroSideNav').slimscroll({
            height: '100%',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 10
        });
    }

    // :: Slimscroll Active Code
    if ($.fn.slimscroll) {
        $('#messageBox, #notificationsBox').slimscroll({
            height: '340px',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 10
        });
    }

    // :: Slimscroll Active Code
    if ($.fn.slimscroll) {
        $('#chooseLayout').slimscroll({
            height: '100%',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 10
        });
    }

    // :: Slimscroll Active Code
    if ($.fn.slimscroll) {
        $('#dashboardtodoList').slimscroll({
            height: '370px',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 10
        });
    }

    // :: Slimscroll Active Code
    if ($.fn.slimscroll) {
        $('#propertyList').slimscroll({
            height: '430px',
            size: '4px',
            position: 'right',
            color: '#8c8c8c',
            alwaysVisible: false,
            distance: '2px',
            railVisible: false,
            wheelStep: 10
        });
    }

    var pageWrapper = $(".admetro-page-wrapper");
    var sideMenuArea = $(".admetro-sidemenu-area");

    $("#menuCollasped").on("click", function () {
        pageWrapper.toggleClass("menu-collasped-active");
    });

    $("#mobileMenuOpen").on("click", function () {
        pageWrapper.toggleClass("mobile-menu-active");
    });

    sideMenuArea.on("mouseenter", function () {
        pageWrapper.addClass("sidemenu-hover-active");
        pageWrapper.removeClass("sidemenu-hover-deactive");
    });

    sideMenuArea.on("mouseleave", function () {
        pageWrapper.removeClass("sidemenu-hover-active");
        pageWrapper.addClass("sidemenu-hover-deactive");
    });

    if ($.fn.classyNav) {
        $("#horizontalNav").classyNav();
    }

    $("#settingTrigger").on("click", function () {
        $(".choose-layout-area").toggleClass("active");
    });


    // :: Wow Active Code
    if (admetro_window.width() > 767) {
        new WOW().init();
    }

    // *********************************
    // :: Masonary Gallery Active Code
    // *********************************

    if ($.fn.imagesLoaded) {
        $('.gallery_full_width_images_area').imagesLoaded(function () {
            // Filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // Init Isotope
            var $grid = $('.gallery_full_width_images_area').isotope({
                itemSelector: '.portfolio_gallery_iteam',
                percentPosition: true
            });
        });
    }

    // Gallery Menu Style Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn.btn-md').removeClass('active');
        $(this).addClass('active');
    })

    // :: Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: Popover Active Code
    if ($.fn.popover) {
        $('[data-toggle="popover"]').popover();
    }

    // :: FooTable Active Code
    if ($.fn.footable) {
        $(".footable").footable();
    }

    // :: Nice Select Active Code
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    // :: Dropdown Active Code
    if ($.fn.dropdown) {
        $("dropdown-toggle").dropdown();
    }

    // :: Compose Mail Active Code
    if ($.fn.wysihtml5) {
        $("#compose-textarea").wysihtml5();
    }

    // :: Accordian Active Code
    dd.filter(":nth-child(n+3)").hide();
    $("dl").on("click", "dt", function () {
        $(this).next().slideDown(700).siblings("dd").slideUp(700);
    });

    // :: PreventDefault a Click
    $('a[href="#"]').on("click", function ($) {
        $.preventDefault();
    });

    // :: Countdown Active Code
    if ($.fn.countdown) {
        $("#clock").countdown("2026/11/10", function (event) {
            $(this).html(event.strftime("<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>"));
        });
    }

    $('#leftVersion').click(function (event) {
        event.preventDefault()
        $('#vertical-timeline').toggleClass('center-orientation');
    });

})(jQuery);