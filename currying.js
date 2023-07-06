"use strict";

// currying
function sum(a) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return (b) => {
      return a + b;
    };
  }
}

console.log(sum(4, 3));
console.log(sum(16)(31));

const add = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(add(15)(13));

const add2 = (a) => {
  return (b, c) => {
    return a + b + c;
  };
};
console.log(add2(3)(4, 7));

const add3 = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(add3(5)(4)(7));
console.log(add3(6)(6)(6));
