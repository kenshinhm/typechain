"use strict";
// example for interface => code not generated on index.js
Object.defineProperty(exports, "__esModule", { value: true });
const puppy = {
    name: "mongmong",
    age: 22,
    gender: 'male'
};
const sayDoggy = (dog) => {
    return `Hello ${dog.name}, you are ${dog.age}, you are a ${dog.gender}`;
};
console.log(sayDoggy(puppy));
//# sourceMappingURL=interface.js.map