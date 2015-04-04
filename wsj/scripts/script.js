(function() {

	Mousetrap.bind("up up down down left right left right b a enter", function() {
		$("#the_truth").fadeTo(40000, 100, function(){});
	});

	$("#the_truth").click(function() {
		$(this).css("opacity", 100);
	});

})();