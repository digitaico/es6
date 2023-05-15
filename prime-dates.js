"use strict";

// given two date,  each formatted: 'dd-mm-yyyy';
// return number of lucky dates between given dates : INT.
// lucky date is a date transformet to number and divisible by either 4 or 7.

// parsear dates y generar rango de fechas.
// convertir lista a numeros
// varificar cuales son lucky numbers
//
const date1 = "01-01-7580";
const date2 = "26-07-9834";

const conformDate = (str) => {
  const splitDate = str.split("-");
  return new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
};

const formatDate = (str) => {
  const d = str.getDate();
  const m = str.getMonth() + 1;
  const y = str.getFullYear();
  return `${d}${m < 10 ? "0" + m : m}${y}`;
};

const getRangeOfDates = (s, e) => {
  const arr = [];
  for (s; s <= e; s.setDate(s.getDate() + 1)) {
    arr.push(parseInt(formatDate(new Date(s))));
  }
  return arr;
};

const countLuckyDates = (arr) => {
  let count = 0;
  arr.map((date) => (date % 4 == 0 || date % 7 == 0 ? count++ : ""));
  return +count;
};

const primeDates = (s, e) => {
  const rangeOfDates = getRangeOfDates(conformDate(s), conformDate(e));
  return countLuckyDates(rangeOfDates);
};

console.log(primeDates(date1, date2));
