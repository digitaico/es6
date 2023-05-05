"use strict";

// pangram: a string that contains every letter of the alphabet.

const pangram = "We promptly judged antique ivory buckles for the next prize";
const nopangram = "We promptly judged antique ivory buckles for the prize";

const checkPangram = (s) => {
  s = s.toLowerCase().replace(/\W/g, "").split("");
  let res = true;
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  alphabet.forEach((char) => {
    if (!s.includes(char)) {
      res = false;
    }
  });
  return !res ? "not pangram" : "pangram";
};

console.log(checkPangram(nopangram));
