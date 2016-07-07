var datatypes = "groom";
var dataIndex = 1;
var scrolls = false;
var tabOn = new Array();
var colorRememberLS = ''; //定义localstorage的全局变量
var colorRememberCK = ''; //定义cookie的全局变量
var colorValue = '';//定义存储颜色属性的变量
$(function() {
	webResize(); //背景图片自适应
	//下拉菜单
	$('.dropbtn').hover(function() {
		$(this).find('.drop_down').show();
	}, function() {
		$(this).find('.drop_down').hide();
	});
	//右侧更多产品菜单
	$('#mlink').mouseenter(function() {
		$('.side_menu_r').fadeIn();
	});
	$('.side_menu_r').mouseleave(function() {
		$('.side_menu_r').fadeOut();
	});
	//设置tab导航点击数
	$('.mv_tab_menu a').each(function(index, value) {
		tabOn[index] = 0;
	});
	//内容切换
	$('.mv_tab_menu a').click(function() {
		$('.mv_tab_menu a.active').removeClass('active');
		$(this).addClass('active');
		$('.tabbox').hide();
		$('.tabbox').eq($(this).index()).show();
		datatypes = $(this).attr('datatype');
		dataIndex = $(this).index();
		if (scrolls && tabOn[dataIndex] == 0) {
			onloadAjax();
			$('#loading').hide();
		}
		tabOn[dataIndex]++;
	});
	//热点新闻换一换部分
	$("#changehot").click(function() {
		$(".list_glb_hot").fadeOut();
		$(".list_glb_hot").fadeIn();
	});
	//换肤下拉菜单
	$("#changebg").click(function() {
		$('.s-skin-layer').slideToggle("slow");
	});
	$(".s-skin-setting").click(function() {
		$('.s-skin-layer').slideToggle("slow");
	});
	//换肤功能
	//判断是否之前有换过皮肤
	var colorRememberLSValue = localStorage.getItem(colorRememberLS);
	var colorRememberCKValue = getCookie(colorRememberCK);
	//如果localstorage的全局变量有值，改变颜色函数使用localstorage中的数值，否则使用cookie中的数值
	if (colorRememberLSValue) {
		changColor(colorRememberLSValue);
	} 
	else {
		changColor(colorRememberCKValue);
	}
	//点击不同图片更换网页背景换肤
	$(".pos-0").click(function() {
		colorValue = 'url(images/skin/skin1.jpg)';
		changColor(colorValue);
	});
	$(".pos-1").click(function() {
		colorValue = 'url(images/skin/skin2.jpg)';
		changColor(colorValue);
	});
	$(".pos-2").click(function() {
		colorValue = 'url(images/skin/skin3.jpg)';
		changColor(colorValue);
	});
	$(".pos-3").click(function() {
		colorValue = 'url(images/skin/skin4.jpg)';
		changColor(colorValue);
	});
	$(".pos-4").click(function() {
		colorValue = 'url(images/skin/skin5.jpg)';
		changColor(colorValue);
	});
	$(".pos-5").click(function() {
		colorValue = 'url(images/skin/skin6.jpg)';
		changColor(colorValue);
	});
	$(".pos-6").click(function() {
		colorValue = 'url(images/skin/skin7.jpg)';
		changColor(colorValue);
	});
	$(".pos-7").click(function() {
		colorValue = 'url(images/skin/skin8.jpg)';
		changColor(colorValue);
	});
	$(".pos-8").click(function() {
		colorValue = 'url(images/skin/skin9.jpg)';
		changColor(colorValue);
	});
	$(".pos-9").click(function() {
		colorValue = 'url(images/skin/skin10.jpg)';
		changColor(colorValue);
	});
	$(".pos-10").click(function() {
		colorValue = 'url(images/skin/skin11.jpg)';
		changColor(colorValue);
	});
	$(".pos-11").click(function() {
		colorValue = 'url(images/skin/skin12.jpg)';
		changColor(colorValue);
	});
	//我的关注展开切换
	$('.lb_head').click(function() {
		$(this).next('ul').slideToggle(0);
		$(this).find('.icon_delta').toggleClass('tricon');
	});
	//视频鼠标移入效果
	$('.videobox').hover(function() {
		$(this).find('.vb_type').hide();
		$(this).find('.vb_oper').show();
	}, function() {
		$(this).find('.vb_type').show();
		$(this).find('.vb_oper').hide();
	});
	//加载更多按钮点击事件
	$('#loading').click(function() {
		scrolls = true;
		onloadAjax();
	});
	//加载函数
	function onloadAjax() {
		$('.tabbox').eq(dataIndex).find('.loading').show();
		$.ajax({
			url: datatypes + '.html',
			dataType: 'html',
			success: function(data) {
				$('#' + datatypes).append(data);
				$('.tabbox').eq(dataIndex).find('.loading').hide();
				$('.tabbox').eq(dataIndex).css({
					'height': 'auto'
				});
				$('#loading').hide();
				$('.foot_wrapper').css({
					'position': 'relative',
					'top': '0',
					'left': '0',
					'margin': '20px 0'
				});
			}
		});
	}
	//改变网页元素的颜色
	function changColor(colorValue) {
		$('.bger').css('background', colorValue);
		webResize();//进行背景图片自适应
		localStorage.setItem(colorRememberLS, colorValue); //存储到localstorage中
		clearCookie(colorRememberCK); //清除已有的cookie再进行后面的赋值
		setCookie(colorRememberCK, colorValue, 1); //存储到cookie中
	}

	//读取本地cookie文件
	function getCookie(c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=")
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1
				c_end = document.cookie.indexOf(";", c_start)
				if (c_end == -1) c_end = document.cookie.length
				return unescape(document.cookie.substring(c_start, c_end))
			}
		}
		return ""
	}
	//生成cookie文件
	function setCookie(c_name, value, expiredays) {
		var exdate = new Date()
		exdate.setDate(exdate.getDate() + expiredays)
		document.cookie = c_name + "=" + escape(value) +
			((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
	}

	//清除cookie
	function clearCookie(name) {
		setCookie(name, "", -1);
	}
	//滚动事件
	document.body.onmousewheel = function(event) {
			var delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
			var _top = $(document).height() - $(document).scrollTop() - $(window).height();
			if (delta < 0 && _top < 200) {
				onloadAjax();
				scrolls = true;
			}
			if ($(document).scrollTop() > $(window).height() - 1000) {
				$('#gotop').show();
			} else {
				$('#gotop').hide();
			}
		}
		//回到顶部
	$('#gotop').click(function() {
		window.stimer = setInterval(goTop, 10);
	});

	function goTop() {
		$(document).scrollTop(function() {
			var sTop = $(document).scrollTop();
			if (sTop == 0) {
				clearInterval(window.stimer);
			}
			return sTop / 3;
		});
	}

});
//如果窗口变化执行背景图片自适应函数
$(window).resize(function() {
	webResize();
});

//背景图片自适应处理
function webResize() {
	var bger = $("#bger");
	var winW = $(window).width(); //获取浏览哭器窗口宽度
	var winH = $(window).height(); //获取浏览哭器窗口高度
	var ratio = 1.6;
	if (winW / winH > ratio) {
		bger.css('background-size', '100% auto');
	} else {
		bger.css('background-size', 'auto 100%');
	}
}