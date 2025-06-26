let calculator = document.getElementById("calculator");
let body = document.body;
let btn = document.getElementById("btn-theme");
let btnImg = document.getElementById("btn-theme-img");

btn.onclick = function(){
	body.style.backgroundColor = "#161a1f";
	calculator.style.backgroundColor = "#020317";
	btn.style.backgroundColor = "#020317";
	display.style.color = "#fff";
	btnImg.src = "assets/img/morning.svg";
}