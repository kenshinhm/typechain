"use strict";
// example for class => code generated on index.js
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=class.js.map