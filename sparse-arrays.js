"use strict";

const strings = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

const matchingStrings = (arr0, arr1) => {
  // 1. recorrer queries con map para retornar array.
  // 2. para cada elemewnto en queries,  contar existencia en strings:
  // 3. punto 2 se resuleve asi:
  // 	3.1 reduce.  cuantas acurrencias de str hay en array.
  let total = [];
  arr1.forEach((query) => {
    let sum = 0;
    arr0.forEach((string) => {
      if (string == query) {
        sum++;
      }
    });
    total.push(sum);
  });
  return total;
};

console.log(matchingStrings(strings, queries));
