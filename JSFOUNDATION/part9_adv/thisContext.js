const person = {
    name: 'Naman',
    greet() {
        console.log(`Hi, I am ${this.name}`);
    },
};

person.greet(); // Hi, I am Naman  

const greetFunction = person.greet;
greetFunction(); // Hi, I am undefined

// The greet function is called without any context, so this is undefined.

// To fix this, we can bind the greet function to the person object.
const boundGreetFunction = person.greet({ name: "Naman"})
boundGreetFunction(); // Hi, I am Naman