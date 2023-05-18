"use strict";

const arr = [1, 2, 3, 6, 3, 6, 1];
// return list of repeated digits
// R 1, 3, 6
// count all digits,  deliver a map,  key: digit, value: times => filter larger than 1 values.

const findDuplicates = (arr) => {
  const res = arr.reduce((obj, val) => {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val]++;
    }
    return obj;
  }, {});
  return res;
};

const reduceObj = (obj) => {
  let res = [];
  for (let key in obj) {
    if (obj[key] > 1) {
      res.push(+key);
    }
  }
  return res;
};

const getDuplicates = (arr) => {
  const dups = findDuplicates(arr);
  return reduceObj(dups);
};

console.log(getDuplicates(arr));
