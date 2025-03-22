let person = {
    name : "Alice" ,
    age : 25 ,
    isStudent : true ,
};

console.log(person);

console.log(person.name);

console.log(person["name"]);

person.name = "Hajjaj" ;
console.log(person.name);
console.log(person);

person.city = "Dhaka";
console.log(person);
console.log(person.city);

delete person.city;
console.log(person);

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));


let keys = Object.keys(person);
console.log(keys);

let values = Object.values(person);
console.log(values);

let entries = Object.entries(person);
console.log(entries);

for (let key in person) {
    console.log(key + " : " + person[key]);
}

