"use strict";

const n = 3;
const grid = ["...", ".OO", "..O"];

const splitArr = (arr) => {
  return arr.map((el) => el.split(""));
};

const changeState = (arr, coords, newState) => {
  //
  //console.log(x, y);
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
  // coords de bomba inicial,  faltan bombas vecinas.
  console.log(arr);
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i]["row"];
    //    const aboveRow = arr[i]["row"] + 1;
    //    const belowRow = arr[i]["row"] - 1;
    if (res.hasOwnProperty(row)) {
      res[row].push(arr[i]["col"]);
      //res[row].push(arr[i]["col"] - 1);
      //res[row].push(arr[i]["col"] + 1);
    } else {
      res[row] = [];
      res[row][0] = arr[i]["col"];
      //console.log(arr[i]["col"] + 1);
    }
  }
  console.log(res);
  return res;
};

const detonateBombs = (arr, coords) => {
  Object.entries(coords).map(([row, col]) => {
    col.map((digit) => {
      arr[row][digit] = arr[row][digit].replace("0", ".");
    });
  });
  return arr;
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
        console.log(bombsToDetonateCoords(getBombsToDetonate(tempGrid, s)));
        //detonateBombs( tempGrid, bombsToDetonateCoords(getBombsToDetonate(tempGrid, s)));
        //console.log(tempGrid);
        break;
      case s > 3:
        console.log(tempGrid);
        break;
    }
  }
  //return tempGrid;
  //return joinArray(tempGrid);
};
console.log(bomberman(n, grid));
