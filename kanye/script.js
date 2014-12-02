function updateWindow() {
	var midpoint = $("#first_card").offset().top + $("#first_card").height() / 2;

	$(".banner_holder").css("height", midpoint);
}

$(document).ready(function() {
	$(window).resize(updateWindow());
});