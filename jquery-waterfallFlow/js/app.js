//瀑布流排列函数
function imgLocation() {
	var box = $(".box"); //创建盒子对象，对应HTML中的.box
	var boxWidth = box.eq(0).width(); //确定盒子的宽度，获取第一张宽度，盒子都是等宽
	var num = Math.floor($(window).width() / boxWidth); //计算一排能摆多少个盒子，浏览器窗口宽度除以每一个盒子的宽度
	var boxArr = []; //存放所有盒子高度的数组
	//确定每一排最小高度的图片,index是确定位置，value是确定哪张图片
	box.each(function(index, value) {
		//获取每一个盒子的高度
		var boxHeight = box.eq(index).height();
		if (index < num) {
			boxArr[index] = boxHeight;
			//修复改变窗口宽度后，再改变回来，布局就不变了，将图片的CSS属性重置
			$(value).css({
				"position": "",
				"top": 0,
				"left": 0
			});
		}
		//获取完成后，将最小的高度存入minBoxHeight中
		else {
			var minBoxHeight = Math.min.apply(null, boxArr);
			var minBoxIndex = $.inArray(minBoxHeight, boxArr); //获取最小高度图片的位置
			//通过上面遍历到的位置进行摆放
			$(value).css({
				"position": "absolute",
				"top": minBoxHeight,
				"left": box.eq(minBoxIndex).position().left
			});
			boxArr[minBoxIndex] += box.eq(index).height(); //新的高度是两张图片相加
		}
	});
}


//判断是否达到符合动态加载条件的函数，符合返回为真
function scrollSide() {
	var box = $(".box");
	//得到最后一排最后加载图片所在列的高度
	var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
	//当前容器的高度
	var documentHeight = $(document).height();
	//鼠标滚动的高度
	var scrollHeight = $(window).scrollTop();
	//如果滚动和当前窗口的高度大于lastBoxHeight高度了，返回值为真
	return (lastBoxHeight < scrollHeight + documentHeight) ? true : false;
}

//执行瀑布流和加载动态图片的函数
function falls() {
	//定义动态加载图片的JSON数组
	var dataImg = {
			"data": [{"src": "beauty(101).jpg"}, {"src": "beauty(102).jpg"}, {"src": "beauty(103).jpg"}, {"src": "beauty(104).jpg"}, {"src": "beauty(105).jpg"}, {"src": "beauty(106).jpg"}, {"src": "beauty(107).jpg"}, {"src": "beauty(108).jpg"}, {"src": "beauty(109).jpg"}, {"src": "beauty(110).jpg"}, {"src": "beauty(111).jpg"}, {"src": "beauty(112).jpg"}, {"src": "beauty(113).jpg"}, {"src": "beauty(114).jpg"}, {"src": "beauty(115).jpg"}, {"src": "beauty(116).jpg"}, {"src": "beauty(117).jpg"}, {"src": "beauty(118).jpg"}, {"src": "beauty(119).jpg"}, {"src": "beauty(120).jpg"}]
			};
	imgLocation(); //执行瀑布流排列函数
	//监听鼠标滚动事件
	window.onscroll = function() {
		//如果符合要动态加载的条件，执行加载HTML元素
		if (scrollSide()) {
			$.each(dataImg.data, function(index, value) {
				var box = $("<div>").addClass("box").appendTo($("#container"));
				var content = $("<div>").addClass("content").appendTo(box);
				$("<img>").attr("src", "./images/" + $(value).attr("src")).appendTo(content);
			});
		}
		imgLocation(); //动态加载完图片后，再次进行排列
	};
};

$(document).ready(function() {
	falls();//执行瀑布流函数
	//窗口改变再次执行瀑布流函数，重新布局。
	$(window).resize(function(){
	falls();
	});
	//或者这么写：
	//	window.onresize = function() {
	//		falls();
	//	};
});
//其他思路：如果改变窗口，刷新网页
//$(window).resize(function(){
//	location.reload();
//});
