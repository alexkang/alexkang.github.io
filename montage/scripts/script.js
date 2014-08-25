function switchMode() {
	$('#weedCheck').blur();

	var weedChecked = $('#weedCheck').prop('checked');

	if (weedChecked) {
		$('h1').addClass('weedTitle');
	} else {
		$('h1').removeClass('weedTitle');
	}
}

function playNote(note, key) {
	var currNote;
	var isWeed = $('#weedCheck').prop('checked');

	$('#' + note).addClass('button-clicked');

	if (isWeed) {
		$('#backgroundSnoop').show();
		currNote = weedSounds[note]
	} else {
		$('#backgroundLeft').show();
		$('#backgroundRight').show();
		currNote = hornSounds[note]
	}

	currNote.currentTime = 0;

	if (key === 'click') {
		currNote.addEventListener('ended', function() {
			if (isWeed) {
				$('#backgroundSnoop').hide();
			} else {
				$('#backgroundLeft').hide();
				$('#backgroundRight').hide();
			}

			$('#' + note).removeClass('button-clicked');
		}, false);

		$('button').mouseup(function() {
			stopNote(note, currNote, isWeed);
		});
	} else {
		Mousetrap.bind(key, function() {
			stopNote(note, currNote, isWeed);
		}, 'keyup');
	}

	currNote.play();
}

function stopNote(noteId, noteAudio, isWeed) {
	var duration = $('#duration').slider('values', 0);

	if (isWeed) {
		$('#backgroundSnoop').hide();

		noteAudio.addEventListener('timeupdate', function() {
			if (noteAudio.currentTime > duration) {
				noteAudio.pause();
			}
		});
	} else {
		$('#backgroundLeft').hide();
		$('#backgroundRight').hide();

		noteAudio.addEventListener('timeupdate', function() {
			if (noteAudio.currentTime > duration) {
				noteAudio.pause();
			}
		});
	}

	$('#' + noteId).removeClass('button-clicked');
}

function playSound(sound) {
	if (sound === 'intervention') {
		$('#intervention').show();

		Mousetrap.bind('ctrl', function() {
			$('#intervention').hide();
		}, 'keyup');

		interventionFire.currentTime = 0;
		interventionFire.play();
	} else if (sound === 'hitmarker') {
		var $hitmarker = $('<img src="images/hitmarker.png" width="45px" />');
		var left = Math.random() * 100;
		var top = Math.random() * 100;

		$hitmarker.css('position', 'absolute');
		$hitmarker.css('left', left + '%');
		$hitmarker.css('top', top + '%');
		$hitmarker.css('z-index', 3);

		$('body').append($hitmarker);

		hitmarker.currentTime = 0;
		hitmarker.addEventListener('ended', function() {
			$hitmarker.remove();
		}, false);

		hitmarker.play();
	} else if (sound === 'smokeWeed') {
		$('#backgroundSnoop').show();

		smokeWeed.currentTime = 0;
		smokeWeed.addEventListener('ended', function() {
			$('#backgroundSnoop').hide();
		}, false);

		smokeWeed.play();
	}
}

$(document).ready(function() {
	$('#keyboard').click(function() {
		$(this).fadeOut(500);
		$('#helpBackground').fadeOut(500);
	});

	$('#help').click(function() {
		$('#keyboard').fadeIn(500);
		$('#helpBackground').fadeIn(500);
	});

	$('#weedCheck').change(function() {
		$('#weedCheck').trigger('blur');
		switchMode();
	});

	$('#duration').slider({
		min: 0.00, 
		max: 1.00, 
		step: 0.01, 
		value: 0.40,
		slide: function(event, ui) {
			var value = $('#duration').slider('values', 0);
			if (value.toString().length == 3) {
				$('#durationLabel').html(value + '0');
			} else if (value.toString().length == 1) {
				$('#durationLabel').html(value + '.00');
			} else {
				$('#durationLabel').html(value);
			}
		}
	});

	$('button').mousedown(function() {
		var note = parseInt($(this).attr('id'));
		playNote(note, 'click');
	});

	$('#keyboard').fadeIn(1000);
	$('#helpBackground').fadeIn(1000);
});
