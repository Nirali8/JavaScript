/*Set method just like array but store only unique value */

let data = new Set([11, 22, 33, 44, 55, "Hi"]);
console.log(data);

data.add(5);
console.log(data);
console.log(data.size); //return length
console.log(data.values()); //iterates only values
console.log(data.entries()); //iterates key and values both key is same as value
console.log(data.has("Hi")); //check if value is present or not

let text = "";
data.forEach((val) => {
  text += "Value = " + val + "\n";
});
console.log(text);
data.delete("Hi"); //delete value
console.log(data);
data.clear(); //delete whole set
console.log(data);
