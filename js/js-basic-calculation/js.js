function FunOut() {
	var a = document.form1.aa.value;
	if (a && !isNaN(a)) {
		if (a > 100) {
			document.form1.result.value = '不能超过100';
		} else if (a < 0) {
			document.form1.result.value = '不能小于0';
		} else {
			if (a == 100) {
				document.form1.result.value = '该生是1等生';
			} else {
				a = 10 - parseInt(a / 10);
				document.form1.result.value = '该生是' + a + '等生';
			}
		}
	} else {
		document.form1.result.value = '输入错误';
	}
}

function FunZero() {
	document.form1.result.value = '';
	document.form1.aa.value = '';
}