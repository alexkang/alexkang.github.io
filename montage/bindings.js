Mousetrap.bind('space', function() {
	var curr = document.getElementById('weedCheck').checked;
	document.getElementById('weedCheck').checked = !curr;

	switchMode();
});

Mousetrap.bind('ctrl', function() {
	playSound('intervention');
});

Mousetrap.bind('shift', function() {
	playSound('hitmarker');
});

Mousetrap.bind('s', function() {
	playNote(0, 's');
});

Mousetrap.bind('e', function() {
	playNote(1, 'e');
});

Mousetrap.bind('d', function() {
	playNote(2, 'd');
});

Mousetrap.bind('r', function() {
	playNote(3, 'r');
});

Mousetrap.bind('f', function() {
	playNote(4, 'f');
});

Mousetrap.bind('g', function() {
	playNote(5, 'g');
});

Mousetrap.bind('y', function() {
	playNote(6, 'y');
});

Mousetrap.bind('h', function() {
	playNote(7, 'h');
});

Mousetrap.bind('u', function() {
	playNote(8, 'u');
});

Mousetrap.bind('j', function() {
	playNote(9, 'j');
});

Mousetrap.bind('i', function() {
	playNote(10, 'i');
});

Mousetrap.bind('k', function() {
	playNote(11, 'k');
});

Mousetrap.bind('l', function() {
	playNote(12, 'l');
});