        // Quick Assignment

// Create colors = ["red", "green", "blue"]
// Add "yellow" to the end.
// Remove the first color.
// Check if "blue" is included.
// Use slice() to copy "green" and "blue".

let colors = ["red", "green", "blue"];

colors.push("yellow");
console.log(colors);

colors.shift();
console.log(colors);

console.log(colors.includes("blue"));

let sliced = colors.slice(0,2);
console.log(sliced);