//window.onload = centerLayers;
window.onresize = centerLayers;

var layerWidth;
var viewportWidth;
var defaultLeft;

function centerLayers() {
	layerWidth = $(".l1").width();
	viewportWidth = window.innerWidth;
	defaultLeft = ((layerWidth - viewportWidth) / 2) * -1;
	$(".layer").css("left", defaultLeft + "px");
}

function move(column, distance) {
	if(column > 5) {
		$(".l1").css("left", defaultLeft + distance + "px");
		$(".l2").css("left", defaultLeft - distance + "px");
	}	else {
			$(".l1").css("left", defaultLeft - distance + "px");
			$(".l2").css("left", defaultLeft + distance + "px");
		};
}

function checkNight() {
	if((ampm == " PM" && hour > 8 && hour != 12) || (ampm == " AM" && (hour < 7 || hour == 12))) {
		$("body").css("background", "#111155");
		$(".clouds").css("opacity", "0.3");
		$(".layer.night").css("opacity", "1");
		$("#clockbox").css("color", "white");
		$(".search").css("border-bottom", "solid 5px white");
		$(".searchIcon.night").css("visibility", "visible");
		$(".searchInput").css("color", "white");
	}	else {
			$("body").css("background", "lightskyblue");
			$(".clouds").css("opacity", "1");
			$(".layer.night").css("opacity", "0");
			$("#clockbox").css("color", "black");
			$(".search").css("border-bottom", "solid 5px black");
			$(".searchIcon.night").css("visibility", "hidden");
			$(".searchInput").css("color", "black");
		}
}