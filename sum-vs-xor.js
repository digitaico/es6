// given an INT n,  find each z such:
// 0 <= z <= n;
// n + z == n XOR z;
// return the number of z's found.

"use strict";

const n = 10;

const getBinary = (n) => {
  return n >= 0 ? n.toString(2) : (~n).toString(2);
};

const sumXor = (n) => {
  const num = parseInt(n);
  const res = getBinary(num);
  let count = 0;

  if (num === 0) {
    count = 0;
  } else {
    for (let i = 0; i < res.length; i++) {
      if (res[i] === "0") {
        count++;
      }
    }
  }
  return Math.pow(2, count);
};

console.log(sumXor(n));
