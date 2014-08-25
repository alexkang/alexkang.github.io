$(document).ready(function () {
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