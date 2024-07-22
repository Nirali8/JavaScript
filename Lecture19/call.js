/*Call Method */
let person = {
  sayHello: function (city) {
    return `${this.name} and ${this.age}
        city is: ${city}`;
  },
};
let data = {
  name: "Nirali",
  age: 33,
};
let data1 = {
  name: "Shreya",
  age: 3,
};

console.log(person.sayHello.call(data, "Rajkot"));
