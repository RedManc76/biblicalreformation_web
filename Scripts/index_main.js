const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const home_return = params.get('return');

$(document).ready(function () {
    const $slider = $('.main_slider');
    const $nav = $('.main_navigation_bar');
    const winW = $(window).width();
    const animSpd = 750; // Change also in CSS
    const distOfLetGo = winW * 0.2;
    let curSlide = 1;
    let animation = false;
    let autoScrollVar = true;
    let diff = 0;
    let mode = 0;

    let numOfSlides = 4

    if (home_return != 'true') {
        gesture_scrollwheel_fadein("30%", "80%");
        gesture_swipe_x_fadein("30%", "50%");
        gesture_single_tap_literature_fadein("50%", "20%", "30%");
        gesture_single_tap_religion_fadein("50%", "20%", "30%");
        $('#playButton img').addClass('animate_img_growth');
        $('.screen_1_links').addClass('animate_screen_link_size');
        $('.screen_2_links').addClass('animate_screen_link_size');
        gesture_scrollwheel_fadeOut(3000);
    }

    $("#main_slide_1_heading").click(function () {
        mode = 1;
        navigateSection()
    });

    $("#main_slide_2_heading").click(function () {
        mode = 2;
        navigateSection()
    });

    $("#main_slide_3_heading").click(function () {
        mode = 3;
        navigateSection()
    });

    $("#main_slide_4_heading").click(function () {
        mode = 4;
        navigateSection()
    });

    $('.main_nav_slide_1').addClass('nav-active');

    // Navigation
    function bullets(dir) {
        $('.main_nav_slide_' + curSlide).removeClass('nav-active');
        $('.main_nav_slide_' + dir).addClass('nav-active');
    }

    function timeout() {
        animation = false;
    }

    function main_pagination(direction) {
        diff = 0;
        animation = true;
        $slider.addClass('animation');
        $slider.css({
            'transform': 'translate3d(-' + ((curSlide - direction) * 100) + '%, 0, 0)'
        });

        $slider.find('.main_slide_darkbg').css({
            'transform': 'translate3d(' + ((curSlide - direction) * 50) + '%, 0, 0)'
        });

        $slider.find('.slide_letter').css({
            'transform': 'translate3d(0, 0, 0)',
        });

    }

    function navigateSection() {
        if (mode == 0) scrollPosition = 0
        if (mode == 1) {
            setTimeout(function () { $('#playButton img').removeClass('animate_img_growth'); }, 5000);
            scrollPosition = ($(".john_container").offset().top + 1)
        }
        if (mode == 2) {
            gesture_swipe_x_fadeOut(5000);
            scrollPosition = ($(".core_main_container").offset().top + 1)
        }
        if (mode == 3) {
            gesture_single_literature_fadeOut(5000);
            setTimeout(function () { $('.screen_1_links').removeClass('animate_screen_link_size'); }, 5000);
            scrollPosition = ($(".literature_container").offset().top + 1)
        }
        if (mode == 4) {
            gesture_single_religion_fadeOut(5000);
            setTimeout(function () { $('.screen_2_links').removeClass('animate_screen_link_size'); }, 5000);
            scrollPosition = ($(".religion_container").offset().top + 1)
        }
        $('html, body').animate({
            scrollTop: scrollPosition
        }, animSpd); // Adjust the duration as needed
        setTimeout(timeout, animSpd);
    }

    function navigateUp() {
        $("#john_intro_video")[0].pause();
        mode--;
        navigateSection()
    }

    function navigateDown() {
        $("#john_intro_video")[0].pause();
        if (mode < 4) mode++;
        navigateSection()
    }

    function navigateRight() {
        if (mode == 0) {
            if (!autoScrollVar) return;
            if (curSlide >= numOfSlides) return;
            main_pagination(0);
            setTimeout(timeout, animSpd);
            bullets(curSlide + 1);
            curSlide++;
        } else {
            animation = true;
            navigateDown();
        }
    }

    function navigateLeft() {
        if (mode == 0) {
            if (curSlide <= 1) return;
            main_pagination(2);
            setTimeout(timeout, animSpd);
            bullets(curSlide - 1);
            curSlide--;
        } else {
            animation = true;
            navigateUp();
        }
    }

    function toDefault() {
        main_pagination(1);
        setTimeout(timeout, animSpd);
    }

    // Events
    $(document).on('mousedown touchstart', '.slide', function (e) {
        gesture_scrollwheel_fadeOut(0);
        if (animation || mode !== 0) return;
        let target = +$(this).attr('data-target');
        let startX = e.pageX || e.originalEvent.touches[0].pageX;
        $slider.removeClass('animation');

        $(document).on('mousemove touchmove', function (e) {
            let x = e.pageX || e.originalEvent.touches[0].pageX;
            diff = startX - x;
            if (target === 1 && diff < 0 || target === numOfSlides && diff > 0) return;

            $slider.css({
                'transform': 'translate3d(-' + ((curSlide - 1) * 100 + (diff / 30)) + '%, 0, 0)'
            });

            $slider.find('.main_slide_darkbg').css({
                'transform': 'translate3d(' + ((curSlide - 1) * 50 + (diff / 60)) + '%, 0, 0)'
            });

            $slider.find('.slide_letter').css({
                'transform': 'translate3d(' + (diff / 60) + 'vw, 0, 0)',
            });

        })
    })

    $(document).on('mouseup touchend', function (e) {
        gesture_scrollwheel_fadeOut(0);
        $(document).off('mousemove touchmove');

        if (animation || mode !== 0) return;

        if (diff >= distOfLetGo) {
            navigateRight();
        } else if (diff <= -distOfLetGo) {
            navigateLeft();
        } else {
            toDefault();
        }
    });

    $(document).on('click', '.main_nav_slide:not(.nav-active)', function () {
        let target = +$(this).attr('data-target');
        bullets(target);
        curSlide = target;
        main_pagination(1);
    });

    $(document).on('click', '.main_side_nav', function () {
        let target = $(this).attr('data-target');

        if (target === 'right') navigateRight();
        if (target === 'left') navigateLeft();
    });

    $(document).on('keydown', function (e) {
        if (e.which === 39) navigateRight();
        if (e.which === 37) navigateLeft();
    });

    $(document).on('mousewheel DOMMouseScroll', function (e) {
        gesture_scrollwheel_fadeOut(0);
        if (animation) return;
        let delta = e.originalEvent.wheelDelta;

        if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
        if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
    });
});