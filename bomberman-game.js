"use strict";

const n = 3;
const grid = ["...", ".O.", "..."];

const splitArr = (arr) => {
  return arr.map((el) => el.split(""));
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
  let res = [];
  arr.map((el, rindex) => {
    el.map((char, cindex) => {
      if (char == parseInt(stage - 3)) {
        res.push({ row: rindex, col: cindex });
        // bombas que detonan por efecto de detonacion vecina.
        res.push({ row: rindex - 1 < 0 ? 0 : rindex - 1, col: cindex });
        res.push({ row: rindex + 1 > arr.length ? rindex : rindex + 1, col: cindex });
        res.push({ row: rindex, col: cindex + 1 > el.length ? cindex : cindex - 1});
        res.push({ row: rindex, col: cindex - 1 < 0 ? 0 : cindex - 1 });
      }
    });
  });
  // eliminar duplicados {row: x, col: y }
  res.filter(
    (v, i, a) => a.findIndex((v2) => v2.col === v.col && v2.row === v.row) === i
  );
  return res;
};

const bombsToDetonateCoords = (arr) => {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i]["row"];
    if (row in res) {
      res[row].push(arr[i]["col"]);
    } else {
      res[row] = [];
      res[row][0] = arr[i]["col"];
    }
  }
  return res;
};

const detonateBombs = (arr, coords) => {
  Object.entries(coords).map(([row, col]) => {
    col.map((digit) => {
      arr[row][digit] = "0";
    });
  });
  return arr;
};

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
        const lobtd = bombsToDetonateCoords(getBombsToDetonate(tempGrid, s));
        detonateBombs(tempGrid, lobtd);
        break;
      case s > 3:
        // crear  funcion que gestione pasos 2 y 3 y hacerla recursiva.
        console.log(tempGrid);
        break;
    }
  }
  //return tempGrid;
  //sustituir chars: 0, s, por O, .
  return joinArray(tempGrid);
};
console.log(bomberman(n, grid));
