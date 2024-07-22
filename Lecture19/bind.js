/*Call Method */
let person = {
  name: "Nirali",
  age: 33,
  sayHello: function (city) {
    return `${this.name} and ${this.age}
        city is: ${city}`;
  },
};

let data = {
  name: "Shreya",
  age: 3,
};

console.log(person.sayHello.bind(data, "Rajkot")());
