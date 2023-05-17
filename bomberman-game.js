"use strict";

const n = 3;
const grid = ["...", ".O.", "..."];

const splitArr = (arr) => {
  return arr.map((el) => el.split(""));
};

const fillGrid = (arr, target, replacement) => {
  return arr.map((el) => {
    return el.map((char) => char.replaceAll(target, replacement));
  });
};

const joinArray = (arr) => {
  return arr.map((el) => el.join());
};

const bombDetonates = (arr, cell) => {
  // ubicar coordenadas de bombas a detonar.
  // unicar cooderandas de celdas a despejar por detonacion
  // reemplazar valores en cooredenas: limpiar.
};

// ************* considerar generador - yield.

const bomberman = (n, grid) => {
  let tempGrid = splitArr(grid);
  if (n == 1) {
    return grid;
  }
  for (let s = 2; s <= n; s++) {
    switch (s) {
      case 2:
        tempGrid = fillGrid(tempGrid, "O", "3");
        tempGrid = fillGrid(tempGrid, ".", "2");
        break;
      case 3:
        //tempGrid = fillGrid(tempGrid, "2", "x");
        break;
      // bombs planted 3 secs ago detonate.
    }
  }
  //return tempGrid;
  return joinArray(tempGrid);
};
console.log(bomberman(n, grid));
