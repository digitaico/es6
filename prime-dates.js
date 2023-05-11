"use strict";

// given two date,  each formatted: 'dd-mm-yyyy';
// return number of lucky dates between given dates : INT.
// lucky date is a date transformet to number and divisible by either 4 or 7.

// parsear dates y generar rango de fechas.
// convertir lista a numeros
// varificar cuales son lucky numbers
//
const date1 = "02-08-2024";
const date2 = "10-08-2024";

const conformDate = (str) => {
  const splitDate = str.split("-");
  return new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
};

const formatDate = (str) => {
  return str.toLocaleDateString("en-GB");
};

const getRangeOfDates = (s, e) => {
  const arr = [];
  for (s; s <= e; s.setDate(s.getDate() + 1)) {
    arr.push(
      formatDate(new Date(s))
        .split("/")
        .map((el) => el)
    );
  }
  return arr;
};

const conformDateStrings = (arr) => {
  return arr
    .map((list) => list.join(""))
    .map((date) => {
      return date[0] != 0 ? date : date.split("").slice(1, -1).join("");
    });
};

const getDateNumbers = (arr) => {
  return arr.map((date) => parseInt(date));
};

const countLuckyDates = (arr) => {
  let count = 0;
  arr.map((date) => (date % 4 == 0 || date % 7 == 0 ? count++ : ""));
  return count;
};

const getLuckyDates = (s, e) => {
  const rangeOfDates = getRangeOfDates(conformDate(s), conformDate(e));
  const stringDates = conformDateStrings(rangeOfDates);
  const dateNumbers = getDateNumbers(stringDates);
  return countLuckyDates(dateNumbers);
};

console.log(getLuckyDates(date1, date2));
