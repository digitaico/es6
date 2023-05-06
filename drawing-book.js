"use strict";

// open book to a page number. page 1 always on right side.
const paginas = 15; // length of the book.
const pagina = 9; // page where to open the book.
// get minimum number of pages to turn?

// open book in page p= 6
// build an array that represents book and its page arrangement.
// to find minimum number of pages to turn : t,  locate p in arrays.
// get array position
// t1: distancia abriendo desde espalda = (length - 1) - array position.
// t2: distancia abriendo desde frente = array position +  1;
// resultado t = minimo entre t1 y t2.

const drawingBook = (n, p) => {
  const book = new Map();
  for (let i = 0; i <= n / 2; i++) {
    book.set(i, [i * 2, i * 2 + 1]);
  }
  const pos = [];
  book.forEach((arr, index) => {
    return arr.includes(p) ? pos.push(index) : "";
  });
  const frn = pos[0];
  const esp = parseInt(n / 2 - pos[0]);

  return frn < esp ? frn : esp;
};
console.log(drawingBook(paginas, pagina));
