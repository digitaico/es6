var q = [2, 1, 5, 3, 4];

var isOrdered = function (arr) {
    return arr.every(function (x, i) {
        return i === 0 || x >= q[i - 1];
    });
};
//console.log(isOrdered(q));

const bribes = (q) => {
    const que = [1,2,3,4,5,6,7,8];
    const res = [];
    // comparar dos colas: final con inicial
    // comparar posiciones: findIndex(el);
    // estimar diferencia entre posicion inicial y final.
    q.forEach((el, index) => {
        if (el != que[index]) {
            res.push(index);
        }
    })
    return res;
}

console.log(bribes(q));
