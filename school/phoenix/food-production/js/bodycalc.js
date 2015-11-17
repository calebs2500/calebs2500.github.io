var headerHeight = document.getElementById("header").clientHeight;
var checkHeader;

window.onload = setTimeout(adjustHeader);

function adjustHeader() {
	headerHeight = document.getElementById("header").clientHeight;
	document.getElementById("contentWrapper").style.height = "calc(100vh - " + headerHeight + "px)";
	checkHeader = setTimeout(adjustHeader,500);
}