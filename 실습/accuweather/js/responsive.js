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
        }
    });
})