"use strict";
// example for interface => code not generated on index.js
Object.defineProperty(exports, "__esModule", { value: true });
const mong = {
    name: "mong",
    age: 22,
    gender: 'male'
};
const sayDoggy = (dog) => {
    return `Hello ${dog.name}, you are ${dog.age}, you are a ${dog.gender}`;
};
console.log(sayDoggy(mong));
// example for class => code generated on index.js
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 18, "female");
const sayHuman = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHuman(lynn));
//# sourceMappingURL=index.js.map