"use strict";
// count chars in string
// resumir: para miembro de array cuantos existen iguales.
const lista = ["l", "a", "b", "c", "u"];
const str1 =
  "El mayor desafio de los bancos es mantener niveles de solvencia sanos al tiempo que incrementar sus assets a traves de prestamos,  en un entorno economico incierto y volatil,";
const str2 = "estamos corriendo para ayudarte";
const str3 = "ala lala az";

const rankChars = (str) => {
  str = str.replace(/\W/g, "");
  str = str.split("");

  const res = str.reduce((obj, char) => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
    return obj;
  }, {});
  return res;
};

const rankCharsInList = (str, arr) => {
  str = str.replace(/\W/g, "");
  str = str.split("");

  const res = str.reduce((obj, char) => {
    if (arr.includes(char)) {
      if (!obj[char]) {
        obj[char] = 1;
      } else {
        obj[char]++;
      }
    }
    return obj;
  }, {});
  return res;
};
console.log(rankChars(str2));
console.log(rankCharsInList(str2, lista));

const arr = [1, 1, 0, -1, -1];
const summarize = (arr) => {
  const res = arr.reduce((obj, el) => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
    return obj;
  }, {});
  return res;
};
console.log(summarize(arr));
