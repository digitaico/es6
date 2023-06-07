'use strict';
// hackerrank: staricase

const n = 6;

let buildStair = (n) => {
	let cnt = [];
	let spa = " ", sym = "#";

	for (let i = 1; i <= n; i++) {
		cnt += `\n`;
		for (let j = n - 1; j >= i; j--) {
			cnt += `${spa}`;
		}
		for (let j = 0; j <= i - 1; j++) {
			cnt += `${sym}`;
		}
	}

	return cnt;
}

console.log(buildStair(n));
