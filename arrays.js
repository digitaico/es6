"use strict";

// merge arrays
const foo = [1970, 5245];
//console.log(foo);
const arr1 = ["pera", "banano", "fresa"];
//console.log([...foo, ...arr1]);

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
//console.log(arrayRotation(arr2, 4));

// reverse array 
const reverseArray = (arr) => {
  return arr.reverse();
}
//console.log(reverseArray(arr1));

// find something in array
const findInArray = (str, arr) => {
  //return arr.find((el) => el == str) // find(),  callback
  return arr.includes(str); // includes : boolean
} 
//console.log(findInArray('pera', arr1))

// given an array,  find prime numbers.
const arr3 = [2,5, 15, 16, 21, 24, 36, 233];

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 == 0 && num > 2) return false;
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
} 

const extractPrimeNumbers = (arr) => {
  return arr.filter((num) => isPrime(num))
}
//console.log(extractPrimeNumbers(arr3))


// find duplicate numbers in array
const findDuplicates = (arr) => {
  arr = arr.sort((a,b) => a -b);
  return arr.filter((el, index) => index != arr.indexOf(el));
}
const arr4 = [1, 3, 90, 3, 16, 24, 1];
//console.log(findDuplicates(arr4))

// find missing number in sequence
const seq = [1,2,5,6,7,8,9,9,11,12]
// R missing: 3,4, 10
const findMissingNumber = (arr) => {
  arr = arr.sort((a,b) => a -b);
  const res = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    if(!arr.includes(i)) {
      res.push(i);
    }
  } 
  return res;
}
//console.log(findMissingNumber(seq))


// find common elements in two arrays (ints)
const a1 = [5,4,12,19,7,6,9, 13];
const a2 = [16,97, 5, 13, 4, 9, 1, 0, 1, 5];
// R 5,4,9,13
const findCommonElements = (arr0, arr1) => {
  return arr0.filter((el) => arr1.includes(el))
}
//console.log(findCommonElements(a1,a2))
