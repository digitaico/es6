"use strict";

// return an array of length k,  such that is minimum unfairness,
// unfairness = max(element) - min(element)
// for [1,4,7,2], k = 2, R= 1.  explic: array [1,2] of length 2 has minimum unfairness: max(1,2) - min(1,2) = 1.
//const arr = [1, 4, 7, 2];
//const k = 2;
//const arr = [10, 100, 300, 200, 1000, 20, 30];
//const k = 3;
// R : 3
const k = 2;
const rarr = "5 2 1 2 1 2 1";
// R : 1335
const arr = rarr
  .trim()
  .split(" ")
  .map((el) => parseInt(el));

// ordenar els
// extraer primeros k miembros
// calcular unfairness: max - min.

const maxMin = (k, arr) => {
  const sarr = [...arr].sort((a, b) => a - b);
  const res = sarr
    .map((num, index) => {
      return sarr[index + (k - 1)] - sarr[index];
    })
    .filter((val) => val !== undefined && val >= 0);
  console.log(res);
  return Math.min(...res);
};

console.log(maxMin(k, arr));
