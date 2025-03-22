let fruits = ["apple", "banana", "orange"];

console.log(fruits[2]);

fruits[2] = "mango";
console.log(fruits);

fruits.push("grape");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("first");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.includes("first"));
console.log(fruits.includes("mango"));

console.log(fruits.indexOf("mango"));

let sliced = fruits.slice(1,3);
console.log(sliced);

fruits.splice(0,1);
console.log(fruits);

let joining = fruits.join(" , ");
console.log(joining);

for (let fruit of fruits) {
    console.log(fruit);
}