"use strict";

//Given a square matrix, calculate the absolute difference between the sums of its diagonals

const array = [
  [1, 0, 0],
  [4, 7, 6],
  [-16, 0, -2],
];
const n = array.length;
let diag = [];
let cdiag = [];

const diagonalDifference = (arr) => {
  for (let i = 0; i < n; i++) {
    diag.push(arr[i][i]);
    cdiag.push(arr[i][n - 1 - i]);
  }

  const diagonal = diag.reduce((acc, curr) => acc + curr, 0);
  const counterdiagonal = cdiag.reduce((acc, curr) => acc + curr, 0);
  return Math.abs(diagonal - counterdiagonal);
};

console.log(diagonalDifference(array));

/*
  lectura de csv tests 
   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

       const n = parseInt(readLine().trim(), 10);

           let arr = Array(n);

               for (let i = 0; i < n; i++) {
                       arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
                           }
                           */
