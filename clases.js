"use strict";
// Classes

class Prueba {
  constructor(name, age, id, status) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.status = status;
  }

  getName = async () => {
    return `>> Datos Personales
    Nombre: ${this.name}
    Edad: ${this.age}
    Estado: ${this.status}
    Id #: ${this.id}
    <<`;
  };
}

const prueba = new Prueba("Mafaldo Perez", 28, 79502033, true);
console.log(prueba.getName());
