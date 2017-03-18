// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

$(document).ready(function(){

    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        $imgBig = $("#imgBig"),
        $overlay = $("#overlay"),
        $overlayContent = $("#overlayContent"),
        $myCarousel = $("#myCarousel");


    //alert(windowWidth);

    // Show Bigger Photos
    $(".grid").find("img").click(function(){
        $imgBig.attr("src",$(this).prop('src'));
        $overlay.show(350);
        $overlayContent.show(350);
    });

    // Hide Bigger Photos
    $imgBig.click(function(){
        $(this).attr("src", "");
        $overlay.hide();
        $overlayContent.hide();
    });

    // Carousel Photos
    $myCarousel.carousel({interval: 2000});

    // Carousel Thumbnails
    $('[id^=carousel-selector-]').click(function() {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            $myCarousel.carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    }); // end click
}); // end ready
