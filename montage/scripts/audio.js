var interventionFire = new Audio("sounds/intervention_fire.ogg");
var smokeWeed = new Audio("sounds/smoke_weed.ogg");
var hitmarker;
var userAgent = navigator.userAgent.toLowerCase();

if (userAgent.indexOf('firefox') < 0) {
     hitmarker = new Audio("sounds/hitmarker.ogg");
} else {
	hitmarker = new Audio("sounds/hitmarker_alt.ogg");
}

if (userAgent.indexOf('chrome') <= -1 && userAgent.indexOf('safari') > -1) {
	alert("Consider switching to a different browser as HTML5 audio has some latency issues with Safari.");
}

var hornSounds = 
	[
	new Audio("sounds/horn/horn_c.ogg"),
	new Audio("sounds/horn/horn_c_sharp.ogg"),
	new Audio("sounds/horn/horn_d.ogg"),
	new Audio("sounds/horn/horn_d_sharp.ogg"),
	new Audio("sounds/horn/horn_e.ogg"),
	new Audio("sounds/horn/horn_f.ogg"),
	new Audio("sounds/horn/horn_f_sharp.ogg"),
	new Audio("sounds/horn/horn_g.ogg"),
	new Audio("sounds/horn/horn_g_sharp.ogg"),
	new Audio("sounds/horn/horn_a.ogg"),
	new Audio("sounds/horn/horn_a_sharp.ogg"),
	new Audio("sounds/horn/horn_b.ogg"),
	new Audio("sounds/horn/horn_c_high.ogg")
	];

var weedSounds = 
	[
	new Audio("sounds/weed/weed_c.ogg"),
	new Audio("sounds/weed/weed_c_sharp.ogg"),
	new Audio("sounds/weed/weed_d.ogg"),
	new Audio("sounds/weed/weed_d_sharp.ogg"),
	new Audio("sounds/weed/weed_e.ogg"),
	new Audio("sounds/weed/weed_f.ogg"),
	new Audio("sounds/weed/weed_f_sharp.ogg"),
	new Audio("sounds/weed/weed_g.ogg"),
	new Audio("sounds/weed/weed_g_sharp.ogg"),
	new Audio("sounds/weed/weed_a.ogg"),
	new Audio("sounds/weed/weed_a_sharp.ogg"),
	new Audio("sounds/weed/weed_b.ogg"),
	new Audio("sounds/weed/weed_c_high.ogg")
	];