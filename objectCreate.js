"use strict";

const obj = {
  id: 1,
  name: "Alia",
  age: 18,
  gender: "female",
  status: true,
};

const test = (obj) => {
  return Object.create({}, obj);
};

const o = Object.create({}, { p: 2 });
