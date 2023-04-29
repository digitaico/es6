"use strict";

const map0 = new Map();

map0.set(1, 1054);
map0.set(4, "Sinforoso");
map0.set(2, 4525);
map0.set(7, "Malina Kubow");
map0.set(9, "Amat Ibrahim");

for (const [key, value] of map0) {
  console.log(`-- ${key}: ${value}`);
}

map0.forEach((key, value) => {
  console.log(`@@ ${key} :: ${value} --`);
});

console.log(`++ ${map0.get(9)}`);
