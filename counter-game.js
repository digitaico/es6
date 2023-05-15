"use strict";

// given a number, check if it's a power of 2.
// Yes: power of 2 => divide by 2, pass result to next player.
// NO: look for next minor power of 2 -> q,  substract n from q = t divide t by 2 pass to next player,
// Whoever reduces the number to 1, wins the game.  L always start-
// Given an initial value, return who wins the game,  L starts first.

// L -> 132 not power of 2.
// L -> 132 - 128 = 4;
// R -> 4 is power of 2 so divided by 2 = 2;
// L -> 2 / 2 = 1.
// L wins.
const n = 132;
const player = 0; // L = 0; R = 1,

const checkNumberIsPower = async (x, y) => {
  if (y !== 1) {
    while (+x % +y == 0) {
      x = +x / +y;
    }
    return x == 1;
  } else {
    return true;
  }
};

const getClosestSmaller = async (x) => {
  x |= x >> 1;
  x |= x >> 2;
  x |= x >> 4;
  x |= x >> 8;
  x |= x >> 16;
  x |= x >> 32;
  x = x + 1;
  x = x >> 1;
  return x;
};

const getNextNumber = async (n) => {
  const t = await getClosestSmaller(n);
  return n - t;
};

const counterGame = async (n, player) => {
  if (checkNumberIsPower(n, 2)) {
    n = n / 2;
    player = 1;
    await counterGame(n, player);
    console.log(`p: ${player} n: ${n}`);
  } else {
    n = getNextNumber(n);
    await counterGame(n, player);
    console.log(`p: ${player} n: ${n}`);
  }
};

(async () => {
  await counterGame(n, player);
})();
