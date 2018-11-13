$(function() {
    $("#home-a").addClass("current");
    $(".global-nav a").click(function() {
        var current = $(this).attr("href");
        if ($(current).hasClass("other")) {

            if (!$(current).hasClass("active")) {

                activeRemove(".active", 300, 280);
                $(".current").removeClass("current");
                $(this).addClass("current");
                $(current).addClass("active");
                $(".main-container").append('<div class="bg">');
                $(current).show(500);
                $(".bg").show(400);

            } else {
                activeRemove(current, 500, 300);
            }
        } else {
            activeRemove(".active", 500, 300);
        }
        $(".bg").click(function() {
            activeRemove(".active", 500, 300);
        });
        return false;
    });

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
