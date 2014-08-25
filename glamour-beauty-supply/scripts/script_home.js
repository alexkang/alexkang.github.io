function resizeElements() {
	var leftoverWidth = ($(window).width() - 600);
	var height = ($(window).height());

	$('#slideshow').css('left', leftoverWidth / 2);
	$('#info_box_left').css('width', (leftoverWidth / 2) - 50);
	$('#info_box_right').css('width', (leftoverWidth / 2) - 50);
	// $('h3').css('padding-top')
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