/**
 * Created by IWEN on 16/2/17.
 */
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    // 通过 require 引入依赖
    var $ = require('jquery');
    var init = new Object();
    /*
     鼠标滑动事件
     移入显示,移出隐藏
     */
    init.showEvent = function(a,b){
        $(a).hover(function(){
            $(b).show();
        },function(){
            $(b).hide();
        });
    }

    //加载进度条
    init.loading = function(obj) {
        var loading = $(obj);
        var loadnum = 0;
        var loadtimer = setInterval(function(){
            loadnum++;
            loading.animate({'width':loadnum+'%'},10);
            if(loadnum==100){
                clearInterval(loadtimer);
            }
        },10);
    }

    //Tab选项卡
    init.tabFocus = function(title,content,active1,active2){
        $(title).hover(function(){
            var index = $(this).index();
            $(title).removeClass(active1);
            $(this).addClass(active1);
            $(content).removeClass(active2);
            $(content).eq(index).addClass(active2);
        });
    }

    //scroll top
    init.gotop = function(el){
        var gotop = $(el);
        var dom = $(document);
        var toptimer = null;
        var tops;
        $(window).scroll(function(){
            var top = $(document).scrollTop();
            if(top>300){
                gotop.fadeIn();
            }else{
                gotop.fadeOut();
            }
        });
        gotop.click(function(){
            toptimer = setInterval(function(){
                tops = dom.scrollTop();
                tops-=Math.ceil(tops*0.1);
                if(tops==0){
                    clearInterval(toptimer);
                }
                dom.scrollTop(tops);
            },10);
        });
    }


    
    


    module.exports = init;
});