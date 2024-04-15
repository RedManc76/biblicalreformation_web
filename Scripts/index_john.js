$(document).ready(function () {
    $(".john_intro_overlay").click(function () {
        $(this).hide();
        $("#john_intro_video")[0].play();
    });

    $("#john_intro_video").click(function () {
        var video = $('#john_intro_video')[0]; // Get the video element
        if (video.paused) {
            video.play(); // If paused, play the video
        } else {
            video.pause(); // If playing, pause the video
        }
    });
});