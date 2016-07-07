define(function(require, exports, module) {
    // 通过 require 引入依赖
    var $ = require('jquery');
    var jike = require('jike');

    $(function(){
        //顶部文本框获取焦点事件
        $('#search_txt').focus(function(){
            $('#search_tag').hide();
            $('#search_btn').addClass('search-btn-event');
        });
        //顶部文本框拾取焦点事件
        $('#search_txt').focusout(function(){
            $('#search_tag').show();
            $('#search_btn').removeClass('search-btn-event');
        });

        //用户下拉菜单
        jike.showEvent('#ucMenu','#ucPullDown');

        //加载进度条
        var loading = $('#loading');
        var loadnum = 0;
        var loadtimer = setInterval(function(){
            loadnum++;
            loading.animate({'width':loadnum+'%'},10);
            if(loadnum==100){
                clearInterval(loadtimer);
            }
        },10);

        //导航菜单效果
        jike.showEvent('#navbox','#navPullDown');
        $('#navbox .nav-head a').hover(function(){
            var num = $(this).index()-1;
            $('#navPullDown .pull-item').removeClass('pih').find('.arrow-icon').hide();
            $('#navPullDown .pull-item').eq(num).addClass('pih').find('.arrow-icon').show();
        });
        $('#navPullDown .pull-item').hover(function(){
            $('#navPullDown .pull-item').removeClass('pih').find('.arrow-icon').hide();
            $(this).addClass('pih').find('.arrow-icon').show();
        });

        //课程导航
        $('.layout-class-nav ul li').hover(function(){
            $(this).children('a').addClass('nav-on');
            $(this).find('.nav-list').show();
        },function(){
            $(this).children('a').removeClass('nav-on');
            $(this).find('.nav-list').hide();
        });

        //banner
        jike.silderFocus('#mainbanner');
        //就业课程滚动
        jike.scrollFocus('#courseTop',3);
        //用户操作链接特效
        $('.start-list .move-event').hover(function(){
            var index = $(this).index();
            setTimeout(function(){
                $('.fixed-list').show();
                togg(index);
            },100)
        },function(){
            $('.fixed-list').hide();
        });
        $('.fixed-list').hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        });
        $('.type-list li').hover(function(){
            var index = $(this).index();
            togg(index);
        });
        function togg(index){
            $('.type-list li').removeClass('active');
            $('.type-list li').eq(index).addClass('active');
            $('.tab-content').hide();
            $('.tab-content').eq(index).show();
        }
        //直播公开课Tab选项卡
        jike.tabFocus('.weekbox li','.course-live-list','active','liveshow');

        //热门课程Tab选项卡
        jike.tabFocus('.hc-tab-label ul li','.course-list-box','active','tabshow');
        var coursebox = $('.course-list-box ul li');
        coursebox.each(function(index,value){
            var obj = $(value);
            var player = obj.find('.courseplay');
            var liker = obj.find('.like-icon');
            var infor = obj.find('.course-infor');
            var profile = obj.find('.infor-profile');
            var level = obj.find('.level');
            var number = obj.find('.number');
            obj.hover(function(){
                player.fadeIn();
                liker.fadeIn();
                infor.animate({'height':'175px'},300);
                profile.css({'display':'block'}).animate({'height':'52px','opacity':1},300);
                level.show();
                number.show();
            },function(){
                player.fadeOut();
                liker.fadeOut();
                liker.fadeOut();
                infor.animate({'height':'88px'},300);
                profile.animate({'height':'0px','opacity':0},300,function(){
                    $(this).css('display','none');
                });
                level.hide();
                number.hide();
            });
        });

        //职业路径问号特效
        $('.what-icon').hover(function(){
            $(this).next('.what-infor').animate({'margin-left':0,'opacity':1});
        },function(){
            $(this).next('.what-infor').animate({'margin-left':'-5px','opacity':0});
        })
        //职业路径图
        var learnpath = $('.learn-path-cnt a');
        learnpath.each(function(index,value){
            var $this = $(this);
            var $index = $this.index();
            $this.hover(function(){
                if($index<4 || ($index>4 && $index<9)){
                    $this.css('border-color','#35b558').next().css('border-left','1px solid #35b558');
                }
                if($index>4 && $index<10){
                    learnpath.eq($index-5).css('border-bottom','1px solid #35b558');
                }
                if(($index+1) % 5 == 0){
                    $this.css('border-color','#35b558')
                }
            },function(){
                if($index<4 || ($index>4 && $index<9)){
                    $this.css('border-color','rgb(228,228,228)').next().css('border-left','1px solid rgb(228,228,228)');
                }
                if($index>4 && $index<10){
                    learnpath.eq($index-5).css('border-bottom','1px solid rgb(228,228,228)');
                }
                if(($index+1) % 5 == 0){
                    $this.css('border-color','rgb(228,228,228)');
                }
            });
        });

        //wiki
        $(".wiki-item").each(function(index,value){
            var $this = $(this);
            var $index = $this.index();
            $this.hover(function(){
                $this.css({'border-color':'#35b558'}).prev().css({'border-right-color':'#35b558'});
            },function(){
                $this.css({'border-color':'#e4e4e4'}).prev().css({'border-right-color':'#e4e4e4'});
            });

        });

        //网站底部滚动
        $('.company-cnt').each(function(index,value){
            jike.scrollFocus2(value);
        });

        //scroll top
        var gotop = $('#gotop');
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
        $('.close').click(function(){
            $(this).parent().hide();
        });
    });
});