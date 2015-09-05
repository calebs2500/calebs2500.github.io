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
	document.getElementById("positionOption1").style.height = "30px";
	document.getElementById("positionOption1").style.width = "30px";
	document.getElementById("positionOption2").style.height = "30px";
	document.getElementById("positionOption2").style.width = "30px";
	document.getElementById("positionOption3").style.height = "30px";
	document.getElementById("positionOption3").style.width = "30px";
	document.getElementById("positionOption4").style.height = "30px";
	document.getElementById("positionOption4").style.width = "30px";
	document.getElementById("positionOption5").style.height = "30px";
	document.getElementById("positionOption5").style.width = "30px";
	document.getElementById("positionOption6").style.height = "30px";
	document.getElementById("positionOption6").style.width = "30px";
	document.getElementById("positionOption7").style.height = "30px";
	document.getElementById("positionOption7").style.width = "30px";
	document.getElementById("positionOption8").style.height = "30px";
	document.getElementById("positionOption8").style.width = "30px";
	document.getElementById("positionOption9").style.height = "30px";
	document.getElementById("positionOption9").style.width = "30px";
	document.getElementById("move").onclick = hidePositionOption;
}

function hidePositionOption() {
	document.getElementById("positionOptionWrapper").className = "hidden";
document.getElementById("positionOption1").style.height = "0px";
	document.getElementById("positionOption1").style.width = "0px";
	document.getElementById("positionOption2").style.height = "0px";
	document.getElementById("positionOption2").style.width = "0px";
	document.getElementById("positionOption3").style.height = "0px";
	document.getElementById("positionOption3").style.width = "0px";
	document.getElementById("positionOption4").style.height = "0px";
	document.getElementById("positionOption4").style.width = "0px";
	document.getElementById("positionOption5").style.height = "0px";
	document.getElementById("positionOption5").style.width = "0px";
	document.getElementById("positionOption6").style.height = "0px";
	document.getElementById("positionOption6").style.width = "0px";
	document.getElementById("positionOption7").style.height = "0px";
	document.getElementById("positionOption7").style.width = "0px";
	document.getElementById("positionOption8").style.height = "0px";
	document.getElementById("positionOption8").style.width = "0px";
	document.getElementById("positionOption9").style.height = "0px";
	document.getElementById("positionOption9").style.width = "0px";	
	document.getElementById("move").onclick = showPositionOption;
}

function clockTopLeft() {
	document.getElementById("time").className = "topleft";
	setTimeout(hidePositionOption);
}

function clockTop() {
	document.getElementById("time").className = "top";
	setTimeout(hidePositionOption);
}

function clockTopRight() {
	document.getElementById("time").className = "topright";
	setTimeout(hidePositionOption);
}

function clockLeft() {
	document.getElementById("time").className = "left";
	setTimeout(hidePositionOption);
}

function clockMiddle() {
	document.getElementById("time").className = "middle";
	setTimeout(hidePositionOption);
}

function clockRight() {
	document.getElementById("time").className = "right";
	setTimeout(hidePositionOption);
}

function clockBottomLeft() {
	document.getElementById("time").className = "bottomleft";
	setTimeout(hidePositionOption);
}

function clockBottom() {
	document.getElementById("time").className = "bottom";
	setTimeout(hidePositionOption);
}

function clockBottomRight() {
	document.getElementById("time").className = "bottomright";
	setTimeout(hidePositionOption);
}