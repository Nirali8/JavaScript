/*Basic Function */

function hello() {
  console.log("Hello World");
}
hello(); //function call

/*Function with Parameters */

function sum(a, b) {
  console.log("Total = ", a + b);
}
function Multi(a, b) {
  return a * b;
}
sum(10, 29);
sum("a", 29);
console.log(Multi(10, 20));

/*Constructor Function */
{
  let data = new Function("a", "b", "console.log(a + b)");
  let data1 = new Function("a", "b", "{return a*b}");
  data(10, 20);
  console.log(data1(2, 5));
}

/*IIFE */
{
  (function hi(a, b) {
    console.log(a * b);
  })(11, 4);
}
