'use strict';

const leaderboard = [100, 100, 50, 40, 40, 20, 10];
const game = [5, 25, 50, 120];

const climbingLeaderboard = (ranked, player) => {
  // remover dupes y ordenar asc.
  const rankedSort = [...new Set(ranked)].sort((a, b) => a - b);
  player = player.sort((a, b) => a - b);

  const res = [];
  let j = 0;
  const l = rankedSort.length;

  console.log(rankedSort);
  console.log(player);

  for (const i of player) {
    while (j < l && player[i] <  rankedSort[j] ) { 
      j++;
      res.push(j + 1)
    }
  }
  return res;

}

console.log(climbingLeaderboard(leaderboard, game))


