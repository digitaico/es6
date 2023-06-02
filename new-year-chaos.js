var q = [2, 5, 1, 3, 4];
var isOrdered = function (arr) {
    arr.every(function (x, i) {
        return i === 0 || x >= q[i - 1];
    });
};
console.log(isOrdered(q));
/*
const minimumBribes(q: number[]): void => {
  let minBribes = 0;
  const nChanges = new Array(q.length).fill(0);

  while(!isOrdered(q)) {
    for (let i = 0; i < q.length - 1; i++) {
      if(q[i] > q[i + 1]) {
        nChanges[q[i] - 1]++

      }
    }
  }
}
*/
