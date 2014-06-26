function hideKeyboard() {
	document.getElementById('keyboard').style.display = 'none';
}

function showKeyboard() {
	document.getElementById('keyboard').style.display = 'block';
}

function switchMode() {
	document.main.weedCheck.blur();

	if (document.getElementById('weedCheck').checked) {
		document.getElementById('header').style.color = '#1A661A';
	} else {
		document.getElementById('header').style.color = '#454545';
	}
}

function playNote(note, key) {
	var currNote;
	var isWeed = document.getElementById('weedCheck').checked;

	if (isWeed) {
		document.getElementById('backgroundSnoop').style.display = 'block';
		currNote = weedSounds[note].cloneNode();
	} else {
		document.getElementById('backgroundLeft').style.display = 'block';
		document.getElementById('backgroundRight').style.display = 'block';
		currNote = hornSounds[note].cloneNode();
	}

	if (key === 'click') {
		currNote.addEventListener('ended', function() {
			if (isWeed) {
				document.getElementById('backgroundSnoop').style.display = 'none';
			} else {
				document.getElementById('backgroundLeft').style.display = 'none';
				document.getElementById('backgroundRight').style.display = 'none';
			}
		}, false);
	} else {
		console.log(key);
		Mousetrap.bind(key, function() {
			if (isWeed) {
				document.getElementById('backgroundSnoop').style.display = 'none';

				currNote.addEventListener('timeupdate', function() {
					if (currNote.currentTime > 0.2) {
						currNote.pause();
					}
				});
			} else {
				document.getElementById('backgroundLeft').style.display = 'none';
				document.getElementById('backgroundRight').style.display = 'none';

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
		document.getElementById('intervention').style.display = 'block';

		Mousetrap.bind('ctrl', function() {
			document.getElementById('intervention').style.display = 'none';
		}, 'keyup');

		interventionFire.cloneNode().play();
	} else if (sound === 'hitmarker') {
		var hitmarkerDiv = document.createElement('div');
		var hitmarkerIcon = document.createElement('img');
		var currSound = hitmarker.cloneNode();
		var left = Math.random() * 100;
		var top = Math.random() * 100;

		hitmarkerIcon.src = 'images/hitmarker.png';
		hitmarkerIcon.style.width = '45px';
		hitmarkerDiv.style.position = 'absolute';
		hitmarkerDiv.style.left = left + '%';
		hitmarkerDiv.style.top = top + '%';

		hitmarkerDiv.appendChild(hitmarkerIcon);
		document.body.appendChild(hitmarkerDiv);

		currSound.addEventListener('ended', function() {
			document.body.removeChild(hitmarkerDiv);
		}, false);

		currSound.play();
	} else if (sound === 'smokeWeed') {
		document.getElementById('backgroundSnoop').style.display = 'block';

		var currSound = smokeWeed.cloneNode();
		currSound.addEventListener('ended', function() {
			document.getElementById('backgroundSnoop').style.display = 'none';
		}, false);

		currSound.play();
	}
}
