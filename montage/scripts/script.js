var MontageBoard = {
	switchMode: function() {
		$('#weedCheck').blur();

		var weedChecked = $('#weedCheck').prop('checked');
		var userAgent = navigator.userAgent.toLowerCase();

		if (weedChecked && !(userAgent.indexOf('chrome') <= -1 && userAgent.indexOf('safari') > -1)) {
			$('h1').addClass('weedTitle');
		} else {
			$('h1').removeClass('weedTitle');
		}
	},

	playNote: function(note, key) {
		var currNote;
		var isWeed = $('#weedCheck').prop('checked');
		var duration = $('#duration').slider('values', 0);

		$('#' + note).addClass('button-clicked');

		if (isWeed) {
			$('#backgroundSnoop').show();
			currNote = MontageBoard.weedSounds[note].cloneNode();
		} else {
			$('#backgroundLeft').show();
			$('#backgroundRight').show();
			currNote = MontageBoard.hornSounds[note].cloneNode();
		}

		if (key === 'click') {
			$('#' + note).mouseup(function() {
				MontageBoard.stopNoteVisual(note, isWeed);
			});
		} else {
			Mousetrap.bind(key, function() {
				MontageBoard.stopNoteVisual(note, isWeed);
			}, 'keyup');
		}

		currNote.addEventListener('timeupdate', function() {
			if (currNote.currentTime >= duration) {
				currNote.pause();
			}
		});
		currNote.play();
	},

	stopNoteVisual: function(noteId, isWeed) {
		if (isWeed) {
			$('#backgroundSnoop').hide();
		} else {
			$('#backgroundLeft').hide();
			$('#backgroundRight').hide();
		}

		$('#' + noteId).removeClass('button-clicked');
	},

	playSound: function(sound) {
		if (sound === 'intervention') {
			$('#intervention').show();

			Mousetrap.bind('ctrl', function() {
				$('#intervention').hide();
			}, 'keyup');

			Mousetrap.bind('command', function() {
				$('#intervention').hide();
			}, 'keyup');

			MontageBoard.interventionFire.currentTime = 0;
			MontageBoard.interventionFire.play();
		} else if (sound === 'hitmarker') {
			var $hitmarker = $('<img src="images/hitmarker.png" width="45px" />');
			var left = Math.random() * 100;
			var top = Math.random() * 100;

			$hitmarker.css('position', 'absolute');
			$hitmarker.css('left', left + '%');
			$hitmarker.css('top', top + '%');
			$hitmarker.css('z-index', 3);

			$('body').append($hitmarker);

			MontageBoard.hitmarker.currentTime = 0;
			MontageBoard.hitmarker.addEventListener('ended', function() {
				$hitmarker.remove();
			}, false);

			MontageBoard.hitmarker.play();
		} else if (sound === 'smokeWeed') {
			$('#backgroundSnoop').show();

			MontageBoard.smokeWeed.currentTime = 0;
			MontageBoard.smokeWeed.addEventListener('ended', function() {
				$('#backgroundSnoop').hide();
			}, false);

			MontageBoard.smokeWeed.play();
		}
	}
};

(function() {
	var audioTag = ".mp3";
	var interventionFire = "sounds/intervention_fire";
	var smokeWeed = "sounds/smoke_weed";
	var hitmarker = "sounds/hitmarker";
	var userAgent = navigator.userAgent.toLowerCase();

	if (userAgent.indexOf('firefox') > -1) {
	     hitmarker = "sounds/hitmarker_alt";
	     audioTag = "" + audioTag;
	}

	if (userAgent.indexOf('chrome') <= -1 && userAgent.indexOf('safari') > -1) {
		alert("Consider switching to a different browser as HTML5 audio has some latency issues with Safari.");
	}

	MontageBoard.interventionFire = new Audio(interventionFire + audioTag);
	MontageBoard.smokeWeed = new Audio(smokeWeed + audioTag);
	MontageBoard.hitmarker = new Audio(hitmarker + audioTag);

	MontageBoard.hornSounds = [
		new Audio("sounds/horn/horn_c" + audioTag),
		new Audio("sounds/horn/horn_c_sharp" + audioTag),
		new Audio("sounds/horn/horn_d" + audioTag),
		new Audio("sounds/horn/horn_d_sharp" + audioTag),
		new Audio("sounds/horn/horn_e" + audioTag),
		new Audio("sounds/horn/horn_f" + audioTag),
		new Audio("sounds/horn/horn_f_sharp" + audioTag),
		new Audio("sounds/horn/horn_g" + audioTag),
		new Audio("sounds/horn/horn_g_sharp" + audioTag),
		new Audio("sounds/horn/horn_a" + audioTag),
		new Audio("sounds/horn/horn_a_sharp" + audioTag),
		new Audio("sounds/horn/horn_b" + audioTag),
		new Audio("sounds/horn/horn_c_high" + audioTag)
	];
	MontageBoard.weedSounds = [
		new Audio("sounds/weed/weed_c" + audioTag),
		new Audio("sounds/weed/weed_c_sharp" + audioTag),
		new Audio("sounds/weed/weed_d" + audioTag),
		new Audio("sounds/weed/weed_d_sharp" + audioTag),
		new Audio("sounds/weed/weed_e" + audioTag),
		new Audio("sounds/weed/weed_f" + audioTag),
		new Audio("sounds/weed/weed_f_sharp" + audioTag),
		new Audio("sounds/weed/weed_g" + audioTag),
		new Audio("sounds/weed/weed_g_sharp" + audioTag),
		new Audio("sounds/weed/weed_a" + audioTag),
		new Audio("sounds/weed/weed_a_sharp" + audioTag),
		new Audio("sounds/weed/weed_b" + audioTag),
		new Audio("sounds/weed/weed_c_high" + audioTag)
	];

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
			MontageBoard.switchMode();
		});

		$('#duration').slider({
			min: 0.00, 
			max: 1.00, 
			step: 0.01, 
			value: 0.25,
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
			MontageBoard.playNote(note, 'click');
		});

		$('#keyboard').fadeIn(1000);
		$('#helpBackground').fadeIn(1000);
	});
})();
