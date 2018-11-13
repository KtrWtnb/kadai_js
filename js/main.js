$(function() {
    $(".global-nav a").click(function() {
        var current = $(this).attr("href");
        if (current != "#home") {

            if (!$(current).hasClass("active")) {

                $(current).addClass("active");
                $(".main-container").append('<div id="bg">');
                $(current).stop().slideDown();

            } else {

                $(current).slideUp();
                $(current).removeClass("active");
                $("#bg").slideUp(function() {
                    $(this).remove();
                });
            }

        } else {
            $(".current").slideUp(function() {
                $(".current").removeClass("active");
            });
            $("#bg").slideUp(function() {
                $(this).remove();
            });
        }

        return false;
    });
});
