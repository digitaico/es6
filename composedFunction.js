const splitString = (str) => {
  return str.replace(/\W/g, "").split("");
};

const invertArray = (array) => {
  return array.reverse();
};

const joinArray = (array) => {
  return array.join("");
};
const compose =
  (...functions) =>
  (str, char) =>
    functions.reduceRight((acc, currFunc) => currFunc(acc), str);

const composedReverseString = compose(joinArray, invertArray, splitString);

console.log(composedReverseString("Colombia"));
