"use strict";
// given a square grid of ascii [a-z] characters,  rearrange alpahbetically at each row.  After,  check y each column is also
// ascending orderes,  return YES or NO.
//
//const n = 5; // tamaño de grupo de chars.
const grid = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
const convertToArray = (str) => {
  return str
    .map((el) => {
      return [...el].sort();
    })
    .flat();
};
// para verificar orden en columnas,  comparar cada valor en posicion i;  codigo ascii.
const mapLetters = (array) => {
  return array.map((char) => {
    return char.charCodeAt(0);
  });
};

const gridChallenge = (grid) => {
  const arr = convertToArray(grid);
  const charMap = mapLetters(arr);
  const n = grid[0].length;
  let total = 0;
  for (let i = 0; i < charMap.length; i++) {
    if (charMap[i] > charMap[i + n]) {
      total++;
    }
  }
  return total == 0 ? "YES" : "NO";
};
console.log(gridChallenge(grid));
