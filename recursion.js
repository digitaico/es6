"use strict";

// recursion
const arraySum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop() + arraySum(arr);
  }
};
console.log(arraySum([5, 6, 7, 8]));

// recursion fibonacci + memoization
const fibonacciGenerator = (n) => {
  let cache = {};
  if (n < 2) {
    return n;
  } else {
    if (!cache[n]) {
      cache[n] = fibonacciGenerator(n - 1) + fibonacciGenerator(n - 2);
    }
    return cache[n];
  }
};

const fibonacciIterator = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(`- ${fibonacciGenerator(i)}`);
  }
};

const fibonacciComplete = (n) => {
  return n > 0 ? fibonacciIterator(n) : "Use a Positive Integer!";
};

// mejor,  sin errores,  sucinta,  pero no memoizada!!!
const fibonacciGenerator2 = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  const arr = fibonacciGenerator2(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
};

const fibonacciNth = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  const arr = fibonacciGenerator2(n - 1);
  const res = [...arr, arr[n - 1] + arr[n - 2]];
  return res.pop();
};
const num = 15;
console.log(fibonacciComplete(num));
console.log(fibonacciGenerator2(num));
console.log(fibonacciNth(num));
