$(window).on("load", function () {
    /*-------------------------Preloader-------------------------- */
    $(".preloader").fadeOut("slow");
});
$(document).ready(function () {
    /*-------------------------Navbar Shrink-------------------------- */
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
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
    /*-------------------------Features Carousel-------------------------- */
    $(".features-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    });
    /*-------------------------App Sreenshot Carousel-------------------------- */
    $(".screenshots-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });
    /*-------------------------Testimonials Carousel-------------------------- */
    $(".testimonials-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
    /*-------------------------Team Carousel-------------------------- */
    $(".team-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
    /*-------------------------Page Scrolling - ScrollIt-------------------------- */
    $.scrollIt({
        topOffset: -50,
    });
    /*-------------------------Navbar Collapse-------------------------- */
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });
    /*-------------------------Toggle Theme - Light & Dark-------------------------- */
    function toggleTheme() {
        if (localStorage.getItem("bootstrap-theme") !== null) {
            if (localStorage.getItem("bootstrap-theme") === "dark") {
                $("body").addClass("dark");
            } else {
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function () {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("bootstrap-theme", "dark");
        } else {
            localStorage.setItem("bootstrap-theme", "light");
        }
        updateIcon();
    });
    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
});
