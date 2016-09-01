(function() {
	var WRITE_DELAY = 250;
	var DELETE_DELAY = 100;
	var THING_DURATION = 1500;
	var BLANK_DURATION = 500;
	var PREFIX = "internet of ";
	var THINGS = ["Apollo", "things", "toasters", "light bulbs", "rice cookers", "coffee makers", "toilets",
				  "toothbrushes", "printers", "vacuum cleaners", "speakers", "cameras", "doors",
				  "pencils", "couches"];

	function writeThing(thing, currIndex, onCompletion) {
		if (currIndex > thing.length) {
			onCompletion();
			return;
		}
		$(".header-text").html(PREFIX + thing.substring(0, currIndex));
		setTimeout(function() { writeThing(thing, currIndex + 1, onCompletion) }, WRITE_DELAY);
	}

	function deleteThing(thing, currIndex, onCompletion) {
		if (currIndex == -1) {
			onCompletion();
			return;
		}
		$(".header-text").html(PREFIX + thing.substring(0, currIndex));
		setTimeout(function() { deleteThing(thing, currIndex - 1, onCompletion) }, DELETE_DELAY);
	}

	function onThingCompleted(thingIndex) {
		return function() {
			setTimeout(function() {
				var thing = THINGS[thingIndex];
				deleteThing(thing, thing.length, onThingDeleted(thingIndex))
			}, THING_DURATION);
		}
	}

	function onThingDeleted(thingIndex) {
		return function() {
			setTimeout(function() {
				var nextIndex = (thingIndex + 1) % THINGS.length;
				writeThing(THINGS[nextIndex], 0, onThingCompleted(nextIndex));
			}, BLANK_DURATION);
		}
	}

	$(document).ready(function() {
		writeThing(THINGS[0], 0, onThingCompleted(0));
	});
})();
