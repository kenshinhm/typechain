// example for interface => code not generated on index.js

interface Dog {
    name: string,
    age: number,
    gender?: string
}

const mong: Dog = {
    name: "mong",
    age: 22,
    gender: 'male'
};

const sayDoggy = (dog: Dog): string => {
    return `Hello ${dog.name}, you are ${dog.age}, you are a ${dog.gender}`;
};

console.log(sayDoggy(mong));

// example for class => code generated on index.js

class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

const sayHuman = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHuman(lynn));

export {};