let display = document.getElementById("display");
let showDisplay = document.getElementById("old-display");
const numbers = document.querySelectorAll(".number"); // выловили кнопки по селектору (числовые)
const btnFunc = document.querySelectorAll(".btn-func");
const arNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
			//result = strToAr(display.value);
			showDisplay.value = display.value; // показ предыдущего выражения
			result = eval(display.value);
			display.value = result; // вывод результата подсчета
		} else {
			display.value += currentFunc;
		}
	});
});

/*
	
	Возвращает массив вида:
	0: {operator: '1'}
	1: {operand: '-'}
	...

 */
/*function strToAr(str) {
	let arSymbs = Array.from(str);
	let arInfoSymbs = {};

	arSymbs.forEach((symb, index) => {
		if (arNumbers.includes(symb, 0) == true) {
			arInfoSymbs[index] = {'operator' : symb};
		} else {
			arInfoSymbs[index] = {'operand' : symb};
		}
	});
	
	return arInfoSymbs;
}*/

/*function countExample(arInfoSymbs) {
	let result = 0;
	
	return result;
}*/

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