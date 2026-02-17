
let name = "Sachin";
let age = 21;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);


let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("Swapped values:", a, b);


let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x);


const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area:", area);

let num1 = 10;
let num2 = 3;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

console.log(5 + "5");
console.log(5 - "2");
console.log(true + 1);


let number = 100;

if (number > 100)
    console.log("Greater than 100");
else if (number === 100)
    console.log("Equal to 100");
else
    console.log("Less than 100");


console.log(5 == "5");
console.log(5 === "5");


let checkAge = 25;

if (checkAge >= 18 && checkAge <= 60)
    console.log("Eligible");
else
    console.log("Not Eligible");


let n = 7;

if (n % 2 === 0)
    console.log("Even");
else
    console.log("Odd");


let fizzNum = 15;

if (fizzNum % 3 === 0 && fizzNum % 5 === 0)
    console.log("FizzBuzz");
else if (fizzNum % 3 === 0)
    console.log("Fizz");
else if (fizzNum % 5 === 0)
    console.log("Buzz");


let day = 3;

switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid");
}


for (let i = 1; i <= 20; i++) {
    console.log(i);
}


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)
        console.log("Even:", i);
}


let limit = 5;
let i = 1;
let sum = 0;

while (i <= limit) {
    sum += i;
    i++;
}

console.log("Sum:", sum);


for (let j = 1; j <= 10; j++) {
    if (j === 5) continue;
    if (j === 8) break;
    console.log("Number:", j);
}


function add(a, b) {
    return a + b;
}
console.log("Add:", add(5, 3));


const addArrow = (a, b) => a + b;
console.log("Arrow Add:", addArrow(4, 6));


function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
console.log("Is 7 prime?", isPrime(7));


function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse:", reverseString("hello"));


function test() {
    return;
    console.log("Hello");
}
test();


function largest(arr) {
    return Math.max(...arr);
}
console.log("Largest:", largest([10, 25, 5, 40]));



function calculateGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
}

let studentMarks = 82;
let grade = calculateGrade(studentMarks);

console.log("Student Marks:", studentMarks);
console.log("Grade:", grade);
