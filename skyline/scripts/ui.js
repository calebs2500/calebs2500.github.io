//Credit: http://www.ricocheting.com/code/javascript/html-generator/date-time-clock
var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

var hour;
var ampm;
var min;

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes(),ap;
if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}
hour = nhour;
ampm = ap;
min = nmin;

if(nmin<=9) nmin="0"+nmin;

document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
//document.getElementById('datebox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
}

//window.onload=function(){
//GetClock();
//setInterval(GetClock,1000);
//setInterval(checkNight,1000);
//}

$(document).mouseleave(function () {
    $("#clockbox, .search, .engineLogo, .searchIcon, .searchInput").addClass("cursorOut");
});

$(document).mouseenter(function () {
    $("#clockbox, .search, .engineLogo, .searchIcon, .searchInput").removeClass("cursorOut");
});

var idleTime;

function idle() {
	setInterval(function() {
		idleTime = idleTime + 1;
		if(idleTime >= 600) {
			$(".bodyCover").css({"opacity": "0.6", "visibility": "visible"});
		}	else {
			$(".bodyCover").css("opacity", "0");
			setTimeout(function() {
				$(".bodyCover").css("visibility", "hidden");
			}, 500);
		}
	}, 1000);
	$(document).mousemove(function() {
		idleTime = 0;
	});
}

var currentMessage;

function showMessage(id) {
	$("." + id).css("display", "block");
	$(".message, .innerMessage").css("visibility", "visible");
	$(".message").css("background", "rgba(0,0,0,0.6)");
	$(".innerMessage").css("background", "rgba(0,0,0,0.9)");
	currentMessage = id;
}

function hideMessage() {
	$(".message, .innerMessage").css("background", "rgba(0,0,0,0.0)");
	setTimeout(function() {
		$("." + currentMessage).css("display", "block");
		$(".message, .innerMessage").css("visibility", "hidden");
	},500);
}

function firstLaunch() {
	showMessage("m1");
}