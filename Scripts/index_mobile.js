$(document).ready(function() {


    $('.mobile_container').on('click', function() {
        var mobileMainHeight = $('.mobile_primary_container').outerHeight();
        var containerIndex = $('.mobile_container').index(this); // Get index of clicked container

        // Perform actions based on the clicked container
        switch (containerIndex) {
            case 0:
                $(".seeker_mobile_intro_container").css({
                    'z-index': 0,
                    'opacity': 0
                });
                $(".core_mobile_intro_container").css({
                    'z-index': 0,
                    'opacity': 0
                });
                $(".john_mobile_intro_container").css({
                    'z-index': 3,
                    'opacity': 1
                });
                break;
            case 1:
                $(".john_mobile_intro_container").css({
                    'z-index': 0,
                    'opacity': 0
                });
                $(".core_mobile_intro_container").css({
                    'z-index': 0,
                    'opacity': 0
                });
                $(".seeker_mobile_intro_container").css({
                    'z-index': 3,
                    'opacity': 1
                });
                break;
            case 2:
                $(".john_mobile_intro_container").css({
                    'z-index': 0,
                    'opacity': 0
                });
                $(".seeker_mobile_intro_container").css({
                    'z-index': 0,
                    'opacity': 0
                });
                $(".core_mobile_intro_container").css({
                    'z-index': 3,
                    'opacity': 1
                });
                break;
            default:
                break;
        }

        $('.mobile_primary_container').css({
            'transition': 'transform 1s ease',
            'transform': 'translateY(' + mobileMainHeight + 'px)'
        });

        $('.mobile_menu_return').css({
            'transition': 'transform 1s ease',
            'transform': 'translateY(0px)'
        });

        $('.mobile_primary_container').on('transitionend webkitTransitionEnd oTransitionEnd', function() {
            //$(this).hide();
        });
    });

    $('.mobile_menu_return').on('click', function() {
        $('.mobile_primary_container').show();
        $('.mobile_primary_container').css('transform', 'translateY(0)');
        $('.mobile_menu_return').css('transform', 'translateY(100px)');
        var video = $('#john_mobile_intro_video')[0].pause();
        var video = $('#seeker_mobile_intro_video')[0].pause();
    });


    $('.john_mobile_intro_overlay_container').on('click', function() {
        $(this).hide();
        $("#john_mobile_intro_video")[0].play();
    });

    $("#john_mobile_intro_video").click(function () {
        var video = $('#john_mobile_intro_video')[0]; // Get the video element
        if (video.paused) {
            video.play(); // If paused, play the video
        } else {
            video.pause(); // If playing, pause the video
        }
    });

    $('.seeker_mobile_intro_overlay_container').on('click', function() {
        $(this).hide();
        $("#seeker_mobile_intro_video")[0].play();
    });

    $("#seeker_mobile_intro_video").click(function () {
        var video = $('#seeker_mobile_intro_video')[0]; // Get the video element
        if (video.paused) {
            video.play(); // If paused, play the video
        } else {
            video.pause(); // If playing, pause the video
        }
    });

});