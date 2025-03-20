// 📝 Assignments for Day 2
// ✅ 1. Operators Practice:
// Create variables a, b and perform all arithmetic operations on them.
// Use comparison operators to check if a is equal to b.
// Use logical operators to check if both a and b are greater than 0.

let a = 10;
let b = 5;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;
let exponentiation = a ** b;

console.log(addition);        // 15
console.log(subtraction);     // 5
console.log(multiplication);  // 50
console.log(division);        // 2
console.log(modulus);         // 0
console.log(exponentiation);  // 100000

// Comparison
console.log(a == b);          // false

// Logical: Are both greater than 0?
console.log(a > 0 && b > 0);  // true


// ✅ 2. Conditional Statements:
// Create a variable age and write a program using if, else if, and else to print:
// "Minor" if age < 18
// "Adult" if age >= 18 but < 65
// "Senior" if age >= 65

let age = 111 ;

if (age < 18) {
    console.log("Minor");
} else if (age >= 18 && age < 65) {
    console.log("Adult");
} else {
    console.log("Senior")
}

// ✅ 3. Looping Practice:
// Use a for loop to print numbers 1 to 10.
// Create an array names = ["John", "Jane", "Tom"] and loop through it using for...of.
// Create an object person = { name: "Alice", age: 30 } and loop through it using for...in.


for (let i = 1 ; i <= 10 ; i++) {
    console.log(i);
}

let names = ["John", "jane", "Tom"];
for (let name of names) {
    console.log(name);
}

let person = { name: "Alica", age: 30 };
for (let key in person) {
    console.log(key + " : " + person[key]);
}