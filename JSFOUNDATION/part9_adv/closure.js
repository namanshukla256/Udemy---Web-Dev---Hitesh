function outer() {
    let counter = 6;
    return function() {
        return counter++;
    }
}

let increment = outer();
console.log(increment()); // 6
console.log(increment()); // 7
console.log(increment()); // 8
