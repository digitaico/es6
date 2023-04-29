"use strict";

function* generator(val, args) {
  let x = 0;
  while (x < val) {
    yield x * 2 + ` ${args}`;
    x++;
    //console.log(`--- ${i}`);
  }
}
const val = 12;

const gen = generator(val, ".. cualquier string. ");
for (let i = 0; i <= val; i++) {
  console.log(gen.next()); // .value .done
}
