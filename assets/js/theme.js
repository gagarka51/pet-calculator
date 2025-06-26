let calculator = document.getElementById("calculator");
let body = document.body;
//let display = document.getElementById("display");
let btn = document.getElementById("btn-theme");

btn.onclick = function(){
	body.style.backgroundColor = "#161a1f";
	calculator.style.backgroundColor = "#020317";
	btn.style.backgroundColor = "#020317";
	display.style.color = "#fff";
}