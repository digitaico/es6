"use strict";

const buildArray = (t) => {
  return [...Array(t).keys()]
    .map((x) => ++x)
    .map((n) => {
      return +n;
    });
};

const fizzBuzz = (a) => {
  const arr = buildArray(a);
  for (let i = 1; i <= arr.length; i++) {
    console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
  }
};

const a = 15;
fizzBuzz(a);
