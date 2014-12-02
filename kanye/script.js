function updateWindow() {
	var midpoint = $("#first_card").offset().top + $("#first_card").height() / 2;

	$(".banner_holder").css("height", midpoint);
}

$(document).ready(function() {
	$(".song").each(function(i) {
		var $song = $(this);
		setTimeout(function() {
			$song.animate({ marginLeft: "4%", marginRight: "4%", opacity: "1" });
		}, 160 * i);
	});

	$(window).resize(updateWindow());
});