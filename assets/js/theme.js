let calculator = document.getElementById("calculator");
let body = document.body;
let btn = document.getElementById("btn-theme");
let btnImg = document.getElementById("btn-theme-img");

btn.onclick = function(){
	body.classList.toggle("night-body");
	calculator.classList.toggle("night-calc");
	btn.classList.toggle("night-btn");
	display.classList.toggle("night-display");
	btnImg.classList.toggle("night-img");
	btnImg.src = "assets/img/morning.svg";
}