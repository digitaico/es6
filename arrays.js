"use strict";

const foo = [1970, 5245];
//console.log(foo);
const arr1 = ["pera", "banano", "fresa"];
console.log([...foo, ...arr1]);

// array rotation
const arrayRotation = (arr, rotations) => {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
  return arr;
};

const arr2 = [7, 9, 15, 23, 2];
console.log(arrayRotation(arr2, 4));
