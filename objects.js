"use strict";

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
