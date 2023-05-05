// Hacker Rank grading Students
'use strict';
const gr = [73, 67, 38, 33];
	
function round5 (number) {
	return Math.ceil(number / 5) * 5;
}

// 1. calcule multiplo de 5 siguiente
// 2. calcule diferencia
// 3. aplique regla si es menor a 3 suba, si no deje igual
// 4. si es menor de 38 deje igual

function changeNumbers(x) {
	let diff = round5(x) - x;
	
	if (x < 38 ) {
		return x;
	} else if (diff < 3) {
		return round5(x);
	} else if (diff >= 3) {
		return x;
	}
}

function adjustGrades(arr) {
	let res = [];
	arr.forEach((el) => {
		//console.log(changeNumbers(el));
		res.push(changeNumbers(el));
	});
	return res;
} 

console.log(adjustGrades(gr));


