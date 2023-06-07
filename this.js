'use strict';

const obj = {
  id: 1,
  name: 'Pepe',
  status: true,
  getName: function () {
    console.log(this.name);
  }
}

var getName = obj.getName;

const obj2 = {
  name: 'Sonia',
  getName
}
obj2.getName();
