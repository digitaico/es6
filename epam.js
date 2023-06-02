'use strict';

const array = [7, 7, 5,, 5, 1, 3, 7, ,9, 3, 16, 12, 9, 23, 14, 3, 1, 5, 16, 3];
var a = 5;
var b = a;
a = 7;

//console.log(`a: ${a} b: ${b}`);
var arr = [1];
var arr2 = arr;
arr.push(4)
//console.log(`arr: ${arr} arr2: ${arr2}`);

// function to add (3)(4) currying
const add = (a) => {
  return (b) => {
    return a + b;
};
};
//console.log(add(3)(4));

// funtion to remove repested numbers from array
const removeDuplicates = (arr) => {
  const data = [];
  arr.map((el) => {
    if(!data.includes(el)) {
      data.push(el)
    }
  })
  return data;
} 
//console.log(removeDuplicates(array))

// return nth largest member of array
const returnNthLargest = (arr, n) => {
  return arr.sort((a, b) => b - a)[n];
} 
//console.log(returnNthLargest(array, 2))

// next bigger number: given a positive integer, return the bigger number formed by same digits: ex: 12 - 21; 135 - 531, 2017 
// - 7210, 
const num = 705;
const getBiggerNum = (num) => {
  // ordenar de mayor a menir.
  return Number(String(num).split('').sort((a,b) => b - a).join(''));
};

//console.log(getBiggerNum(num))

// Magic Latin:  Move first letter of each word to end of it and add 'ay': 'Magic latin is cool' => 'agicMay atinlay siay 
// oolcay // 'Hello world' => 'elloHay orldWay'
const str = 'Jorge Eduardo Ardila';
const magicLatin = (str) => {
  const raw = str.split(' ').map((word) => word.split(''));
  raw.map((w) => w.push(w.shift() + 'ay'));
  return raw.map((e) => e.join('')).join(' ');
}
//console.log(magicLatin(str))

// Valid Parenthesis:
// take a string of parenthesis and return if it's order is correct.  @ param string @ return boolean
const str1 = '()'; 


// Binary number divisible by 5.
// test if a given string that represents a binary number is divisible by 5. 101 : true, 1000000111 true.
const binaryDivuisibleByFive = () => {
  const num = 666;
  const binary = (num).toString(2);
  return binary % 5;
} 
//console.log(binaryDivuisibleByFive())


// async/await, promises
// write and resolve a promise, then rewrite with async/await.
const example = new Promise((resolve, reject) => {
  //
});

// this
const obj = {
  name: this,
  foo: function () {
    return this
  }
}

function bar() {
  return this;
}
//console.log(obj.name);
//console.log(obj.foo());
//console.log(bar());

// call() method
const person1 = {
  firstName: 'Jorge',
  lastNmae: 'Ardila',
  fullName: function() {
    return this.firstName + this.lastName
  }
}
const person2 = {
  firstName: 'Jason',
  lastName: 'Perez'
}
console.log(person1.fullName.call(person2));
