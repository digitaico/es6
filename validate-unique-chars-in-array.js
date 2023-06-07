'use strict';

// given a string,  check if characters are unique or not.
const s = 'malicosea';

const validateUniqueChars = (str) => {
  return [...str].sort().every((x, i, arr) => x !== arr[i + 1]);
}
console.log(validateUniqueChars(s))
