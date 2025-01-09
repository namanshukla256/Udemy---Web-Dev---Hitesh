/*
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
}

*/

// Encapsulation

// class BankAccount {
//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//         return this.#balance;
//     }

//     getBalance() {
//         return `$ ${this.#balance}`;
//     }
// }

// let account = new BankAccount();
// account.deposit(100);
// console.log(account.getBalance());


//Abstraction

// class CoffeeMachine {
//     start(){
//         // call DB
//         return `Starting the coffee machine`;
//     } 

//     brewCoffee(){
//         // complex Calculation
//         return `Brewing coffee`;
//     }

//     pressStartButton(){
//        let msgone = this.start();
//        let msgtwo = this.brewCoffee();
//        return `${msgone} + ${msgtwo}`
//     }
// }

// let myMachine = new CoffeeMachine();
// // console.log(myMachine.start());
// // console.log*(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


// Polymorphism
// class Bird {
//     fly() {
//         return `The bird is flying`;
//     }
// }

// class Penguin extends Bird {
//     fly(){
//         return `The penguin is swimming`;
//     }
// }

// let bird = new Bird()
// let penguin = new Penguin()

// console.log(bird.fly());
// console.log(penguin.fly());



// // Static Methods

// class Calculator {
//     static add(a,b) {
//         return a + b;
//     }
// }

// // let miniCalc = new Calculator();
// // console.log(miniCalc.add(2,3));

// console.log(Calculator.add(2,3));


// Getters and Setters

class Employee{

    #salary;
    constructor(name, salary){
        if (salary < 0) {
            throw new Error(`Invalid salary`);
        }
        this.name = name;
        this.#salary = salary;  
    }

    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if(value <0){
            console.error(`Invalid salary`);
        } else {
            this.salary = value;
        }
    }
}

let emp = new Employee("John", -50000);
console.log(emp._salary);
emp.salary = -60000;
