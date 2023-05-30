'use strict';

const arr = [4, 7, 9, 12, 5, 0, 3, 1];
// return second largets member of array.
// sort array.
// get [1] value.
const getSecondLargestMember = (arr) => {
  return arr.sort((a, b) => b - a)[1];
}

console.log(getSecondLargestMember(arr));

