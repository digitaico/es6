"use strict";

const n = 3;
const grid = [".0O", ".O.", "O.."];

const splitArr = (arr) => {
  return arr.map((el) => el.split(""));
};

const changeState = (arr, x, y, newState) => {
  //
  console.log(x, y);
};

const fillGrid = (arr, target, replacement) => {
  return arr.map((el) => {
    return el.map((char) => (char = char.replace(target, replacement)));
  });
};

const joinArray = (arr) => {
  return arr.map((el) => el.join());
};

const getBombsToDetonate = (arr, stage) => {
  const res = [];
  arr.map((el, rindex) => {
    el.map((char, cindex) => {
      if (char == parseInt(stage - 3)) {
        res.push({ row: rindex, col: cindex });
      }
    });
  });
  return res;
};

const bombsToDetonateCoords = (arr) => {
  console.log(arr);
  // por cada bomo hay que modificar desde 1 hasta 4 puntos (row, col) / cada uno.
  let res = [];
  const l = arr.length - 1;
  for (let a = 0; a < arr.length; a++) {
    // row 0 : col 1 y col 3;
    // row 1: col 0 y col 2;
    // row 2: col 1;
    // row 3: col 0;
    // array de arrays en donde index es fila y cada array contine lista de columnas.
    // asi:::    [[1, 3], [0, 2], [1], [0]]
    //res.push( rU, cL, rD, cR );
    const el = arr[a];
    // para cada el.row, agregar a array en posicion el.row,  un array que contenga las cols cuyo row sea igual.
  }
  return res;
};

const detaonateBombs = (arr, arr2) => {
  console.log(arr);
  arr.map((coor) => {
    // ubicar fila y column y reemplazar en arr2.
  });
};
// ************* considerar generador - yield.

const bomberman = (n, grid) => {
  let tempGrid = splitArr(grid);
  if (n == 1) {
    return grid;
  }
  for (let s = 2; s <= n; s++) {
    switch (true) {
      case s == 2:
        tempGrid = fillGrid(tempGrid, "O", 0);
        tempGrid = fillGrid(tempGrid, ".", s);
        break;
      case s == 3:
        const listOfBombs = getBombsToDetonate(tempGrid, s);
        detaonateBombs(bombsToDetonateCoords(listOfBombs), tempGrid);
        break;
      case s > 3:
        //console.log(tempGrid);
        break;
    }
  }
  return tempGrid;
  //return joinArray(tempGrid);
};
console.log(bomberman(n, grid));
