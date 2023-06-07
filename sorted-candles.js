'use strict';

// HackerRank
// sorted candles


// 1. ordena  array Desc
// 2. compara primer miembro de array con cada miembro: si es igual suma tallest,  si es menor,  no suma.
const candles = [3,1,2,3,2,3];

function countTallest(array) {
const arrSort = array.sort((a,b) => b - a);
let sum = 1;

arrSort.forEach((x, index, arr) => {
	if (arr[0] == arr[index + 1]) {
		sum++
	}
});
return sum;
}

console.log(countTallest(candles));


