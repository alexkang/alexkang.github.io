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
	if (isWeed) {
		$('#backgroundSnoop').hide();

		noteAudio.addEventListener('timeupdate', function() {
			if (noteAudio.currentTime > 0.2) {
				noteAudio.pause();
			}
		});
	} else {
		$('#backgroundLeft').hide();
		$('#backgroundRight').hide();

		noteAudio.addEventListener('timeupdate', function() {
			if (noteAudio.currentTime > 0.5) {
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

		interventionFire.cloneNode().play();
	} else if (sound === 'hitmarker') {
		var $hitmarker = $('<img src="images/hitmarker.png" width="45px" />');
		var currSound = hitmarker.cloneNode();
		var left = Math.random() * 100;
		var top = Math.random() * 100;

		$hitmarker.css('position', 'absolute');
		$hitmarker.css('left', left + '%');
		$hitmarker.css('top', top + '%');
		$hitmarker.css('z-index', 3);

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
		$(this).fadeOut(500);
		$('#helpBackground').fadeOut(500);
	});

	$('#help').click(function() {
		$('#keyboard').fadeIn(500);
		$('#helpBackground').fadeIn(500);
	});

	$('button').mousedown(function() {
		var note = parseInt($(this).attr('id'));
		playNote(note, 'click');
	});

	$('#keyboard').fadeIn(1000);
	$('#helpBackground').fadeIn(1000);
});
