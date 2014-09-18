Mousetrap.bind('`', function() {
	var weedChecked = $('#weedCheck').prop('checked');
	$('#weedCheck').prop('checked', !weedChecked);

	MontageBoard.switchMode();
});

Mousetrap.bind('ctrl', function() {
	MontageBoard.playSound('intervention');
});

Mousetrap.bind('command', function() {
	MontageBoard.playSound('intervention');
});

Mousetrap.bind('shift', function() {
	MontageBoard.playSound('hitmarker');
});

Mousetrap.bind('space', function() {
	MontageBoard.playSound('smokeWeed');
});

Mousetrap.bind('s', function() {
	MontageBoard.playNote(0, 's');
});

Mousetrap.bind('e', function() {
	MontageBoard.playNote(1, 'e');
});

Mousetrap.bind('d', function() {
	MontageBoard.playNote(2, 'd');
});

Mousetrap.bind('r', function() {
	MontageBoard.playNote(3, 'r');
});

Mousetrap.bind('f', function() {
	MontageBoard.playNote(4, 'f');
});

Mousetrap.bind('g', function() {
	MontageBoard.playNote(5, 'g');
});

Mousetrap.bind('y', function() {
	MontageBoard.playNote(6, 'y');
});

Mousetrap.bind('h', function() {
	MontageBoard.playNote(7, 'h');
});

Mousetrap.bind('u', function() {
	MontageBoard.playNote(8, 'u');
});

Mousetrap.bind('j', function() {
	MontageBoard.playNote(9, 'j');
});

Mousetrap.bind('i', function() {
	MontageBoard.playNote(10, 'i');
});

Mousetrap.bind('k', function() {
	MontageBoard.playNote(11, 'k');
});

Mousetrap.bind('l', function() {
	MontageBoard.playNote(12, 'l');
});