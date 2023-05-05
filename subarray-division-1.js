"use strict";

// problem of finding how many ways a chocolate bar can be divided that fulfills constraints, sum = birth day, length = array
// length or number of squares.
// en array s,  encontrar m miembros cuya sumatoria sea igual a d.

const s = [2, 2, 1, 3, 2];
const d = 5; // sum of array should be this.
const m = 2; // length of array should be this.

// answer : [2,2] or [1,3] : R = 2;

const subarrayDivision = (s, d, m) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const sum = s.slice(i, m + i).reduce((prev, curr) => prev + curr);
    if (sum === d) {
      count++;
    }
  }
  return count;
};

console.log(subarrayDivision(s, d, m));
