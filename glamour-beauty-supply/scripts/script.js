var offset;

function updateNavBar() {
	var distanceFromTop = $(window).scrollTop();

	if (distanceFromTop >= offset) {
		$('.nav_bar').css({ 'position': 'fixed', 'top': 0 });
		$('body').css({ 'padding-top': 50 });
	} else {
		$('.nav_bar').css({ 'position': 'relative' });
		$('body').css({ 'padding-top': 0 });
	}
}

$(document).ready(function() {

	offset = $('.nav_bar').offset().top;

	$(window).scroll(function() {
		updateNavBar();
	});

	$('.nav_bar_item').hover(function() {
		$(this).css('background-color', '#B65B80');
	}, function() {
		$(this).css('background-color', '#6E1237');
	});

	$('#home').click(function() {
		window.location.href = "index.html";
	});

	$('#hours').click(function() {
		window.location.href = "hours.html";
	});

	$('#contact').click(function() {
		window.location.href = "contact.html";
	});

});