function switchMode() {
	$('#weedCheck').blur();

	var weedChecked = $('#weedCheck').prop('checked');

	if (weedChecked) {
		$('h1').css('color', '#1A661A');
	} else {
		$('h1').css('color', '#454545');
	}
}

function playNote(note, key) {
	var currNote;
	var isWeed = $('#weedCheck').prop('checked');

	if (isWeed) {
		$('#backgroundSnoop').show();
		currNote = weedSounds[note].cloneNode();
	} else {
		$('#backgroundLeft').show();
		$('#backgroundRight').show();
		currNote = hornSounds[note].cloneNode();
	}

	if (key === 'click') {
		currNote.addEventListener('ended', function() {
			if (isWeed) {
				$('#backgroundSnoop').hide();
			} else {
				$('#backgroundLeft').hide();
				$('#backgroundRight').hide();
			}
		}, false);
	} else {
		Mousetrap.bind(key, function() {
			if (isWeed) {
				$('#backgroundSnoop').hide();

				currNote.addEventListener('timeupdate', function() {
					if (currNote.currentTime > 0.2) {
						currNote.pause();
					}
				});
			} else {
				$('#backgroundLeft').hide();
				$('#backgroundRight').hide();

				currNote.addEventListener('timeupdate', function() {
					if (currNote.currentTime > 0.5) {
						currNote.pause();
					}
				});
			}
		}, 'keyup');
	}

	currNote.play();
}

function playSound(sound) {
	if (sound === 'intervention') {
		$('#intervention').show();

		Mousetrap.bind('ctrl', function() {
			$('#intervention').hide();
		}, 'keyup');

		interventionFire.cloneNode().play();
	} else if (sound === 'hitmarker') {
		var $hitmarker = $('<img src="images/hitmarker.png" width="45px" />');
		var currSound = hitmarker.cloneNode();
		var left = Math.random() * 100;
		var top = Math.random() * 100;

		$hitmarker.css('position', 'absolute');
		$hitmarker.css('left', left + '%');
		$hitmarker.css('top', top + '%');

		$('body').append($hitmarker);

		currSound.addEventListener('ended', function() {
			$hitmarker.remove();
		}, false);

		currSound.play();
	} else if (sound === 'smokeWeed') {
		$('#backgroundSnoop').show();

		var currSound = smokeWeed.cloneNode();
		currSound.addEventListener('ended', function() {
			$('#backgroundSnoop').hide();
		}, false);

		currSound.play();
	}
}

$(document).ready(function() {
	$('#keyboard').click(function() {
		$(this).fadeOut(300);
	});

	$('#help').click(function() {
		$('#keyboard').fadeIn(300);
	})
});
