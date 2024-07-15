/*High order Function */
/*Function as object */
function sumAll() {
  //   console.log(arguments);
  let total = 0;
  //   for (let i = 0; i < arguments.length; i++) {
  for (index of arguments) {
    total += index; //arguments[i];
  }
  return total;
}
console.log(sumAll(2, 3, 4, 15, 55));

/*rest parameter(...) */
function hello(...args) {
  console.log(args);
  return args;
}
console.log(hello(1, 2, 3, 4, 5, 6, 7, 8, 9));

/*Generator */
function* test() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield "test";
  return "hello";
}
let data = test();
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value); //undefine

/*this Keyword */
let person = {
  firstName: "Nirali",
  lastName: "Sanghani",
  age: 33,
  hobbies: ["Cricket", "Music", "Dance", "Reading"],
  info: function () {
    console.log(`Person Information : 
            ${this.firstName} ${this.lastName} is ${this.age} years old her hobbies are : ${this.hobbies}`);
  },
};
person.info();
