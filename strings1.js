"use strict";

const bar = {
  id: "aM41dsj843n",
  name: "Jorge Eduardo",
  status: "married",
};

let pp = (obj) => {
  return obj.id;
};

const ce = null;
const te = 5;
const me = "cinco";
const func = () => {
  return "test func jea";
};

var foo = [6, 90, 52, 55, 34, 72];
console.log(bar !== null && toString.call(bar) !== "[object Array]");
console.log(toString.call(func));
console.log(te.constructor === Object);
console.log(func());
console.log(pp(bar));
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
const atae = (n1, n2) => {
  return Math.abs(n1 - n2) < Number.EPSILON;
};
console.log(atae(0.1 + 0.2, 0.3));

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
