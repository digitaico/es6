"use strict";

// super digit of an integer x: if int x has only one digit,  x is it's superdigit.  otherwise superdigit is the sum of its
// digits
// x = 12,  superdigit = 3;
// x = 29, superdigit = 11,
// x = 3789, superdigit = 27.
// given an string n composed by numbers, and an integer k,  return de superdigit of k times s:
// n = '56789', k = 5,  p = 5678956789567895678956789,  superdigit of this: 5 + 6 + 7 + 8 + 9 k times.= 35*5 = 175,
// superdigit = 13: 1 + 7 + 5.
const n = "148";
const k = 3;

const reduceNumber = (str) => {
  return [...str].reduce((acc, curr) => +acc + +curr);
};

const superDigit = (n, k) => {
  const p = (reduceNumber(n) * k).toString();
  const q = reduceNumber(p).toString();
  return reduceNumber(q);
};

console.log(superDigit(n, k));
