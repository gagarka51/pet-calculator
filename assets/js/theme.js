let calculator = document.getElementById("calculator");
let body = document.body;
let btn = document.getElementById("btn-theme");
let btnImg = document.getElementById("btn-theme-img");

btn.onclick = function(){
	addNightStyles();
	if (body.classList.contains("night-body") == true) {
		localStorage.setItem("theme", "light");
	}
	console.log(localStorage.getItem("theme"));
}

function addNightStyles() {
	body.classList.toggle("night-body");
	calculator.classList.toggle("night-calc");
	btn.classList.toggle("night-btn");
	display.classList.toggle("night-display");
	btnImg.classList.toggle("night-img");

	if (btnImg.classList.contains("night-img") == true) {
		btnImg.src = "assets/img/morning.svg";
	} else {
		btnImg.src = "assets/img/night-sky.svg";
	}
	localStorage.setItem("theme", "night");
}