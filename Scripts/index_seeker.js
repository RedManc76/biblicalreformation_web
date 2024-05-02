$(document).ready(function () {
    $(".seeking_intro_overlay").click(function () {
        $(this).hide();
        $("#seeking_intro_video")[0].play();
    });

    $("#seeking_intro_video").click(function () {
        var video = $('#seeking_intro_video')[0]; // Get the video element
        if (video.paused) {
            video.play(); // If paused, play the video
        } else {
            video.pause(); // If playing, pause the video
        }
    });
});