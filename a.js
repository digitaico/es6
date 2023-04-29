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
//console.log((bar !== null) && (toString.call(bar) !== '[object Array]'));
//console.log(toString.call(func));
//console.log(te.constructor === Object);
//console.log(func());
//console.log(pp(bar));
//console.log(0.1 + 0.2);
//console.log((0.1 + 0.2) == 0.3);
const atae = (n1, n2) => {
  return Math.abs(n1 - n2) < Number.EPSILON;
};
//console.log(atae(0.1 + 0.2, 0.3));

const checkIfPalindrome = (str) => {
  str = str.replace(/\W/g, "").toLowerCase();
  return str == str.split("").reverse().join("");
  //return str.split('').reverse().join('');
};
//console.log(checkIfPalindrome("saippuakivikauppias"));

const sum = (a) => {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function (b) {
      return a + b;
    };
  }
};
//console.log(sum(2,3));
//console.log(sum(2)(3));

/*
for (let i = 0; i < 5; i++) {
  let btn = document.createElement('button');
  btn.appendChild(document.createTextNode(`Button ${i}`));
  btn.addEventListener('click', () => { console.log(i);});
  document.body.appendChild(btn);
}
*/

var d = {};
["burro", "mula", "gallina"].forEach((animal) => {
  d[animal] = undefined;
});
//console.log(d);

//console.log('0 || 1 = ' + (0 || 1));
//console.log('1 || 2 = ' + (1 || 2));
//console.log('0 && 1 = ' + (0 && 1));
//console.log('1 && 2 = ' + (1 && 2));

let a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;
//console.log(a[b]);

// factorial
const factorial = (n) => {
  return n > 1 ? n * factorial(n - 1) : n;
};
//console.log(factorial(15));

// Deep First Search algo
// https://www.toptal.com/javascript/interview-questions#question-528
// visit all elements in a DOM tree
const Traverse = (p_element, p_callback) => {
  p_callback(p_element);
  let list = p_element.children;
  for (var i = 0; i < list.length; i++) {
    Traverse(list[i], p_callback);
  }
};

//console.log(1 < 2 < 3);
//console.log(3 > 2 > 1);
//console.log(foo);
foo = [1970, ...foo, 5245];
//console.log(foo);
const arr1 = ["pera", "banano", "fresa"];
//console.log([...foo, ...arr1])
console.log(typeof typeof 1);
