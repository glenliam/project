// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	// 通过 require 引入依赖
	var $ = require('jquery');
	var jike = new Object();
	/*
	 鼠标滑动事件
	 移入显示,移出隐藏
	 */
	jike.showEvent = function(a, b) {
		$(a).hover(function() {
			$(b).show();
		}, function() {
			$(b).hide();
		});
	}

	//幻灯片BANNER动画
	jike.silderFocus = function(obj) {
		var wrapper = $(obj).find('.silder-wrapper');
		var width = wrapper.find('a').width();
		var arrow = $(obj).find('.silder-arrow');
		var sileft = $(obj).find('#sileft');
		var siright = $(obj).find('#siright');
		var btn = $(obj).find('.silder-btn');
		var len = btn.find('span').size();
		var count = 1;
		var timer;
		wrapper.width(width * len);
		$(obj).hover(function() {
			arrow.fadeIn()
		}, function() {
			arrow.fadeOut()
		});

		function trans(val) {
			if (val == len) {
				val = 0;
			}
			if (val == -1) {
				val = len - 1;
			}
			wrapper.css({
				'transform': 'translate3d(-' + val * width + 'px, 0px, 0px)',
				'transition-duration': '1s'
			});
			btn.find('span').removeClass('on').eq(val).addClass('on');
			count = val + 1;
		}

		timer = setInterval(function() {
			trans(count);
		}, 3000);

		btn.find('span').click(function() {
			clearInterval(timer);
			trans($(this).index());
			timer = setInterval(function() {
				trans(count);
			}, 3000);
		});

		sileft.click(function() {
			clearInterval(timer);
			trans(btn.find('.on').index() + 1);
			timer = setInterval(function() {
				trans(count);
			}, 3000);
		});

		siright.click(function() {
			clearInterval(timer);
			trans(btn.find('.on').index() - 1);
			timer = setInterval(function() {
				trans(count);
			}, 3000);
		});

	}

	//滚动特效
	jike.scrollFocus = function(obj, lis) {
		var box = $(obj);
		var allbtn = box.find('.scroll-btn');
		var lbtn = box.find('.scroll-btn-left');
		var rbtn = box.find('.scroll-btn-right');
		var trs = box.find('.trs');
		var liw = trs.find('li').eq(0).outerWidth();
		var size = trs.find('li').length;
		var count = 0;
		var timer;
		trs.css({
			'width': size * liw + 'px',
			'transform': 'translate3d(0px, 0px, 0px)',
			'transition-duration': '0s'
		});
		box.hover(function() {
			allbtn.fadeIn();
		}, function() {
			allbtn.fadeOut();
		});
		lbtn.click(function() {
			clearTimeout(timer);
			if (count == 0) {
				count = size - lis;
				trs.css({
					'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
					'transition-duration': '0s'
				});
				timer = setTimeout(function() {
					count--;
					trs.css({
						'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
						'transition-duration': '0.3s'
					});
				}, 50);
			} else {
				count--;
				trs.css({
					'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
					'transition-duration': '0.3s'
				});
			}
		});
		rbtn.click(function() {
			if (count < size - lis) {
				clearTimeout(timer);
				count++;
				trs.css({
					'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
					'transition-duration': '0.3s'
				});
				if (count > size - lis - 1) {
					timer = setTimeout(function() {
						count = 0;
						trs.css({
							'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
							'transition-duration': '0s'
						});
					}, 300);
				}
			}
		});
	}

	//滚动特效2
	jike.scrollFocus2 = function(obj) {
		var box = $(obj);
		var allbtn = box.find('.btns');
		var lbtn = box.find('.left-btn');
		var rbtn = box.find('.right-btn');
		var trs = box.find('.swiper-wrapper');
		var liws = trs.find('a').eq(0).outerWidth();
		var lis = Math.round(box.width() / liws);
		var liw = trs.outerWidth() / lis;
		var size = trs.find('a').length;
		var count = 0;
		var timer;
		trs.find('a').css({
			'width': liw + 'px'
		});
		trs.css({
			'width': size * liw + 'px',
			'transform': 'translate3d(0px, 0px, 0px)',
			'transition-duration': '0s'
		});
		box.hover(function() {
			allbtn.fadeIn();
		}, function() {
			allbtn.fadeOut();
		});
		lbtn.click(function() {
			clearTimeout(timer);
			if (count == 0) {
				count = size - lis;
				trs.css({
					'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
					'transition-duration': '0s'
				});
				timer = setTimeout(function() {
					count--;
					trs.css({
						'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
						'transition-duration': '0.3s'
					});
				}, 50);
			} else {
				count--;
				trs.css({
					'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
					'transition-duration': '0.3s'
				});
			}
		});
		rbtn.click(function() {
			if (count < size - lis) {
				clearTimeout(timer);
				count++;
				trs.css({
					'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
					'transition-duration': '0.3s'
				});
				if (count > size - lis - 1) {
					timer = setTimeout(function() {
						count = 0;
						trs.css({
							'transform': 'translate3d(-' + liw * count + 'px, 0px, 0px)',
							'transition-duration': '0s'
						});
					}, 300);
				}
			}
		});
	}

	//Tab选项卡
	jike.tabFocus = function(title, content, active1, active2) {
		$(title).hover(function() {
			var index = $(this).index();
			$(title).removeClass(active1);
			$(this).addClass(active1);
			$(content).removeClass(active2);
			$(content).eq(index).addClass(active2);
		});
	}

	module.exports = jike;
});