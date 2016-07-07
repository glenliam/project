$(document).ready(function() {
	jQuery.focusblurmenu = function(focusdom, focuswidthnew, animatetime) {
		var focusblurmenuid = $(focusdom);
		var defval = focusblurmenuid.val();
		var defwidth = focusblurmenuid.width();
		focusblurmenuid.focus(function() {
			var thisval = $(this).val();
			if (thisval == defval) {
				$(this).val("");
				$(this).animate({
					width: "+" + focuswidthnew
				}, focuswidthnew).addClass("searchkeyfocus");
			}
		});
		focusblurmenuid.blur(function() {
			var thisval = $(this).val();
			if (thisval == "") {
				$(this).val(defval);
			}
			$(this).animate({
				width: "+" + defwidth
			}, focuswidthnew).removeClass("searchkeyfocus");
		});

	};
	$.focusblurmenu("#searchkey", "150px", "30");
});