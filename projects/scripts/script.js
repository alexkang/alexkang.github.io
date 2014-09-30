$(document).ready(function() {
	$('.list_element').mousedown(function() {
		$(this).addClass("list_element_pressed");
	});

	$('.list_element').mouseup(function() {
		$(this).removeClass("list_element_pressed");
	});

	$('.list_element').mouseleave(function() {
		$(this).removeClass("list_element_pressed");
	});

	$('#loopboard').click(function() {
		window.location.href = "https://play.google.com/store/apps/details?id=com.alexkang.loopboard";
	});

	$('#matrix').click(function() {
		window.location.href = "https://play.google.com/store/apps/details?id=com.alexkang.x3matrixcalculator";
	});

	$('#bluechat').click(function() {
		window.location.href = "https://github.com/AlexKang/blue-chat";
	});

	$('#glamour').click(function() {
		window.location.href = "http://alexkang.github.io/glamour-beauty-supply/index.html";
	});

	$('#montageboard').click(function() {
		window.location.href = "http://alexkang.github.io/montage/";
	});

	$('#swagcribz').click(function() {
		window.location.href = "http://swagcribz.azurewebsites.net/";
	});
});