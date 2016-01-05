(function($) {
    var video = document.getElementById("video");
    var playButton = document.getElementById("play");

    video.addEventListener("ended", function() {
        playButton.style.display = 'block';
        video.load() 
    });
    video.addEventListener("pause", function() {
        playButton.style.display = 'block';
    });
    playButton.addEventListener("click", function() {
        if (video.paused == true) {
            video.src = angular.element(document.getElementById('container')).scope().data.video;
            video.play();
            playButton.style.display = 'none';
        } 
    });
})(jQuery);



