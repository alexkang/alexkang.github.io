$(document).ready(function() {

	$('.nav_bar_item').hover(function() {
		$(this).css('background-color', '#B65B80');
	}, function() {
		$(this).css('background-color', '#6E1237');
	});

	$('#home').click(function() {
		window.location.href = "index.html";
	});

	$('#about').click(function() {
		window.location.href = "about.html";
	});

	$('#hours').click(function() {
		window.location.href = "hours.html";
	});

	$('#contact').click(function() {
		window.location.href = "contact.html";
	});

});