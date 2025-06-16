let display = document.getElementById("display");
const numbers = document.querySelectorAll(".number"); // выловили кнопки по селектору (числовые)
const btnFunc = document.querySelectorAll(".btn-func");
let result = null;
	
numbers.forEach((num) => {
	let currentNum = num.innerHTML;

	num.addEventListener('click', function() {  
    	display.value += currentNum;
	});
});

btnFunc.forEach((func) => {
	let currentFunc = func.innerHTML;

	func.addEventListener('click', function() {
		if (func.innerHTML == 'C') {
			display.value = null;
		} else if (func.innerHTML == '=') {
			result = strToExample(display.value);
			display.value = result; // вывод результата подсчета
		} else {
			display.value += currentFunc;
		}
	});
});

function strToExample(str) {
	let arSymbs = new Array();
	
	console.log();
}

function findIndex(x, example) {
	if (x === "x") {
		let startIndex = example.indexOf('x');

		btnFunc.forEach((func) => {
			if (func !== "x") {
				
			}
		});

		console.log(example);
		console.log("Позиция знака: " + startIndex);
	}
}

function multiple(example) {

	startIndex = findIndex("x", example);

	//console.log(example);
}






/*function extractStaples(example) {

	while (example.includes('(', 0)) {
		let startIndex = example.indexOf('(');
		let endIndex = example.indexOf(')');

		exStaples = example.substring(startIndex, ++endIndex); // выражение со скобками
		newExSt = exStaples.replace('(', '');
		newExSt = newExSt.replace(')', '');

		example = example.replace(exStaples, newExSt); // выражение без скобок
	}

	return example; // вернули выражение без скобок
}*/

// сумма чисел
function sumNums(example) {
	let res = 0;
	let ex = example.split('+'); // получили массив из чисел (без плюсов)
	ex.forEach(num => res += Number(num));

	return res;
}

// умножение чисел
function mulNums(example) {
	let res = 1;
	let ex = example.split('x');
	ex.forEach(num => res *= Number(num));

	return res;
}