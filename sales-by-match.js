"use strict";

const ar = [2, 2, 2, 4, 4, 6];
let count = 0;

const orderArray = (ar) => {
  return [...ar].sort((a, b) => a - b);
};

const totalizeArray = (ar) => {
  return ar.reduce((obj, curr) => {
    if (!obj[curr]) {
      obj[curr] = 1;
    } else {
      obj[curr]++;
    }
    return obj;
  }, {});
};

const sockPairs = (ar) => {
  const s = orderArray(ar);
  const rs = totalizeArray(s);
  const vals = Object.values(rs).filter((val) => val > 1);
  return vals.reduce((total, curr) => {
    return total + parseInt(curr / 2);
  }, 0);
};

console.log(sockPairs(ar));
