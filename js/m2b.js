function checkScrollForNavbar() {
    var st = $(this).scrollTop();
    if (st >= 80) {
        $('.m2b-navbar-container').addClass('navbar-fixed-top');
    } else {
        $('.m2b-navbar-container').removeClass('navbar-fixed-top');
    }
}

$(document).ready(function () {
    checkScrollForNavbar();
});

$(window).scroll(function () {
    checkScrollForNavbar();
});

$(function () {

	// https://developers.google.com/web/updates/2016/07/autoplay
	// https://developers.google.com/web/updates/2016/03/play-returns-promise
	// https://stackoverflow.com/questions/42160528/html5-autoplay-video-in-mobile-device
    
    if (document.querySelector('video') !== null) {
        
		var playPromise = document.querySelector('video').play();

		// In browsers that don’t yet support this functionality,
		// playPromise won’t be defined.
		if (playPromise !== undefined) {
		  playPromise.then(function() {
		    // Automatic playback started!
		  }).catch(function(error) {
		    // Automatic playback failed.
		    // Show a UI element to let the user manually start playback.
              $('.m2b-showcase > .videoContainer').append('<img src="/images/m2b/2016-siege-video-img.jpg" class="main-video-replacer">');
		  });
		}
	}

	$('.discover').click(function() {
		$('html').animate({
			scrollTop: $('.latest-news').offset().top - 200
		}, 1000);
	});
});