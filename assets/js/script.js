$(function() {
    // nav bar behaviour
    // first get the current scroll position
    var height;
    var $navbar = $(".navbar");

    $(window).scroll(function() {
        // if scroll position is bigger than 10, change nav bar design
        height = $(window).scrollTop();
        console.log(height);
        if (height > 100) {
            $navbar.addClass("active");
        } else {
            $navbar.removeClass("active");
        }
    });
});