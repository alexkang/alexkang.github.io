function resizeElements() {
	var width = $('#map_canvas').width();

	$('#map_canvas').css('height', (width / 16) * 9);
}

$(document).ready(function () {
	resizeElements();
	$(window).resize(function() {
		resizeElements();
	});

	var coords = new google.maps.LatLng(38.120242135542604, -122.25617051124573);
	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
        center: coords,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	var map = new google.maps.Map(map_canvas, map_options);
	var marker = new google.maps.Marker({
		position: coords,
		map: map,
		title: "Glamour Beauty Supply"
	});
});