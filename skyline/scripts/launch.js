window.onload = start;

function start() {
	GetClock();
	setInterval(GetClock,1000);
	setInterval(checkNight,1000);
	setInterval(timeConvert,1000);
	centerLayers();
	idle();
	checkFirstLaunch();
	userLocation();
}

//Cookie Handler -- Thanks to lu1s on Github, snippet can be found here -> https://gist.github.com/lu1s/974020
var setCookie = function(name,value,days) {
    if (days) {
        var date = new Date()
        date.setTime(date.getTime()+(days*24*60*60*1000))
        var expires = "; expires="+date.toGMTString()
    }
    else var expires = ""
    document.cookie = name+"="+value+expires+"; path=/"
}

var getCookie = function(name) {
    var nameEQ = name + "="
    var ca = document.cookie.split(';')
    for(var i=0;i < ca.length;i++) {
        var c = ca[i]
        while (c.charAt(0)==' ') c = c.substring(1,c.length)
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length)
    }
    return null
}

var getAllCookies = function(){
	var r = new Array()
	var u = document.cookie.split(";")
	for(var i=0;i<u.length;i++)
		r.push({
			name: u[i].split("=")[0],
			value: u[i].split("=")[1]
		})
	return r;
}

var deleteCookie = function(name) {
   	setCookie(name,"",-1)
}

//First Time Check
function checkFirstLaunch() {
	if (getCookie("launch") == null) {
		firstLaunch();
		setCookie("launch", "hasLaunched", 365);
	}
}