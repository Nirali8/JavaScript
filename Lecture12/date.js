/*Date MEthod */

let date = new Date();
console.log(date);
let date1 = new Date("1989-11-29");
console.log(date1);
let date2 = new Date(2021, 3, 8, 21, 66, 102);
console.log(date2);
let date3 = new Date(15555555555);
console.log(date3);

console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toUTCString());
console.log(date.toISOString);

console.log(date1.toDateString);
console.log(date1.toLocaleDateString);
console.log(date1.toTimeString());
console.log(date1.toLocaleTimeString());

/*Get MEthod */
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDate());
console.log(date2.getDay());
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getSeconds());
console.log(date2.getMilliseconds());
console.log(date2.getTime());
console.log(date2.getTimezoneOffset());

/*Set Method */
console.log(date.setFullYear(2021));
console.log(date.setMonth(20));
console.log(date.setDate(20));
console.log(date.setHours(20));
console.log(date.setMinutes(20));
console.log(date.setSeconds(20));
