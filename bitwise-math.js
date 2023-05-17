"use strict";

const isEven = (n) => {
  return (n & 1) === 0 ? "Even" : "Odd";
};

console.log(isEven(7189091058));

const mask = 0b11110000;
console.warn(222 & mask);
