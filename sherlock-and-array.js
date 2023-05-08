"use strict";

// given an array of integers, find an element such that the sum of all the elements to it's left is equal to the sum of all
// elements to the right. Return if there is an element that fulfills criterios. RETURN 'YES' or 'NO',

const arr = [5, 6, 8, 11]; // R: YES
//const arr = [1, 2, 3]; //R: NO
//const arr = [1, 2, 3, 3]; // R: YES

const sherlockAndArray = (arr) => {
  const l = arr.length - 1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i + 1).reduce((prev, curr) => prev + curr);
    //const rightSum = arr.slice(i + 2, l).reduce((prev, curr) => prev + curr);
    console.log(`${i} ${i + 1 > l ? i : i + 1} ${l} left: ${leftSum} right: `);
  }
  return count;
};

sherlockAndArray(arr);
