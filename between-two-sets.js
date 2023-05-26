'use strict';
// uses LCM and GCD.

const arr1 = [2];
const arr2 = [20, 30, 12];
// R : 1

const getGcd = (a, b) => b == 0 ? a : getGcd(b, a % b);
const getLcm = (a, b) => a / getGcd(a, b) * b;
const getLcmAll = (arr) => arr.reduce(getLcm, 1);
const getGcdAll = (arr) => arr.reduce(getGcd, 0);

const betweenTwoSets = (a, b) => {
  let result = 0;
  let multiple = 0;
  const lcm = getLcmAll(a);
  const gcd = getGcdAll(b);

  while (multiple <= gcd ) {
    multiple += lcm;
    if (gcd % multiple == 0) {
      result++;
    }
  }
  return result;
}
console.log(betweenTwoSets(arr1, arr2));
