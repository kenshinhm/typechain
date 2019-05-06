// example for interface => code not generated on index.js

interface Dog {
    name: string,
    age: number,
    gender?: string
}

const puppy: Dog = {
    name: "mongmong",
    age: 22,
    gender: 'male'
};

const sayDoggy = (dog: Dog): string => {
    return `Hello ${dog.name}, you are ${dog.age}, you are a ${dog.gender}`;
};

console.log(sayDoggy(puppy));

export {};