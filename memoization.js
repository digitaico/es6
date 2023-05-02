"use strict";

// memoization
const memoizedAddTo256 = () => {
  var cache = {};

  return (num) => {
    if (num in cache) {
      console.log(`valor cacheado ${cache[num]}`);
      return cache[num];
    } else {
      cache[num] = +num + 256;
      console.log(`valor no cacheado ${cache[num]}`);
      return cache[num];
    }
  };
};
const memoizedFunc = memoizedAddTo256();

memoizedFunc(3);
memoizedFunc(16);
memoizedFunc(3);
memoizedFunc(5);
