function resizeSlideShow() {
	var leftoverSpace = ($(window).width() - 600) / 2;

	$('#slideshow').css('left', leftoverSpace);
	$('#left_bullets').css('width', leftoverSpace - 80);
	$('#right_bullets').css('width', leftoverSpace - 80);
}

$(document).ready(function() {
	resizeSlideShow();

	$(window).resize(function() {
		resizeSlideShow();
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