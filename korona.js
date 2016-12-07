// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

$(document).ready(function(){

    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        myCarousel = $("#myCarousel");

    // Window Height
    $(window).height(windowHeight+"px");
    //alert(windowWidth);

    // Carousel Photos
    myCarousel.carousel({interval: 2000});

    // Carousel Thumbnails
    $('[id^=carousel-selector-]').click(function() {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            myCarousel.carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    }); // end click
}); // end ready
