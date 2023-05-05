"use strict";

//const arr = [1, -1, 0, "1", +"-1", 101];
const arr = [-4, 3, -9, 0, 4, 1];
//const arr = [ 55, 48, 48, 45, 91, 97, 45, 1, 39, 54, 36, 6, 19, 35, 66, 36, 72, 93, 38, 21, 65, 70, 36, 63, 39, 76, 82, 26, 67, 29, 24, 82, 62, 53, 1, 50, 47, 65, 67, 19, 66, 90, 77, ];
const PlusMinus = (arr) => {
  const n = arr.length;
  let pos = 0;
  let neg = 0;
  let zer = 0;
  const data = new Map();
  data.set("positives", pos);
  data.set("negatives", neg);
  data.set("zeroes", zer);

  const summarize = (arr, obj) => {
    if (arr.length > 0 && arr.length <= 100) {
      arr.forEach((el) => {
        if (el <= 100 && el >= -100) {
          if (typeof el == "number" && el > 0) {
            pos++;
            obj.set("positives", pos);
          } else if (typeof el == "number" && el < 0) {
            neg++;
            obj.set("negatives", neg);
          } else if (typeof el == "number" && el === 0) {
            zer++;
            obj.set("zeroes", zer);
          }
        }
      });
    }
  };

  const plusminus = (obj) => {
    summarize(arr, data);
    obj.forEach((val) => {
      console.log((val / n).toFixed(6));
    });
  };

  return plusminus(data);
};

console.log(PlusMinus(arr));
