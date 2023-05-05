"use strict";
const num = 2147483647;

const getBinaryNumber = (num) => {
  let number = num.toString(2);
  let n = 32 - number.length;
  let str = "";

  while (n--) {
    str += "0";
  }
  return str + number;
};

const flipBits = (bits) => {
  let str = "";
  let n = 0;
  while (n < bits.length) {
    str += bits[n] === "0" ? "1" : "0";
    n++;
  }
  return str;
};

function flippingBits(n) {
  let bits = getBinaryNumber(n);
  return parseInt(flipBits(bits), 2);
}

console.log(flippingBits(num));
