window.onload = start;

function start() {
	GetClock();
	setInterval(GetClock,1000);
	setInterval(checkNight,1000);
	centerLayers();
	idle();
}