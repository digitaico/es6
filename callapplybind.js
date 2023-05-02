"use strict";

function hello() {
  return `Hola ${this.name}`;
}

const obj = {
  name: "Jorge Eduardo",
  age: 53,
  id: 79502033,
  getAge: function () {
    return this.age;
  },
  getData: function (value1, value2) {
    return `${this.age} :: ${value1} -- ${value2}`;
  },
};
const obj2 = {
  age: 25,
};

console.log(`.1. ${hello.call(obj)}`);
console.log(`.2. ${hello.apply(obj)}`);
console.log(`.3. ${obj.getAge.call(obj2)}`);
const dd = obj.getData.bind(obj2, "foforro", "pirata");
console.log(dd());

// this -> arrow functions
let obj3 = {
  a: 100,
  fun1() {
    let a = 20;
    let fun2 = () => {
      console.log(this.a);
    };
    fun2();
  },
};

console.log(obj3.fun1());
