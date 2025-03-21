// 🔹 Part 1 – Arrays Practice

// 1. Create colors array
let colors = ["red", "green", "blue"];

// Add "yellow" at the end
colors.push("yellow");
console.log(colors); 
// ["red", "green", "blue", "yellow"]

// Remove "red" from the start
colors.shift();
console.log(colors); 
// ["green", "blue", "yellow"]

// Check if "blue" is included
console.log(colors.includes("blue")); 
// true

// Copy "green" and "blue" using slice
let slicedColors = colors.slice(0, 2);
console.log(slicedColors); 
// ["green", "blue"]

// Join array into string with "-"
let joinedColors = colors.join(" - ");
console.log(joinedColors); 
// "green - blue - yellow"



// 2. Array of numbers 1 to 10
let numbers = [1,2,3,4,5,6,7,8,9,10];

// Loop through with for...of
for (let num of numbers) {
    console.log(num);
}

// Remove numbers 5 and 6 using splice (index 4 and remove 2 items)
numbers.splice(4, 2);
console.log(numbers); 
// [1,2,3,4,7,8,9,10]


// 3. Bonus: Modify fruits array
let fruits = ["apple", "banana", "cherry", "orange"];

// Find index of "cherry"
let cherryIndex = fruits.indexOf("cherry");
console.log(cherryIndex); 
// 2

// Replace "banana" with "grape" (index 1)
fruits.splice(1, 1, "grape");
console.log(fruits); 
// ["apple", "grape", "cherry", "orange"]



// 🔹 Part 2 – Objects Practice

// 1. Create student object
let student = {
    name: "Tom",
    age: 20,
    grade: "A"
};

// Change age to 21
student.age = 21;

// Add new property isPassed: true
student.isPassed = true;

// Delete grade property
delete student.grade;

console.log(student); 
// { name: "Tom", age: 21, isPassed: true }


// 2. Object Methods

// Get keys
let keys = Object.keys(student);
console.log(keys); 
// ["name", "age", "isPassed"]

// Get values
let values = Object.values(student);
console.log(values); 
// ["Tom", 21, true]

// Get entries (key-value pairs)
let entries = Object.entries(student);
console.log(entries); 
// [["name", "Tom"], ["age", 21], ["isPassed", true]]


// 3. Loop through student with for...in
for (let key in student) {
    console.log(key + " : " + student[key]);
}
// name : Tom
// age : 21
// isPassed : true


// 4. Bonus: Array of Objects
let books = [
    { title: "Book A", price: 100 },
    { title: "Book B", price: 200 }
];

// Loop through and print formatted text
for (let book of books) {
    console.log(book.title + " costs " + book.price);
}
// Book A costs 100
// Book B costs 200
