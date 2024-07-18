/*Map => works on key and value */

let data1 = new Map(); //declaration of map
let data = new Map([
  ["Nirali", 10],
  ["Mehul", 20],
  ["Shreya", 30],
  ["Dhyani", 40],
]); //declaration of map

console.log(data);
console.log(data.size); //gives length of map object

data.set("Sagar", 50);
console.log(data);
console.log(data.get("Shreya")); //get value of key
console.log(data.has("Shreya")); //check if key is present or not
console.log(data.has("shreya")); //check if key is present or not case sensitive

data.delete("Sagar"); //delete key
console.log(data);

let copy = data.entries(); //iterates value and assign
console.log(copy.next().value);
console.log(copy.next().value);
console.log(copy.next().value);
console.log(copy.next().value);

let text = "";
data.forEach((val, key) => {
  text += key + " --> " + val + "\n";
});
console.log(text);
