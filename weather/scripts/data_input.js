var currentTempC;
var CurrentTempF;

$.get("http://api.wunderground.com/api/820b6230228f3675/conditions/forecast/lang:EN/q/" + country + "/" + city + ".json", function(data) {
	currentTempC = (data.current_observation.temp_c);
	currentTempF = (data.current_observation.temp_f);
	if(tempScale == "c") {
		$(".current").html(Math.round(currentTempC));
	}	else {
		$(".current").html(Math.round(currentTempF));
	}
});