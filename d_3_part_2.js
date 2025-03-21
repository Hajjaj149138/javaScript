// Creating an object
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

// Accessing properties (dot notation)
console.log(person.name); // "Alice"

// Accessing properties (bracket notation)
console.log(person["age"]); // 25

// Modifying property
person.age = 26;
console.log(person.age); // 26

// Adding a new property
person.city = "New York";
console.log(person.city); // "New York"

// Deleting a property
delete person.isStudent;
console.log(person); 
// { name: "Alice", age: 26, city: "New York" }

// Check if a property exists
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("isStudent")); // false

// Object.keys – get array of keys
let keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

// Object.values – get array of values
let values = Object.values(person);
console.log(values); // ["Alice", 26, "New York"]

// Object.entries – get array of [key, value] pairs
let entries = Object.entries(person);
console.log(entries); 
// [["name", "Alice"], ["age", 26], ["city", "New York"]]

// Loop through object with for...in
for (let key in person) {
    console.log(key + " : " + person[key]);
}
// name : Alice
// age : 26
// city : New York

// Array of objects example
let products = [
    { name: "Pen", price: 10 },
    { name: "Book", price: 50 }
];

// Loop through array of objects
for (let product of products) {
    console.log(product.name + " costs " + product.price);
}
// Pen costs 10
// Book costs 50
