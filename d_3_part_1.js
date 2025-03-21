// Creating an array
let fruits = ["apple", "banana", "orange"];

// Accessing elements by index
console.log(fruits[0]) ; // "apple"

// Modifying elements
fruits[1] = "mango" ;
console.log(fruits); // ["apple", "mango", "orange"]

// Adding elements to the end
fruits.push("grape");
console.log(fruits); // ["apple", "mango", "orange", "grape"]

// Removing the last element
fruits.pop();
console.log(fruits); // ["apple", "mango", "orange"]

// Adding elements to the beginning
fruits.unshift("lemon");
console.log(fruits); // ["lemon", "apple", "mango", "orange"]

// Removing the first element
fruits.shift();
console.log(fruits); // ["apple", "mango", "orange"]

// Check if array includes an item
console.log(fruits.includes("mango")); // true
console.log(fruits.includes("grape")); // false

// Find index of an item
console.log(fruits.indexOf("orange")); // 2

// Slice – get a part of the array (non-destructive)
let sliced = fruits.slice(0, 2);
console.log(sliced); // ["apple", "mango"]

// Splice – remove/replace items (destructive)
fruits.splice(1, 1); // Removes 1 item at index 1
console.log(fruits); // ["apple", "orange"]

// Join – convert array to string
let fruitString = fruits.join(", ");
console.log(fruitString); // "apple, orange"

// Looping through array with for...of
for (let fruit of fruits) {
    console.log(fruit);
}
// "apple", "orange"
