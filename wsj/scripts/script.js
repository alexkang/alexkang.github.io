(function() {

	Mousetrap.bind("up up down down left right left right b a enter", function() {
		$("#the_truth").fadeTo(40000, 100, function(){});
	});

})();