// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

$(document).ready(function(){
    // Window Height
    var windowHeight=$(window).height();
    $(window).height(windowHeight+"px");

    var windowWidth=$(window).width();
    //alert(windowWidth);

    // Carousel Photos
    $("#myCarousel").carousel({interval: 2000});

    // Carousel Thumbnails
    $('[id^=carousel-selector-]').click(function() {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
});
