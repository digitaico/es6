"use strict";
// verificar si dos palabra son sus anagramas
const textTransform = (str) => {
  return str.replace(/\W/g, "").toLowerCase().split("").sort().join("");
};

const isAanagram = (str1, str2) => {
  return textTransform(str1) === textTransform(str2);
};

const str4 = "Jorge Ed uardo";
const str5 = "drogejuarode";
console.log(isAanagram(str4, str5));
