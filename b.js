"use strict";

function hello() {
  return `Hola ${this.name}`;
}

const obj = {
  name: "Jorge Eduardo",
  age: 53,
  id: 79502033,
  getAge: function () {
    return this.age;
  },
  getData: function (value1, value2) {
    return `${this.age} :: ${value1} -- ${value2}`;
  },
};
const obj2 = {
  age: 25,
};

console.log(`.1. ${hello.call(obj)}`);
console.log(`.2. ${hello.apply(obj)}`);
console.log(`.3. ${obj.getAge.call(obj2)}`);
const dd = obj.getData.bind(obj2, "foforro", "pirata");
console.log(dd());

// currying
const add = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(add(5)(3));

// memoization
const memoizedAddTo256 = () => {
  var cache = {};

  return (num) => {
    if (num in cache) {
      //console.log(`valor caheado ${cache[num]}`);
      return cache[num];
    } else {
      cache[num] = +num + 256;
      //console.log(`valor no caheado ${cache[num]}`);
      return cache[num];
    }
  };
};
const memoizedFunc = memoizedAddTo256();

memoizedFunc(3);
memoizedFunc(16);
memoizedFunc(3);
memoizedFunc(5);

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

// count chars in string
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

// arrow functions
let obj3 = {
  a: 100,
  fun1() {
    let a = 20;
    let fun2 = () => {
      console.log(this.a);
    };
    fun2();
  },
};

console.log(obj3.fun1());

// Classes

class Prueba {
  constructor(name, age, id, status) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.status = status;
  }

  getName = async () => {
    return `>> Datos Personales
    Nombre: ${this.name}
    Edad: ${this.age}
    Estado: ${this.status}
    Id #: ${this.id}
    <<`;
  };
}

const prueba = new Prueba("Mafaldo Perez", 28, 79502033, true);
console.log(prueba.getName());

// generator: function resturns object on iteration.
function* gen1() {
  let c = 0;
  while (true) {
    yield parseInt(c++ * +5);
  }
}

const iter = gen1();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// object destructuring
const e = {
  id: 105,
  name: "Agatha Christie",
  skill: "Backend Dev",
  status: false,
};

const { id, skill } = e;
console.log(skill);

const arr = [5, 6, 7, 8, 9];
const [i, j, k] = arr;
console.log(j);

//
function func1() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);

  var x = 2;
  var y = 12;
}
func1();

// array rotation
const arrayRotation = (arr, rotations) => {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
  return arr;
};

const arr1 = [7, 9, 15, 23, 2];
//console.log(arrayRotation(arr1, 4));

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

// convert object to array

const obj5 = {
  id: 1,
  name: "Angela Calderon",
  status: true,
  age: 30,
  branch: "Human Resources",
};

const returnArrayFromObject = (obj) => {
  return Object.entries(obj);
};

console.log(returnArrayFromObject(obj5));
