"use strict";

const n = 2;
const queriesStr = ["1 0 5", "1 1 7", "1 0 3", "2 1 0", "2 1 1"];

const splitArrays = (array) => {
  return array
    .map((el) => el.split(" "))
    .map((arr) => {
      return arr.map((el) => parseInt(el));
    });
};

const queries = splitArrays(queriesStr);

const dynamicArray = (n, queries) => {
  let arr = [];
  let lastAnswer = 0;
  let answers = [];

  const getIndex = (x) => {
    return (x ^ lastAnswer) % n;
  };

  const queryOne = (x, y) => {
    const idx = getIndex(x);
    if (!arr[idx]) arr[idx] = [];
    arr[idx].push(y);
  };

  const queryTwo = (x, y) => {
    const idx = getIndex(x);
    const l = arr[idx].length;
    const z = y % l;
    lastAnswer = arr[idx][z];
    answers.push(lastAnswer);
  };

  for (let q of queries) {
    if (q[0] == +1) {
      queryOne(q[1], q[2]);
    } else if (q[0] == +2) {
      queryTwo(q[1], q[2]);
    }
  }
  return answers;
};
console.log(dynamicArray(n, queries));
