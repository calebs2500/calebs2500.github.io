window.onload = setTimeout(loadBackground, 200);

function loadBackground() {
	document.getElementById("viewport").style.opacity = "1";
}

//Clock
var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes(),ap;
if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;

document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
document.getElementById('datebox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}

//Clock Position Options
function showPositionOption() {
	document.getElementById("positionOptionWrapper").className = "shown";
	document.getElementById("move").onclick = hidePositionOption;
}

function hidePositionOption() {
	document.getElementById("positionOptionWrapper").className = "hidden";
	document.getElementById("move").onclick = showPositionOption;
}
