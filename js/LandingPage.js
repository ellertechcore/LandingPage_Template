$(document).ready(function () {

    //var is_mobile = false;

    //if ($('#mobile-detector').css('display') == 'none') {
    //    is_mobile = true;
    //}

    //// Nav - Hover dropdown menus when not in mobile
    //if (is_mobile) {
    //    $(".navbar").click(
    //        function () {
    //            $(this).children("#navbarContent").fadeIn("fast");
    //        },
    //        function () {
    //            $(this).children("#navbarContent").fadeOut("fast");
    //        }
    //    );
    //}


    // Nav - Change color on scroll
    $(window).scroll(function () {
        var scrollLocation = $(window).scrollTop();
        if (scrollLocation <= 30) {
            $(".navigation").css("background-color", "transparent");
            $(".navbar-nav").css("background-color", "transparent");
        } else if (scrollLocation > 30) {
            $(".navigation").css("background-color", "rgba(70,185,147, .75)");
            $(".navbar-nav").css("background-color", "transparent");
        }
    });

    //Partner - Collapsible
    $(function () {
        $(".partner-collapsible").click(function () {

            //Expand or collapse this panel
            $(this).next().slideToggle('fast');

            //Hide the other panels
            $(".partner-expanded").not($(this).next()).slideUp('fast');
        });
    });


});