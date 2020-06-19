$(document).ready(function() {
    $("#product-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[700,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });
});

var vArray = [
    "../img/VID-20200619-WA0005.mp4",
    "../img/VID-20200619-WA0006.mp4",
    "../img/VID-20200619-WA0007.mp4",
]

videoPlayer.src = vArray[0]

i = 1
videoPlayer.onended = function(){
    if (i < vArray.length) {
        videoPlayer.src = vArray[i]
       i++
    }
}