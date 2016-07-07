var colorRememberLS = ''; //定义localstorage的全局变量
var colorRememberCK = ''; //定义cookie的全局变量
//网页加载时执行
window.onload = function() {
	var colorRememberLSValue = localStorage.getItem(colorRememberLS);
	var colorRememberCKValue = getCookie(colorRememberCK);
	//如果localstorage的全局变量有值，改变颜色函数使用localstorage中的数值，否则使用cookie中的数值
	if (colorRememberLSValue) {
		changColor(colorRememberLSValue);
	} 
	else {
		changColor(colorRememberCKValue);
	}
};
//改变网页元素的颜色
function changColor(colorValue) {
	document.getElementById('form-box-key').style.color = colorValue;
	document.getElementById('more').style.color = colorValue;
	document.getElementById('menu-first').style.color = colorValue;
	document.getElementById('menu-first').style.background = colorValue;
	document.getElementById('footer').style.background = colorValue;
	document.getElementById('ulmenus').style.borderTopColor = colorValue;
	if (colorValue == '#0aa770') //判断是不是默认的绿色，如果是的话，content-main部分是白色背景
	{
		document.getElementById('content-Main').style.background = '#fcfcfc';
	} else {
		document.getElementById('content-Main').style.background = colorValue;
	}
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