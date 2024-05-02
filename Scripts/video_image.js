document.addEventListener("DOMContentLoaded", function() {
    var video_tract = document.getElementById("video_tract");
    var video_face = document.getElementById("video_face");
    
    // Add event listener for when the video is fully loaded and starts playing
    video_tract.addEventListener("timeupdate", function() {
        if (video_tract.currentTime >= 0) {
            video_face.style.display = "none";
        }
    });
})