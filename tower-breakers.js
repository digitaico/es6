"use strict";

// Two players play Tower Breakers game.  Player 1 always start first.
// wins whoever reduces any tower height to 1,  by removing quantity divisible by 1 or removing quantity % 2 == 0,  less than height.

const n = 2; // 2 towers
const m = 6; // each tower height is 6

const towerBreakers = (n, m) => {
  return m == 1 || n % 2 == 0 ? 2 : 1;
};

console.log(towerBreakers(n, m));

/*
 Solution:
 if tower height (m) == 1,  player 2 always win,  because player 1 cannot do anything,  cannot reduce tower.
 if towers numbers or quantity (n) == 1,  Player 1 always wins. He can reduce and left it of height 1,  winning tha game.
	even number of towers: Player 2 always wins
	odd number of towers: Player 1 always wins.

 * */
