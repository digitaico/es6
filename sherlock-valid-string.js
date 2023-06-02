'use strict';

const s= 'aabccddee';

const isValidString = (s) => {
  // usando reduce contar chars.
  // si un char es mayor,  eliminar 1 ocurrencia de char.
  // volver a contar. Si hay uno mayor,  retorna NO, si todos iguales, retorna YES.
  // no brute force approach:  Valid cases:
  // case 1: all frequencies are the same.
  // case 2: all frequencies are same,  One frequency is one (remove this -> all same)
  // case 3: all frequencies are same,  One is higher by one (remove this -> all same)
  // other cases are not valid.
  const cuantos = s.split('').reduce((obj, char) => {
    if(!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
    return obj
  }, {}, 0);
  console.log(cuantos)

  const res = Object.values(cuantos).sort((a, b) => a - b);
  console.log(res)

  const areEqual = res.every((val) => val === res[0]);
  const first = res[0];
  const second = res[1];
  const secondLast = res[res.length - 2];
  const last = res[res.length - 1];

  if (areEqual) {
    return 'YES';
  } 
  if (first ===  1 && (second === last )) {
    // si todos iguales excepto 1 igual a 1.
    return 'YES';
  } 
  if ( first === secondLast && secondLast === last - 1)  {
    return 'YES';
  }  
  return 'NO';
}

  console.log(isValidString(s));
