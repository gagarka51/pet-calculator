let calculator = document.getElementById("calculator");
let body = document.body;
let btn = document.getElementById("btn-theme");
let btnImg = document.getElementById("btn-theme-img");

btn.onclick = function(){
	if (body.classList.contains("night") == false) {
		body.classList.add("night-body");
		calculator.classList.add("night-calc");
		btn.classList.add("night-btn");
		display.classList.add("night-display");
		btnImg.classList.add("night-img");
		btnImg.src = "assets/img/morning.svg";
	} else {
		body.classList.remove("night-body");
	}
}