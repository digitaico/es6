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

// strings as array: iterables with Array.prototype and call()
const tx1 = "Mi perro es tierno";
Array.prototype.forEach.call(tx1, (char) => {
  console.log(char);
});
