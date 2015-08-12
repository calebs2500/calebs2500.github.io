window.onload = setTimeout(show2, 8000);

var timer;

function show1() {
	document.getElementById("slide3").className = "galleryHidden";
	document.getElementById("slide1").className = "galleryShown";
	timer = setTimeout(show2, 8000);
}

function show2() {
	document.getElementById("slide1").className = "galleryHidden";
	document.getElementById("slide2").className = "galleryShown";
	timer = setTimeout(show3, 8000);
}

function show3() {
	document.getElementById("slide2").className = "galleryHidden";
	document.getElementById("slide3").className = "galleryShown";
	timer = setTimeout(show1, 8000);
}
