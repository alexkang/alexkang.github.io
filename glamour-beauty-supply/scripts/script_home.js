function resizeElements() {
	var width = $('#slideshow').width();
	var leftoverWidth = $(window).width() - width;

	$('#slideshow').css('left', leftoverWidth / 2);
	$('#info_box_left').css('width', (leftoverWidth / 2) - 50);
	$('#info_box_right').css('width', (leftoverWidth / 2) - 50);

	$('#slideshow').css('height', (width / 16) * 9);
	$('#slides').css('height', (width / 16) * 9);

	$('.info_box').css('height', (width / 16) * 9 - 120);

	$('body').css('position', 'absolute');
}

$(document).ready(function() {
	resizeElements();

	$(window).resize(function() {
		resizeElements();
	});

	var options = {
		$AutoPlay: true, 
		$ArrowKeyNavigation: true,
		$ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2
            }
        };
        
	var jssor_slider1 = new $JssorSlider$('slideshow', options);
});