window.onload = setTimeout(makeLight, 1000)

var timer;

function makeLight() {
	document.getElementById("thanks").style.color = "#E18A07";
	document.getElementById("thanks").style.fontSize = "90px";
	timer = setTimeout(makeDark, 1000);
}

function makeDark() {
	document.getElementById("thanks").style.color = "darkgray";
	document.getElementById("thanks").style.fontSize = "80px";
	timer = setTimeout(makeLight, 1000);
}