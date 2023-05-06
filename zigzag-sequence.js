"use strict";

//const a = [2, 3, 5, 1, 4];
const a = [7, 2, 5, 4, 3, 6, 1, 12, 21, 32, 11];
// R = [1,4,5,3,2]
// R = [1,2,3,7,6,5,4]

const zigzagSequence = (a) => {
  const k = +((a.length + 1) / 2);
  const aor = [...a].sort((a, b) => a - b);

  const max = [...aor].pop();
  aor.pop();
  aor.splice(k - 1, 0, max);

  const aor1 = [...aor].slice(0, k - 1).sort((a, b) => a - b);
  const aor2 = [...aor].slice(k, a.length).sort((a, b) => b - a);
  const aorm = [...aor].slice(k - 1, k);
  const res = [...aor1, ...aorm, ...aor2];
  return res;
};

console.log(zigzagSequence(a));
