define(function(require, exports, module) {
	var $ = require('jquery');
	var init = require('init');

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
        init.showEvent('#ucMenu','#ucPullDown');

        //加载动画
        init.loading('#loading');

        //导航菜单效果
        init.showEvent('#navbox','#navPullDown');
        var $navItem = $('#navbox .nav-head a');
        var $navPullDown = $('#navPullDown .pull-item');
        $navItem.hover(function(){
            var num = $(this).index()==0 ? 1000 : $(this).index()-1;
            $navPullDown.removeClass('pih').find('.arrow-icon').hide();
            $navPullDown.eq(num).addClass('pih').find('.arrow-icon').show();
        },function(){
        	$navPullDown.removeClass('pih').find('.arrow-icon').hide();
        });
        $navPullDown.hover(function(){
            $navPullDown.removeClass('pih').find('.arrow-icon').hide();
            $(this).addClass('pih').find('.arrow-icon').show();
        },function(){
        	$navPullDown.removeClass('pih').find('.arrow-icon').hide();
        });

        //课程导航
        $('.lesson-classfiy-nav ul li').hover(function(){
            $(this).children('a').addClass('nav-on');
            $(this).find('.nav-list').show();
        },function(){
            $(this).children('a').removeClass('nav-on');
            $(this).find('.nav-list').hide();
        });

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

        //异步加载swiper插件
        require.async('swiper', function() {
            //首页Banner
            var indexBanner = new Swiper('.index-banner', {
                speed: 1500,
                autoplay: 5000,//可选选项，自动滑动
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplayDisableOnInteraction: false,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
            });
            $('.index-banner').hover(function() {
                $(this).find('.swiper-button').fadeIn();
            }, function() {
                $(this).find('.swiper-button').fadeOut();
            });
            //就业班课程
            var indexLesson = new Swiper('.index-lesson', {
                loop: true,
                slidesPerView: 3,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
            });
            $('.index-lesson').hover(function() {
                $(this).find('.swiper-button').fadeIn();
            }, function() {
                $(this).find('.swiper-button').fadeOut();
            });

            //底部滚动
            $('.index-scroll').each(function(index, el) {
                new Swiper(el, {
                    loop: true,
                    slidesPerView: $(el).attr('data-num'),
                    prevButton: '.'+$(el).attr('data-prev'),
                    nextButton: '.'+$(el).attr('data-next'),
                });
                $(el).parent().hover(function() {
                    $(this).find('.swiper-button').fadeIn();
                }, function() {
                    $(this).find('.swiper-button').fadeOut();
                });
            });
        });

        //最新公开课
        init.tabFocus('.weekbox li','.course-live-list','active','liveshow');

        //热门课程Tab选项卡
        init.tabFocus('.hc-tab-label ul li','.course-list-box','active','tabshow');
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

        //标题问号特效
        $('.what-icon').hover(function(){
            $(this).next('.what-infor').animate({'margin-left':0,'opacity':1});
        },function(){
            $(this).next('.what-infor').animate({'margin-left':'-5px','opacity':0});
        })

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

        init.gotop('#gotop');

        $('.close').click(function(){
            $(this).parent().hide();
        });
	});
});