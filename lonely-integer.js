"use strict";

const arr = [1, 2, 3, 4, 3, 2, 1];

const getKyByValue = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};

const lonelyInteger = (arr) => {
  let total = [];

  const res = arr.reduce((obj, curr) => {
    if (!obj[curr]) {
      obj[curr] = 1;
    } else {
      obj[curr]++;
    }
    return obj;
  }, {});
  return getKyByValue(res, 1);
};

console.log(lonelyInteger(arr));
