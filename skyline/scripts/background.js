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

var lat;
var lng;
var usingAstronomy;

function userLocation() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			lat = position.coords.latitude;
			lng = position.coords.longitude;
			getAstronomy();
		});
	}	else {
		console.log("Location information is unavailable");
		usingAstronomy = "false";
		showMessage("m2");
	};
}

var apiKey = "820b6230228f3675";
var riseHour;
var riseMin;
var setHour;
var setMin;

function getAstronomy() {	
	$.get("https://api.wunderground.com/api/" + apiKey + "/astronomy/lang:EN/q/" + lat + "," + lng + ".json", function(data) {
		riseHour = (data.moon_phase.sunrise.hour);
		riseMin = (data.moon_phase.sunrise.minute);
		setHour = (data.moon_phase.sunset.hour);
		setMin = (data.moon_phase.sunset.minute);
	});
	
	//$.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyAyjz-_gUf8lSAY9Mj6LzD6jDh6M90FX2o", function(data) {
	//	userLocality = (data.results[0].address_components[5].long_name);
	//});
	//GOOGLE GEOCODE API KEY == AIzaSyAyjz-_gUf8lSAY9Mj6LzD6jDh6M90FX2o
}

var hour24;

function timeConvert() {
	if((ampm == " AM" && hour != 12) || (ampm == " PM" && hour == 12)) {
		hour24 = hour;
	}	else if(ampm == " AM" && hour == 12) {
			hour24 = 0;
		}	else {
			hour24 = hour + 12;
			}
}

function checkNight() {
	if(typeof lat === "undefined") {
			usingAstronomy = "false";
			//alertError3();
		}	else {
				usingAstronomy = "true";
			};
			
	if(usingAstronomy == "true") {
		if((hour24 == riseHour && min >= riseMin) || (hour24 > riseHour && hour24 < setHour) || (hour24 == setHour && min < setMin)) {
			setDay();
		}	else {
				setNight();
			}
	}	else {
			if(hour24 > 18 || hour24 < 7) {
				setNight();
			}	else {
					setDay();
				}
		}
}

var error3;

function alertError3() {
	if(typeof error3 === "undefined") {
		showMessage("m3");
		error3 = "alerted";
	}
}

function setNight() {
	$("body").css("background", "#111155");
	$(".clouds").css("opacity", "0.3");
	$(".layer.night").css("opacity", "1");
	$("#clockbox").css("color", "white");
	$(".search").css("border-bottom", "solid 5px white");
	$(".searchIcon.night").css("visibility", "visible");
	$(".searchInput").css("color", "white");
}

function setDay() {
	$("body").css("background", "lightskyblue");
	$(".clouds").css("opacity", "1");
	$(".layer.night").css("opacity", "0");
	$("#clockbox").css("color", "black");
	$(".search").css("border-bottom", "solid 5px black");
	$(".searchIcon.night").css("visibility", "hidden");
	$(".searchInput").css("color", "black");
}