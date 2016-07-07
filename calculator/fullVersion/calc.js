//定义全局变量
var sNum1 = ''; //点击输入的数值
var Opr = ''; //点击输入的运算符
var oprAlone = ''; //点击输入的运算符(复杂数学运算)
var numClear=false; //是否需要清除输入框中已有的内容

//执行运算部分
function calc(iNum1, iNum2, Opr) {
	var iResult = 0;

	//判断点击的运算符再进行相应的运算
	switch (Opr) {
		case 'x':
			//iResult = (iNum1 * 10) * (iNum2 * 10) / 100;//解决JS运算BUG
			iResult = parseFloat((iNum1 * iNum2).toFixed(12));
			break;
		case '+':
			iResult = iNum1 + iNum2;
			break;
		case '-':
			iResult = iNum1 - iNum2;
			break;
		case '÷':
			if(iNum2 == 0)
			{
				alert('输入错误！');
				break;
			}
			else{
				iResult = parseFloat((iNum1 / iNum2).toFixed(12));
				break;
			}
		case '%':
			iResult = iNum1 % iNum2;
			break;
			
		default:
			iResult = iNum2;
	}

	return iResult;
}

//执行运算部分，一个变量的数学函数计算
function calcAlone(iNumAlone1, oprAlone) {
	var iResultAlone = 0;

	//判断点击的运算符再进行相应的运算
	switch (oprAlone) {
		case 'x^2':
			iResultAlone = Math.pow(iNumAlone1,2);
			break;
		case 'x^3':
			iResultAlone = Math.pow(iNumAlone1,3);
			break;
		case '1/x':
			if(iNumAlone1 == 0)
			{
				alert('输入错误！');
				break;
			}
			else{
			iResultAlone = 1 / iNumAlone1;
			break;
			}
		case 'abs(x)':
			iResultAlone = Math.abs(iNumAlone1);
			break;
		case 'cos(x)':
			iResultAlone = Math.cos((iNumAlone1*Math.PI)/180);
			break;
		case 'exp(x)':
			iResultAlone = Math.exp(iNumAlone1);
			break;
		case 'ln(x)':
			if(iNumAlone1 == 0)
			{
				alert('输入错误！');
				break;
			}
			else{
			iResultAlone = Math.log(iNumAlone1);
			break;
			}
		case 'sqrt(x)':
			iResultAlone = Math.sqrt(iNumAlone1);
			break;
		case 'sin(x)':
			iResultAlone = Math.sin((iNumAlone1*Math.PI)/180);
			break;
		case 'round(x)':
			iResultAlone = Math.round(iNumAlone1);
			break;
		case 'floor(x)':
			iResultAlone = Math.floor(iNumAlone1);
			break;
		case 'tan(x)':
			iResultAlone = Math.tan((iNumAlone1*Math.PI)/180);
			break;
			
		default:
			iResultAlone = iNumAlone1;
	}

	return iResultAlone;
}

//输入输出函数
function sInput() {
	var inputValue = document.getElementById('inputValue'); //输入框显示的数值
	var sButton = this.innerHTML; //点击的是哪部分的li内容
	switch (sButton) {
		case '+':
		case '-':
		case 'x':
		case '÷':
		case '%':
			numClear=true;
			//计算结果，可以不断继续往下运算
			if (sNum1.length != 0) {
				inputValue.value = calc(parseFloat(sNum1), parseFloat(inputValue.value), Opr);
			}
			Opr = sButton; //运算出一个结果之后，再点击运算符可以继续将运算符导入运算变量
			sNum1 = inputValue.value; //再上个生成的结果基础上，进行下次运算
			break;
		case 'x^2':
		case 'x^3':
		case '1/x':
		case 'abs(x)':
		case 'cos(x)':
		case 'exp(x)':
		case 'ln(x)':
		case 'sqrt(x)':
		case 'sin(x)':
		case 'round(x)':
		case 'tan(x)':
		case 'floor(x)':
			//计算结果，运算完成后将运算符置空，不再重复运算
			oprAlone = sButton;//将运算符给变量赋值
			inputValue.value = calcAlone(parseFloat(inputValue.value), oprAlone);
			numClear=true;
			break;
		case '.':
			//如果输入的是小数点，进行数字连接
			inputValue.value =  inputValue.value + '.';
			numClear=false;
			break;
		case '=':
			//运算结果，运算完成后将运算符置空，不再重复运算
			inputValue.value = calc(parseFloat(sNum1), parseFloat(inputValue.value), Opr);
			Opr = ''; //运算符清空
			numClear=true;
			break;
		case '清空':
			//清空输入值、最终输出数值和运算符
			inputValue.value = '0';
			sNum1 = '';
			Opr = '';
			break;
		default:
			//判断numClear状态
			if(numClear)
			{
				inputValue.value=parseFloat(sButton); //输入的值为判断进行哪种运算
				numClear=false;
			}
			else
			{
				inputValue.value=parseFloat(inputValue.value+sButton); //输入多位的数字
			}
			break;
	}
}
	//定义两个移动鼠标改变按钮样式的函数
	function classActive() {
		this.className = 'hover';
	}

	function classRemove() {
		this.className = '';
	}
	
//兼容IE和非IE浏览器的事件绑定的函数声明
function addEvent(ele, event_name, func) {
	if (window.attachEvent) {
		ele.attachEvent(event_name, func);
	} else {
		event_name = event_name.replace(/^on/, "");
		ele.addEventListener(event_name, func, false); //默认事件是冒泡
	}
}

//进行事件绑定
window.onload = function() {
	var objLi = document.getElementsByTagName('li');//获取li部分的文字内容
	var i = 0;
	//给每一个li绑定事件
	for (i = 0; i < objLi.length; i++) {
		addEvent(objLi[i], 'onmousedown', sInput);
		addEvent(objLi[i], 'onmouseover', classActive);
		addEvent(objLi[i], 'onmouseout', classRemove);
	}
};