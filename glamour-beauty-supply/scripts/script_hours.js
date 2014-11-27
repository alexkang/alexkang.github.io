function isOpen() {
	var date = new Date();
	var day = date.getDay();
	var hour = date.getHours();
	var minute = date.getMinutes();

	if (day == 0) {
		if (hour < 9 || hour >= 18) {
			return false;
		} else if (hour == 9 && minute >= 30) {
			return false;
		}
	} else if (day == 4 || day == 5) {
		if (hour < 8 || hour > 20) {
			return false;
		} else if (hour == 20 && minute >= 30) {
			return false;
		}
	} else {
		if (hour < 8 || hour > 18) {
			return false;
		} else if (hour == 8 && minute <= 30) {
			return false;
		}
	}

	return true;
}

$(document).ready(function () {

	if (isOpen()) {
		$('#open_sign').show();
		$('#closed_sign').hide();
	} else {
		$('#open_sign').hide();
		$('#closed_sign').show();	
	}

});