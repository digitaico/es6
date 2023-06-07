"use strict";
// HackerRank
// mini-max sum

const arr = [1, 2, 3, 4, 5];

function returnMinMax(arr) {
  const arrSorted = arr.sort((a, b) => a - b);

  const arrMin = [...arrSorted];
  arrMin.pop();
  let sumMin = arrMin.reduce((x, y) => x + y, 0);

  const arrMax = [...arrSorted];
  arrMax.shift();
  let sumMax = arrMax.reduce((x, y) => x + y, 0);

  console.log(`${sumMin}, ${sumMax}`);
}

returnMinMax(arr);
