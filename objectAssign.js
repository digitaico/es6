"use strict";

const obj = {
  id: 156,
  title: "Brigadier General",
  name: "Carlos Alvarado",
  age: 65,
  status: "married",
};

const obj1 = {
  id: 0,
  fecha: "2023-04-15",
};

const test = (source, target) => {
  const objN = Object.assign(target, source);
  return objN;
};

console.log(test(obj, obj1));
