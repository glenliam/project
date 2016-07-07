/**
 * Created by IWEN on 16/1/5.
 */


$(function(){
    //    平板搜索按钮切换效果
    var winw = $(window).width();
    $("#form-in").focus(function(){
        if($(window).width()>767 && $(window).width()<992){
            $("#form-btn").fadeIn();
        }
    });
    $("#form-in").focusout(function(){
        if($(window).width()>767 && $(window).width()<992) {
            $("#form-btn").fadeOut();
        }
    });
//    phone导航更多
    $("#btn-navs").click(function(){
        $(".phone-nav-hide").toggle();
    });
//    Pad侧面更多产品切换效果
    $("#pad-pro-btn").click(function(e){
        e.stopPropagation();
        $(".pad-pro-wrap").toggle()
        $(this).toggleClass("phone-icon-hover");
    });
    $(document).click(function(){
        $(".pad-pro-wrap").hide();
        $("#pad-pro-btn").removeClass("phone-icon-hover");
    });
    //PC侧面更多产品切换效果
    $("#more-btn-s").mouseenter(function(){
        $(".pc-pro-wrap").fadeIn(200)
    });
    $(".pc-pro-wrap").mouseleave(function(){
        $(".pc-pro-wrap").fadeOut(200);
    });
});

