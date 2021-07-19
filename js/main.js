$(document).ready(function () {
    /*-------------------------Navbar Shrink-------------------------- */
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            console.log("object");
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /*-------------------------Video Popup-------------------------- */
    const videoSrc = $("#iframe").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#iframe").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if ($("#iframe").attr("src") == "") {
                $("#iframe").attr("src", videoSrc);
            }
        }
    });
});
