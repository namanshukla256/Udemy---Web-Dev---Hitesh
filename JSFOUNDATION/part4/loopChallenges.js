/*
let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i; // sum = sum + 1
    i++; // i = i + 1
}
console.log(sum);
*/

/*

2. using while loop that counts from 5 to 1 and 
strores the number in an array named ‘countdown’



let countdown = []
let j = 5;
while ( j > 0) {
    countdown.push(j);
    j--;
}
console.log(countdown);

*/

/*
3. Write a `do while` loop` that prompts
a user to enter thier favorite tea typpes untul they
enter the word ‘stop’ and stores each tea
type in an array named `teaCollection`.


let teaCollection = [];
let tea;

do {
   tea = prompt("Enter your favorite tea type");

   if (tea !== "stop") {
       teaCollection.push(tea);
   }

} while (tea !== "stop");



/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

/*

let total = 0;

let k = 1;
do {
    total = total + k;
    k++;
}   while (k <= 3);

console.log(total);




/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

/*

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l <= numbers.length; l++) {
    takeNumber = numbers[l] * 2;
    multipliedNumbers.push(takeNumber);

    // multipliedNumbers.push(numbers[l] * 2);
}

console.log(multipliedNumbers);

*/

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cityList = [];

let cities = [
    "Paris",
    "New York",
    "Tokyo",
    "London"
]

for (let m = 0; m < cities.length; m++) {
    const city = cities[m];
    cityList.push(city);
}

console.log(cityList);