$(function() {
    var gnbFlag = false;
    var gnbIndex;

    $(".nav li").on({
        "mouseenter" : function() {
            if(gnbIndex != undefined) {
                $(".lnb").eq(gnbIndex).css("display","none");
            }
            gnbIndex = $(this).index();
            gnbFlag = true;
            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
            $(".lnb_container").show();
            $(".lnb").eq(gnbIndex).css("display","block");

            $(".active_bar").show();
            var listLeft = $(this).offset().left;
            var listWidth = $(this).width();
            $(".active_bar").width(listWidth);
            $(".active_bar").offset({left:listLeft+17});
            //li에 padding이 17 있었으므로 더해줌
        }
    });

    $(".lnb_container").on({
        "mouseleave" : function() {
            if(gnbFlag) {
                $(".lnb_container").removeClass("appear");
                $(".lnb_container").addClass("disappear");
                $(".lnb_container").hide();
                $(".active_bar").hide();
            } else {
                return;
            }
        }
    });

    $(".trigger").on({
        "click" : function() {
            if($(".mobile.hamburger").is(":visible")) {
                $(".mobile.hamburger").hide();
                $(".mobile.close").show();
                $("#main_header").height(60);
                $("#main_content").hide();
                $("#main_footer").hide();
                $("#mobile_menu").empty();
                $("li").eq(3).show();
                $("li").eq(4).show();
                var nav = $(".nav").clone();
                $("#mobile_menu").append(nav);
                $("#mobile_menu").show();
            } else {
                $(".mobile_hamburger").show();
                $(".mobile.close").hide();
                $("#main_header").height(390);
                $("#main_content").show();
                $("#main_footer").show();
                $("#mobile_menu").hide();
            }
        }
    });

    $(window).resize(function() {
        var width = $(window).width();
        if(width > 767) {
            $("li").eq(3).hide();
            $("li").eq(4).hide();
            if($("#mobile_menu").is(":visible")) {
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();
                $("#main_header").height(390);
                $("#main_content").show();
                $("#main_footer").show();
                $("#mobile_menu").hide();
            }
        }
    });
});