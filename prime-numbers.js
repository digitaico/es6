'use strict';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 == 0 && num > 2) return false;
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
} 

console.log(isPrime(215))
