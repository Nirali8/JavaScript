/*Object declaration and access */
// let names = {
//   name1: "Nirali",
//   name2: "Mehul",
//   name3: "Shreya",
//   name4: "Dhyani",
// };
// console.log(names.name3); //access using dot operator
// console.log(names["name2"]); //access using [] bracket

/*assign Method */

// let obj1 = {
//   value1: "objectAssign1",
// };
// let obj2 = {
//   value2: "objectAssign2",
// };
// let obj = Object.assign(obj1, obj2);
// console.log(obj);
// console.log(obj1);
// console.log(obj2);

/*create Method */
// let profile = {
//   firstName: "Nirali Sanghani",
//   fullName: function () {
//     console.log(`${this.firstName}`);
//   },
// };

// profile.fullName();

// let secondProfile = Object.create(profile);
// secondProfile.firstName = "Shreya Sanghani";
// profile.fullName();
// console.log(profile);
// console.log(secondProfile);
// secondProfile.fullName();

/*defineProperties() */

// let object1 = {};
// Object.defineProperties(object1, {
//   property1: {
//     name: "Nirali",
//     value: 200,
//   },
//   property2: {
//     value: 400,
//     name: "Shreya",
//   },
// });

// console.log(object1.property1);
// console.log(object1);

/*defineProperty */
// let object1 = {};
// Object.defineProperty(object1, "property1", {
//   value: 500,
//   Writable: false,
// });
// object1.property1 = 400;
// console.log(object1.property1);
// console.log(object1);

/* Freeze method*/
// let obj = {
//   firstName: "Nirali",
//   lastName: "Sanghani",
//   age: 33,
// };
// console.log(obj);
// obj.firstName = "Shreya"; //change property
// console.log(obj);
// obj.address = "Surat"; //add property
// console.log(obj);
// let obj1 = Object.freeze(obj);
// console.log(obj1);
// obj.firstName = "Mehul"; //not change property
// console.log(obj);
// obj.gender = "Male"; //not add property
// console.log(obj);
// delete obj.firstName; //not delete
// console.log(obj);
// console.log(Object.isFrozen(obj));

/*seal Method */
// let obj = {
//   firstName: "Nirali",
//   lastName: "Sanghani",
//   age: 33,
// };
// console.log(obj);
// obj.firstName = "Shreya"; //change property
// console.log(obj);
// obj.address = "Surat"; //add property
// console.log(obj);

// Object.seal(obj);
// obj.firstName = "Mehul"; //can change value
// console.log(obj);

// obj.gender = "Male"; //cant add property
// console.log(obj);

// delete obj.lastName; //cant delete property
// console.log(obj);
// console.log(Object.isSealed(obj));

/*entries key and values */

// let obj = {
//   firstName: "Nirali",
//   lastName: "Sanghani",
//   age: 33,
// };

// for (let [key, value] of Object.entries(obj)) {
//   console.log(`${key} = ${value}`);
// }

// console.log(Object.keys(obj));//returns only keys
// console.log(Object.values(obj));//returns only values

/*getOwnPropertyNames */
// let obj = {
//   firstName: "Nirali",
//   lastName: "Sanghani",
//   age: 33,
// };
// console.log(Object.getOwnPropertyNames(obj));

/*hasOwn */
// let obj = {
//   firstName: "Nirali",
//   lastName: "Sanghani",
//   age: 33,
// };
// console.log(Object.hasOwn(obj, "firstName")); //retuurn true if property is present

/*is() Method */
console.log(Object.is("1", 1));
console.log(Object.is(NaN, NaN));
console.log(Object.is({}, {}));
console.log(Object.is([], []));
console.log(Object.is({}, []));
console.log(Object.is(undefined, undefined));
