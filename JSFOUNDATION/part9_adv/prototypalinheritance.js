function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

let naman = new Person('Naman');
naman.greet(); // Hello, my name is Naman