'use strict';
// uses LCM and GCD.

const arr1 = [3,9,6];
const arr2 = [36,72];
// R : 2


const getMin = (arr) => {
  return arr.reduce((x, y) => Math.min(x, y), +Infinity);
}

const getMax = (arr) => {
  return arr.reduce((a, b) => Math.max(a, b), -Infinity);
}

const getGcd = (min, max) => {
  return !max ? min: getGcd(max, min % max);
}

const getLcm = (arr) => {
  const min = getMin(arr);
  const max = getMax(arr);
  if (min == 0 || max == 0) {
    return 0;
  } else {
    return Math.abs((min * max)) / getGcd(min,max);
  }
}

const betweenTwoSets = (a, b) => {
  let result = 0;
  let multiple = 0;
  const lcm = getLcm(a);
  const min = getMin(b);
  const max = getMax(b);
  const gcd = getGcd(min, max);

  while (multiple <= gcd ) {
    multiple += lcm;
    console.log(gcd)
    if (gcd % multiple == 0) {
      result++;
    }
  }
  return result;
}
console.log(betweenTwoSets(arr1, arr2));
//betweenTwoSets(arr1, arr2);
