function showImage() {
    if ($(this).is('img') && this.naturalWidth <= 0) {
        return; // Couldn't load image for some reason
    } 

    if ($(this).hasClass('fade-in-image')) {
        $(this).fadeTo(300, 1, 'linear', function () {
            $(this).removeClass('fade-in-image');
        });
    }

    $(this).removeClass('hidden-bg');
    $(this).removeClass('hidden-img');
    $(this).removeClass('no-opacity');
    $(this).removeClass('transparent-bg');
    $(this).parent().removeClass('fully-load-parent');
}

function fullyLoadAndShowImage(img) {
    if ($(img).is('img')) {
        if (img.complete) {
            showImage.call(img);
        } else {
            img.onload = showImage;
        }
    } else {
        $('<img/>').attr('src', $(img).css('background-image').replace(/(^url\()|(\)$|[\"\'])/g, '')).on('load', function () {
            $(this).remove();
            showImage.call(img);
        });
    }
}

// Load and then change images to prevent showing half loaded ones
$('.fully-load-image').each(function () {
    fullyLoadAndShowImage(this);
});

$(document).ready(function () {
    // Remove preload class if given.
    $("body").removeClass("preload");

    // Lazy load images
    $('.lazy-load-image').each(function () {
        fullyLoadAndShowImage(this);
    });
});