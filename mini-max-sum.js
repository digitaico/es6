"use strict";

//const arr = [1, 2, 3, 4, 5];
const arr = [7, 69, 2, 221, 8974];

const arrMin = [...arr].sort().slice(0, -1);
const arrMax = [...arr].sort().slice(1, arr.length);

const getArraySum = (arr) => {
  return arr.reduce((sum, curr) => sum + curr, 0);
};

const miniMaxSum = (arr) => {
  console.log(getArraySum(arrMin), getArraySum(arrMax));
};

miniMaxSum(arrMin);
