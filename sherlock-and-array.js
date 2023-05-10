"use strict";

// given an array of integers, find an element such that the sum of all the elements to it's left is equal to the sum of all
// elements to the right. Return if there is an element that fulfills criterion. RETURN 'YES' or 'NO',

//const arr = [5, 6, 8, 11]; // R: YES
const arr = [3, 7, 5, 10, 2, 7, 4, 2]; // R: YES
//const arr = [1, 2, 3]; //R: NO
//const arr = [1, 2, 3, 3]; // R: YES
//
//respuesta:  x = keft sum , y elemento y x = right sum
//[5,6,8,11]
// --    -
// x   y x : x = x ;  x + y + x = sum array.  2x +y = sum; sum = 2x - y.
// conocemos sum,  y podemos probar iterando con cada miembro para reemplazar y,  y para x usamos un slice del array,  index
// 0,  0-1, 0-2, ....

const arraySumm = (arr) => {
  return arr.reduce((acc, curr) => (acc = acc + curr));
};

const balancedSums = (arr) => {
  const sum = arraySumm(arr);
  let x = 0;

  for (let y = 0; y < arr.length; y++) {
    if (2 * x == sum - arr[y]) {
      return "YES";
    }
    x = x + arr[y];
  }
  return "NO";
};

console.log(balancedSums(arr));
