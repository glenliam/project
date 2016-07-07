var data = ['a', 'x', 'b', 'd', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];
var result = {}; //用来存放结果的数据结构
var maxWord = ''; //用来存放出现次数最多的字母
var maxCount = 0; //用来存放这个字母出现的次数

//将数组转换为js数据结构："a":[1,6,11]，其中方括号中的个数是字母在原数组出现的个数，方括号中的数字为对应原数组的位置
for (var i = 0; i <= data.length; i++) {
	var val = data[i];
	if (!result[val]) {
		result[val] = [];
	}
	result[val].push(i + 1); //将字母在原数组的位置改变成1~11自然数

	//找到次数最多的字母，数组长度就是出现的次数
	if (result[val].length > maxCount) {
		maxWord = data[i];
		maxCount = result[val].length;
	}
}
		document.write('出现次数最多的字母是：' + maxWord);
		document.write('<br>出现次数是：' + maxCount);
		document.write('<br>出现在原数组的位置是：' + result[maxWord]);
