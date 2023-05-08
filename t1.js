"use strict";

const a = [{ id: 100, name: "Juan", age: 23 }];
let b = [...a];
let c = JSON.parse(JSON.stringify(a));
b[0].id = 200;
b[0] = { id: 1, name: "marco", age: 21 };
c[0].id = 16;
c[0].age = 9;

console.log(a);
console.log(b);
console.log(c);
