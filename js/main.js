$(function() {
    var navPos = $(".sub-nav").offset().top - 61;
    
    $(window).scroll(function() {
        var togglePos = $(window).scrollTop();
        // if ($(window).scrollTop() > navPos) {
        if (togglePos > navPos) {
            $(".global-nav").addClass("scroll");
            $(".sub-nav").addClass("scroll");
        } else {
            $(".global-nav").removeClass("scroll");
            $(".sub-nav").removeClass("scroll");
        }
    });

    // horizontal-slide
    $("#home-a").addClass("current");
    $(".global-nav a").click(function() {
        var current = $(this).attr("href");
        if ($(current).hasClass("other")) {

            if (!$(current).hasClass("active")) {

                pageScr(140);
                activeRemove(".active", 300, 280);
                $(".current").removeClass("current");
                $(this).addClass("current");
                $(current).addClass("active");
                $(".main-container").append('<div class="bg">');
                $(current).show(500);
                $(".bg").show(400);

            } else {
                pageScr(0);
                activeRemove(current, 500, 300);
            }
        } else {
            pageScr(0);
            activeRemove(".active", 500, 300);
        }
        $(".bg").click(function() {
            pageScr(0);
            activeRemove(".active", 500, 300);
        });
        return false;
    });

    function pageScr(pos) {
        $("html, body").animate({scrollTop: pos}, 300);
    }

    function activeRemove(target, tHide, bHide) {
        $(target).hide(tHide, function() {
            $(this).removeClass("active");
        });
        $(".bg").hide(bHide, function() {
            $(this).remove();
        });
        $(".current").removeClass("current");
        $("#home-a").addClass("current");
    }

});
