let fruits = ["apple", "banana", "mango"];

    // 1. length – Get number of items

console.log(fruits.length);

    // 2. Includes(Value) - Check if value exists

console.log(fruits.includes("banana"));
console.log(fruits.includes("nai"));

    // 3. indexOf(value) - find index of value

console.log(fruits.indexOf("mango"));

    // 4. join(separator) - Convert array to string

let result = fruits.join(" , ") ;
console.log(result) ;

    // 5. slice(start, end) - Copy part of array (does not change original)

let sliced = fruits.slice(1, 3);
console.log(sliced);

    // splice(startIndex, Count) - Remove / Replace items (changes original)

fruits.splice(1,1);
console.log(fruits);
